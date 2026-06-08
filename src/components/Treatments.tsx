const WA_LINK = 'https://wa.me/5562993557723?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20tratamentos%20da%20BSM%20Odontologia.'

const treatments = [
  {
    icon: '✨',
    title: 'Harmonização Facial — FullFace',
    desc: 'Procedimento completo para harmonizar todas as regiões do rosto, realçando a beleza natural com resultados equilibrados e sofisticados.',
  },
  {
    icon: '💉',
    title: 'Papada',
    desc: 'Tratamento minimamente invasivo para redução e definição da região submentoniana, devolvendo contorno e elegância ao perfil.',
  },
  {
    icon: '👁️',
    title: 'Rejuvenescimento do Olhar',
    desc: 'Procedimentos estéticos para suavizar olheiras, pálpebras caídas e rugas ao redor dos olhos, devolvendo um olhar jovem e descansado.',
  },
  {
    icon: '👂',
    title: 'Otomodelação',
    desc: 'Correção estética das orelhas sem cirurgia, remodelando a cartilagem para um resultado natural, seguro e sem cortes.',
  },
  {
    icon: '🦷',
    title: 'Tratamentos Odontológicos',
    desc: 'Cuidado completo da saúde bucal com técnicas modernas: lentes de contato dental, clareamento, facetas e muito mais.',
  },
  {
    icon: '💠',
    title: 'Tratamentos Corporais',
    desc: 'Procedimentos estéticos corporais com tecnologia avançada para modelagem, firmeza e bem-estar geral do corpo.',
  },
]

export default function Treatments() {
  return (
    <section id="tratamentos" className="treatments" aria-labelledby="treatments-title">
      <div className="container">
        <header className="treatments-header reveal">
          <p className="section-tag">Especialidades</p>
          <h2 className="section-title" id="treatments-title">
            Nossos <span>Tratamentos</span>
          </h2>
          <p className="section-subtitle">
            Especialistas em transformar rostos, sorrisos e corpos com tecnologia avançada e atendimento humanizado.
          </p>
        </header>

        <ul className="treatments-grid" role="list" aria-label="Tratamentos disponíveis">
          {treatments.map((t, i) => (
            <li key={t.title} className="treatment-card reveal" style={{ transitionDelay: `${i * 60}ms` }} role="listitem">
              <div className="treatment-icon" aria-hidden="true">{t.icon}</div>
              <h3 className="treatment-title">{t.title}</h3>
              <p className="treatment-desc">{t.desc}</p>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="treatment-link"
                aria-label={`Saiba mais sobre ${t.title}`}
              >
                Saiba Mais
                <span className="treatment-link-arrow" aria-hidden="true">→</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
