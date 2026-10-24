import { Link } from 'react-router-dom'
import { Seo, Btn, FaqList, CheckList, SectionHead } from '../components/ui'
import { Icon } from '../components/Icon'
import { RouteSteps } from '../components/signature'
import { PageHero, CtaBand } from '../components/layouts'
import { LeadForm } from '../components/LeadForm'
import { Rich } from '../components/Rich'
import { offices, site } from '../data/site'
import { localPages } from '../data/local'
import { localBusinessLd } from '../seo/schema'
import NotFound from './NotFound'

/* ---------- /izmir-yurt-disi-egitim, /aydin-yurt-disi-egitim ---------- */
export function LocalPage({ slug }: { slug: string }) {
  const l = localPages.find((x) => x.slug === slug)
  const o = l && offices.find((x) => x.slug === l.office)
  if (!l || !o) return <NotFound />
  const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(o.mapQuery)}`
  return (
    <>
      <Seo title={l.seoTitle} description={l.description} path={`/${l.slug}`} image={o.image} jsonLd={{ '@context': 'https://schema.org', ...localBusinessLd(o) }} />
      <PageHero
        image={o.image}
        crumbs={[{ label: 'Ofislerimiz', to: '/ofislerimiz' }, { label: `${l.city} yurt dışı eğitim` }]}
        title={`${l.city} Yurt Dışı Eğitim Danışmanlığı`}
        lead={l.lead}
        aside={
          <div className="factcard">
            <p className="factcard__h">{o.title}</p>
            <dl>
              <div><dt>Adres</dt><dd>{o.address}</dd></div>
              {o.phone && <div><dt>Telefon</dt><dd><a href={o.phoneHref}>{o.phone}</a></dd></div>}
              <div><dt>Görüşme</dt><dd>Ofiste, telefonla veya online</dd></div>
            </dl>
          </div>
        }
      >
        <Btn href="#form" size="lg" icon="arrow">Randevu al</Btn>
        <Btn href={mapHref} variant="light" size="lg">Yol tarifi</Btn>
      </PageHero>

      <section className="section">
        <div className="container twocol twocol--wide">
          <div>
            <h2 className="h2">{l.city}’den Yurt Dışına</h2>
            {l.intro.map((p, i) => <p key={i} className={i === 0 ? 'lead-strong' : undefined}><Rich text={p} /></p>)}
          </div>
          <div>
            <h2 className="h3">Hizmet Verdiğimiz Bölgeler</h2>
            <CheckList items={l.nearby} />
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="container">
          <SectionHead title="Programlar" intro={`${l.city} ofisimizden planladığımız yurt dışı eğitim programları.`} />
          <div className="advgrid">
            {l.services.map((s) => <article key={s.title} className="advcard"><h3>{s.title}</h3><p><Rich text={s.text} /></p></article>)}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container twocol">
          <div>
            <h2 className="h2">Vize Başvuru Merkezleri</h2>
            <dl className="featlist">
              {l.visaCenters.map((v) => <div key={v.country}><dt>{v.country}</dt><dd><Rich text={v.text} /></dd></div>)}
            </dl>
            <p className="muted small">Randevu ve adres bilgileri değişebilir; başvuru öncesinde resmi siteden kontrol ediyoruz. Ayrıntılar: <Link to="/hizmetler/vize-danismanligi">vize danışmanlığı</Link>.</p>
          </div>
          <div>
            <h2 className="h2">Dil Sınavları</h2>
            <ul className="checks">{l.exams.map((t) => <li key={t}><Icon name="check" size={18} /> <span><Rich text={t} /></span></li>)}</ul>
            <h2 className="h3">Uçuşlar</h2>
            <p><Rich text={l.flights} /></p>
          </div>
        </div>
      </section>

      <section className="section section--deep">
        <div className="container">
          <SectionHead title="Nasıl Çalışıyoruz?" intro={`İlk görüşmeden ${l.city}’den uçağa binene kadar.`} />
          <RouteSteps steps={l.process} dark />
        </div>
      </section>

      <section className="section" id="form">
        <div className="container twocol">
          <div>
            <h2 className="h2">Sık Sorulan Sorular</h2>
            <FaqList items={l.faqs} />
            <p className="note"><Icon name="bolt" size={16} /> Tüm ofislerimiz: <Link to="/ofislerimiz">ofislerimiz</Link> · WhatsApp: <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">{site.phone}</a></p>
          </div>
          <LeadForm source={`yerel:${l.slug}`} title={`${l.city} ofisimizden randevu alın`} note="Size uygun gün ve saati yazın; danışmanımız aynı gün dönsün." />
        </div>
      </section>
      <CtaBand />
    </>
  )
}
