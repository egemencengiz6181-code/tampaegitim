// İçerik deposu (Cloudflare Pages Functions): her kayıt GitHub'a tek commit olarak yazılır;
// Cloudflare Pages bu commit'i görüp siteyi yeniden derler.
// Yerel geliştirmede (GITHUB_TOKEN yokken) dosya sistemine yazan sürüm api/_lib/store.js içindedir.
import { HttpError } from './http.js'
import { b64encode } from './bytes.js'

const DIR = 'content/blog'
const repo = (env) => env.GITHUB_REPO || 'egemencengiz6181-code/tampaegitim'
const branch = (env) => env.GITHUB_BRANCH || 'main'

export function getStore(env) {
  if (!env.GITHUB_TOKEN) throw new HttpError(503, 'Yönetim paneli henüz yapılandırılmadı (GITHUB_TOKEN ortam değişkeni eksik).')
  return githubStore(env)
}

function githubStore(env) {
  const token = env.GITHUB_TOKEN
  const [owner, name] = repo(env).split('/')

  async function gh(url, init = {}) {
    const res = await fetch(url.startsWith('http') ? url : `https://api.github.com${url}`, {
      ...init,
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28',
        'User-Agent': 'tampa-admin',
        ...(init.body ? { 'Content-Type': 'application/json' } : {}),
      },
    })
    if (res.status === 401 || res.status === 403) throw new HttpError(502, 'GitHub erişimi reddedildi. GITHUB_TOKEN yetkilerini kontrol edin.')
    if (!res.ok && res.status !== 404 && res.status !== 422) throw new HttpError(502, `GitHub hatası (${res.status}).`)
    return res
  }

  async function graphql(queryText, variables) {
    const res = await gh('/graphql', { method: 'POST', body: JSON.stringify({ query: queryText, variables }) })
    const json = await res.json()
    if (json.errors?.length) throw new HttpError(502, `GitHub hatası: ${json.errors[0].message}`)
    return json.data
  }

  /** content/blog altındaki tüm .json dosyalarını tek istekte okur. */
  async function listMeta() {
    const data = await graphql(
      `query($owner:String!,$name:String!,$expr:String!){repository(owner:$owner,name:$name){object(expression:$expr){... on Tree{entries{name oid object{... on Blob{text}}}}}}}`,
      { owner, name, expr: `${branch(env)}:${DIR}` },
    )
    const entries = data.repository?.object?.entries ?? []
    return entries.filter((e) => e.name.endsWith('.json')).map((e) => ({ meta: JSON.parse(e.object.text), oid: e.oid }))
  }

  async function read(slug) {
    const data = await graphql(
      `query($owner:String!,$name:String!,$j:String!,$m:String!){repository(owner:$owner,name:$name){j:object(expression:$j){oid ... on Blob{text}} m:object(expression:$m){... on Blob{text}}}}`,
      { owner, name, j: `${branch(env)}:${DIR}/${slug}.json`, m: `${branch(env)}:${DIR}/${slug}.md` },
    )
    const j = data.repository?.j
    if (!j) return null
    return { meta: JSON.parse(j.text), body: data.repository.m?.text ?? '', oid: j.oid }
  }

  async function readText(file) {
    const data = await graphql(`query($owner:String!,$name:String!,$e:String!){repository(owner:$owner,name:$name){object(expression:$e){... on Blob{text}}}}`, {
      owner,
      name,
      e: `${branch(env)}:${file}`,
    })
    return data.repository?.object?.text ?? null
  }

  /** Birden çok dosyayı tek commit ile yazar/siler (Git Data API). */
  async function commit(message, { write = [], remove = [] }) {
    const refUrl = `/repos/${owner}/${name}/git/ref/heads/${branch(env)}`
    const ref = await (await gh(refUrl)).json()
    const baseSha = ref.object.sha
    const baseCommit = await (await gh(`/repos/${owner}/${name}/git/commits/${baseSha}`)).json()
    const tree = []
    for (const f of write) {
      if (f.content instanceof Uint8Array) {
        const blob = await (await gh(`/repos/${owner}/${name}/git/blobs`, { method: 'POST', body: JSON.stringify({ content: b64encode(f.content), encoding: 'base64' }) })).json()
        tree.push({ path: f.path, mode: '100644', type: 'blob', sha: blob.sha })
      } else {
        tree.push({ path: f.path, mode: '100644', type: 'blob', content: f.content })
      }
    }
    for (const p of remove) tree.push({ path: p, mode: '100644', type: 'blob', sha: null })
    const newTree = await (await gh(`/repos/${owner}/${name}/git/trees`, { method: 'POST', body: JSON.stringify({ base_tree: baseCommit.tree.sha, tree }) })).json()
    if (!newTree.sha) throw new HttpError(502, 'GitHub dosya ağacı oluşturulamadı.')
    const c = await (await gh(`/repos/${owner}/${name}/git/commits`, { method: 'POST', body: JSON.stringify({ message, tree: newTree.sha, parents: [baseSha] }) })).json()
    const upd = await gh(`/repos/${owner}/${name}/git/refs/heads/${branch(env)}`, { method: 'PATCH', body: JSON.stringify({ sha: c.sha, force: false }) })
    if (!upd.ok) throw new HttpError(409, 'Bu sırada depoda başka bir değişiklik yapıldı. Lütfen tekrar kaydedin.')
    return { sha: c.sha }
  }

  /** Son commit için yayın durumu (GitHub Deployments API; Cloudflare Pages GitHub entegrasyonu da buraya yazar). */
  async function deployStatus() {
    const ref = await (await gh(`/repos/${owner}/${name}/git/ref/heads/${branch(env)}`)).json()
    const sha = ref.object?.sha
    const deps = await (await gh(`/repos/${owner}/${name}/deployments?sha=${sha}&per_page=5`)).json()
    if (!Array.isArray(deps) || !deps.length) return { sha, state: 'pending' }
    const prod = deps.find((d) => /production/i.test(d.environment)) ?? deps[0]
    const statuses = await (await gh(`/repos/${owner}/${name}/deployments/${prod.id}/statuses?per_page=1`)).json()
    return { sha, state: statuses[0]?.state ?? 'pending', url: statuses[0]?.environment_url ?? null }
  }

  return { kind: 'github', listMeta, read, readText, commit, deployStatus }
}

export const paths = {
  json: (slug) => `${DIR}/${slug}.json`,
  md: (slug) => `${DIR}/${slug}.md`,
}
