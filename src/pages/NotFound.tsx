import { Seo, Btn } from '../components/ui'

export default function NotFound() {
  return (
    <>
      <Seo title="Sayfa bulunamadı" description="Aradığınız sayfa bulunamadı." noindex />
      <section className="thanks">
        <div className="container thanks__in">
          <p className="nf__code" aria-hidden="true">IZM → ???</p>
          <h1>Bu rotada bir sayfa bulamadık.</h1>
          <p>Bağlantı değişmiş veya sayfa kaldırılmış olabilir. Ana sayfadan veya programlardan devam edebilirsiniz.</p>
          <div className="phero__actions">
            <Btn to="/" icon="arrow">Ana sayfaya dön</Btn>
            <Btn to="/yurtdisi-egitim" variant="line">Programları incele</Btn>
          </div>
        </div>
      </section>
    </>
  )
}
