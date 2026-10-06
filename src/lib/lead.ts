export type Lead = {
  name: string
  phone: string
  email?: string
  program?: string
  country?: string
  message?: string
  source: string
}

/**
 * Form gönderimi. VITE_LEAD_ENDPOINT tanımlıysa JSON olarak POST edilir
 * (CRM, Zapier, form servisi vb.). Tanımlı değilse yerel geliştirme için başarılı kabul edilir.
 */
export async function submitLead(lead: Lead): Promise<void> {
  const endpoint = import.meta.env.VITE_LEAD_ENDPOINT as string | undefined
  const payload = { ...lead, page: window.location.pathname, ts: new Date().toISOString() }
  if (!endpoint) {
    await new Promise((r) => setTimeout(r, 600))
    console.info('[lead]', payload)
    return
  }
  const res = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) })
  if (!res.ok) throw new Error(`Form gönderilemedi (${res.status})`)
}

export const programOptions = ['Dil okulu', 'Yaz okulu', 'Lise', 'Üniversite', 'Yüksek lisans', 'Work and study', 'Her şey dahil paket', 'Mentörlük / kariyer rehberliği', 'Diğer']
