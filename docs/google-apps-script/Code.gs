/**
 * Tampa Yurtdışı Eğitim – Web sitesi form başvuruları
 * ---------------------------------------------------
 * Siteden gelen her başvuruyu bu Google E-Tablo'ya satır olarak ekler ve Gmail ile bildirim gönderir.
 * Kurulum adımları: depodaki docs/FORMLAR.md dosyası.
 *
 * YALNIZCA AŞAĞIDAKİ AYARLAR BÖLÜMÜNÜ DÜZENLEYİN.
 */

// ======================= AYARLAR =======================
const AYARLAR = {
  // Vercel'deki LEAD_WEBHOOK_SECRET ile birebir aynı olmalı (uzun, rastgele bir metin).
  GIZLI_ANAHTAR: 'BURAYA-UZUN-RASTGELE-BIR-ANAHTAR-YAZIN',

  // Tüm başvuruların gideceği adres(ler). Birden fazlaysa virgülle ayırın.
  ALICILAR: 'info@tampaegitim.com.tr',

  // (İsteğe bağlı) Belirli formları ayrıca başka adreslere de gönder.
  // Anahtar: formun kaynağının başı. Ör. 'konaklama' → konaklama formları, 'lp' → reklam sayfaları.
  // Örnek: { konaklama: 'konaklama@tampaegitim.com.tr', lp: 'reklam@tampaegitim.com.tr' }
  EK_ALICILAR: {},

  // Bildirim e-postasında görünen gönderen adı
  GONDEREN_ADI: 'Tampa Web Sitesi',

  // Başvurana otomatik "başvurunuz alındı" e-postası gönderilsin mi? (yalnızca e-posta yazdıysa)
  OTOMATIK_YANIT: false,
  OTOMATIK_YANIT_KONU: 'Başvurunuz bize ulaştı – Tampa Yurtdışı Eğitim',
  OTOMATIK_YANIT_METNI:
    'Merhaba {ad},\n\n' +
    'Yurtdışı eğitim başvurunuz bize ulaştı. Danışmanlarımız en kısa sürede sizi arayacak.\n\n' +
    'Acil sorularınız için +90 530 881 07 09 numarasından bize ulaşabilir veya WhatsApp’tan yazabilirsiniz.\n\n' +
    'Sevgiler,\nTampa Yurtdışı Eğitim\nhttps://www.tampaegitim.com.tr',

  // Başvuruların yazılacağı sayfa (sekme) adı
  SAYFA_ADI: 'Başvurular',
}
// ===================== AYARLAR SONU =====================

const SUTUNLAR = [
  ['date', 'Tarih'],
  ['name', 'Ad soyad'],
  ['phone', 'Telefon'],
  ['email', 'E-posta'],
  ['program', 'Program'],
  ['country', 'Ülke'],
  ['message', 'Mesaj'],
  ['form', 'Form'],
  ['page', 'Sayfa'],
  ['utm_source', 'Kaynak (utm_source)'],
  ['utm_medium', 'Ortam (utm_medium)'],
  ['utm_campaign', 'Kampanya (utm_campaign)'],
  ['utm_term', 'Anahtar kelime (utm_term)'],
  ['utm_content', 'Reklam (utm_content)'],
  ['gclid', 'Google Ads tıklama (gclid)'],
  ['fbclid', 'Meta tıklama (fbclid)'],
  ['referrer', 'Yönlendiren site'],
  ['landing', 'İlk giriş sayfası'],
  ['source', 'Form kodu'],
  ['durum', 'Durum'],
  ['not', 'Danışman notu'],
]

/** Site bu adrese POST eder. */
function doPost(e) {
  try {
    const body = JSON.parse((e && e.postData && e.postData.contents) || '{}')
    if (!body.secret || body.secret !== AYARLAR.GIZLI_ANAHTAR) return yanit_({ ok: false, error: 'yetkisiz' })
    const lead = body.lead || {}
    if (!lead.name || !lead.phone) return yanit_({ ok: false, error: 'eksik veri' })

    const lock = LockService.getScriptLock()
    lock.waitLock(20000)
    try {
      satirEkle_(lead)
    } finally {
      lock.releaseLock()
    }

    try {
      bildirimGonder_(lead)
    } catch (err) {
      // E-posta gönderilemese bile başvuru tabloya kaydedildi
      console.error('Bildirim gönderilemedi: ' + err)
    }
    if (AYARLAR.OTOMATIK_YANIT && lead.email) {
      try {
        otomatikYanit_(lead)
      } catch (err) {
        console.error('Otomatik yanıt gönderilemedi: ' + err)
      }
    }
    return yanit_({ ok: true })
  } catch (err) {
    console.error(err)
    return yanit_({ ok: false, error: String(err) })
  }
}

/** Tarayıcıdan açıldığında çalıştığını gösterir. */
function doGet() {
  return yanit_({ ok: true, servis: 'Tampa form alıcısı çalışıyor' })
}

function sayfa_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet()
  let sh = ss.getSheetByName(AYARLAR.SAYFA_ADI)
  if (!sh) sh = ss.insertSheet(AYARLAR.SAYFA_ADI)
  if (sh.getLastRow() === 0) {
    sh.appendRow(SUTUNLAR.map((c) => c[1]))
    sh.getRange(1, 1, 1, SUTUNLAR.length).setFontWeight('bold').setBackground('#0c3a46').setFontColor('#ffffff')
    sh.setFrozenRows(1)
    sh.setColumnWidth(1, 140)
    sh.setColumnWidth(2, 160)
    sh.setColumnWidth(7, 320)
    // Durum sütunu için açılır liste
    const durumCol = SUTUNLAR.findIndex((c) => c[0] === 'durum') + 1
    const kural = SpreadsheetApp.newDataValidation().requireValueInList(['Yeni', 'Arandı', 'Ulaşılamadı', 'Görüşme yapıldı', 'Teklif verildi', 'Kayıt oldu', 'İlgilenmiyor'], true).build()
    sh.getRange(2, durumCol, 1000, 1).setDataValidation(kural)
  }
  return sh
}

function satirEkle_(lead) {
  const sh = sayfa_()
  const row = SUTUNLAR.map(([key]) => {
    if (key === 'durum') return 'Yeni'
    if (key === 'not') return ''
    const v = lead[key] == null ? '' : String(lead[key])
    // Formül enjeksiyonunu engelle (=, +, -, @ ile başlayan değerler metin olarak yazılır)
    return /^[=+\-@]/.test(v) ? "'" + v : v
  })
  sh.appendRow(row)
  // Telefon numarası sayı olarak bozulmasın
  const phoneCol = SUTUNLAR.findIndex((c) => c[0] === 'phone') + 1
  sh.getRange(sh.getLastRow(), phoneCol).setNumberFormat('@').setValue(String(lead.phone))
}

function alicilar_(lead) {
  const list = AYARLAR.ALICILAR.split(',').map((s) => s.trim()).filter(Boolean)
  const head = String(lead.source || '').split(':')[0]
  const ek = AYARLAR.EK_ALICILAR[head]
  if (ek) ek.split(',').map((s) => s.trim()).filter(Boolean).forEach((a) => list.indexOf(a) === -1 && list.push(a))
  return list.join(',')
}

const esc_ = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

function bildirimGonder_(lead) {
  const tel = String(lead.phone || '').replace(/[^\d+]/g, '')
  const wa = tel.replace(/^\+/, '').replace(/^0/, '90')
  const konu = 'Yeni başvuru: ' + lead.name + (lead.program ? ' – ' + lead.program : '') + (lead.country ? ' / ' + lead.country : '')
  const satir = (k, v) => (v ? '<tr><td style="padding:6px 12px 6px 0;color:#506670;white-space:nowrap;vertical-align:top">' + k + '</td><td style="padding:6px 0;color:#0f262c">' + v + '</td></tr>' : '')
  const kaynak = [lead.utm_source, lead.utm_medium, lead.utm_campaign].filter(Boolean).join(' / ')
  const html =
    '<div style="font-family:Arial,sans-serif;font-size:15px;line-height:1.5;max-width:620px">' +
    '<h2 style="margin:0 0 4px;color:#0c3a46">Yeni web sitesi başvurusu</h2>' +
    '<p style="margin:0 0 16px;color:#506670">' + esc_(lead.date) + ' · ' + esc_(lead.form) + '</p>' +
    '<p style="margin:0 0 16px">' +
    '<a href="tel:' + esc_(tel) + '" style="display:inline-block;background:#d93a42;color:#fff;padding:10px 16px;border-radius:999px;text-decoration:none;font-weight:bold;margin-right:8px">Ara: ' + esc_(lead.phone) + '</a>' +
    '<a href="https://wa.me/' + esc_(wa) + '" style="display:inline-block;background:#25d366;color:#fff;padding:10px 16px;border-radius:999px;text-decoration:none;font-weight:bold">WhatsApp</a>' +
    '</p>' +
    '<table style="border-collapse:collapse">' +
    satir('Ad soyad', esc_(lead.name)) +
    satir('Telefon', esc_(lead.phone)) +
    satir('E-posta', lead.email ? '<a href="mailto:' + esc_(lead.email) + '">' + esc_(lead.email) + '</a>' : '') +
    satir('Program', esc_(lead.program)) +
    satir('Ülke', esc_(lead.country)) +
    satir('Mesaj', esc_(lead.message).replace(/\n/g, '<br>')) +
    satir('Form', esc_(lead.form)) +
    satir('Sayfa', '<a href="' + esc_(lead.page) + '">' + esc_(lead.page) + '</a>') +
    satir('Reklam kaynağı', esc_(kaynak)) +
    satir('Anahtar kelime', esc_(lead.utm_term)) +
    satir('Google Ads', lead.gclid ? 'Evet (gclid)' : '') +
    satir('Yönlendiren', esc_(lead.referrer)) +
    '</table>' +
    '<p style="margin-top:20px;color:#506670;font-size:13px">Tüm başvurular: <a href="' + SpreadsheetApp.getActiveSpreadsheet().getUrl() + '">Başvuru tablosu</a></p>' +
    '</div>'

  const opts = { name: AYARLAR.GONDEREN_ADI, htmlBody: html }
  if (lead.email) opts.replyTo = lead.email
  MailApp.sendEmail(alicilar_(lead), konu, 'Yeni başvuru: ' + lead.name + ' – ' + lead.phone, opts)
}

function otomatikYanit_(lead) {
  const ad = String(lead.name || '').split(' ')[0]
  MailApp.sendEmail(lead.email, AYARLAR.OTOMATIK_YANIT_KONU, AYARLAR.OTOMATIK_YANIT_METNI.replace('{ad}', ad), {
    name: 'Tampa Yurtdışı Eğitim',
    replyTo: AYARLAR.ALICILAR.split(',')[0].trim(),
  })
}

function yanit_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON)
}

/**
 * KURULUM TESTİ: Apps Script editöründe bu fonksiyonu seçip "Çalıştır"a basın.
 * İzinleri onaylatır, tabloya örnek bir satır ekler ve ALICILAR adresine test e-postası gönderir.
 */
function testGonder() {
  const lead = {
    date: new Date().toLocaleString('tr-TR', { timeZone: 'Europe/Istanbul' }),
    name: 'Test Başvurusu',
    phone: '05300000000',
    email: '',
    program: 'Dil okulu',
    country: 'İngiltere',
    message: 'Bu bir kurulum testidir, silebilirsiniz.',
    form: 'Kurulum testi',
    source: 'test',
    page: 'https://www.tampaegitim.com.tr/',
  }
  satirEkle_(lead)
  bildirimGonder_(lead)
}
