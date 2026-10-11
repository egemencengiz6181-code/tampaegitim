// /api/admin uç noktaları için istemci.
import type { PostFile } from '../../data/blog'

export type AdminPost = PostFile & { oid?: string }
export type Me = { authed: boolean; configured: boolean; storage: 'github' | 'local' | 'missing' }
export type Upload = { path: string; data: string }
export type DeployState = { sha: string; state: 'pending' | 'queued' | 'in_progress' | 'success' | 'failure' | 'error' | 'inactive' | 'local'; url?: string | null }

export class ApiError extends Error {
  status: number
  constructor(status: number, message: string) {
    super(message)
    this.status = status
  }
}

async function call<T>(url: string, init: RequestInit = {}): Promise<T> {
  let res: Response
  try {
    res = await fetch(url, {
      ...init,
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json', 'X-Admin-Request': '1', ...init.headers },
    })
  } catch {
    throw new ApiError(0, 'Sunucuya ulaşılamadı. İnternet bağlantınızı kontrol edin.')
  }
  const data = await res.json().catch(() => ({}))
  if (!res.ok) throw new ApiError(res.status, (data as { error?: string }).error ?? `İstek başarısız (${res.status}).`)
  return data as T
}

export const api = {
  me: () => call<Me>('/api/admin/me'),
  login: (password: string) => call<{ ok: true }>('/api/admin/login', { method: 'POST', body: JSON.stringify({ password }) }),
  logout: () => call<{ ok: true }>('/api/admin/logout', { method: 'POST' }),
  list: () => call<{ storage: string; posts: AdminPost[] }>('/api/admin/posts'),
  get: (slug: string) => call<{ meta: PostFile; body: string; oid: string }>(`/api/admin/posts?slug=${encodeURIComponent(slug)}`),
  save: (payload: { post: PostFile & { body: string }; uploads: Upload[]; originalSlug: string | null; baseOid: string | null }) =>
    call<{ ok: true; commit: string; post: { meta: PostFile; body: string; oid: string } }>('/api/admin/posts', { method: 'PUT', body: JSON.stringify(payload) }),
  remove: (slug: string) => call<{ ok: true; commit: string }>(`/api/admin/posts?slug=${encodeURIComponent(slug)}`, { method: 'DELETE' }),
  status: () => call<DeployState>('/api/admin/status'),
}
