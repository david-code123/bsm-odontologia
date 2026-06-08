const WA_LINK = 'https://wa.me/5562993557723?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20tratamentos%20da%20BSM%20Odontologia.'

const treatments = [
  {
    icon: '🦷',
    title: 'Implantes Dentários',
    desc: 'Reposição de dentes perdidos com implantes de titânio de alta qualidade, devolvendo função e estética com naturalidade.',
  },
  {
    icon: '😁',
    title: 'Ortodontia',
    desc: 'Alinhamento dos dentes com aparelhos modernos, incluindo opções metálicas, estéticas e alinhadores transparentes.',
  },
  {
    icon: '✨',
    title: 'Clareamento Dental',
    desc: 'Clareamento seguro e eficaz para um sorriso mais branco e radiante, com técnicas de consultório e caseiras.',
  },
  {
    icon: '💎',
    title: 'Lentes de Contato Dental',
    desc: 'Ultra-finas camadas de porcelana que transformam completamente o sorriso com mínimo desgaste dental.',
  },
  {
    icon: '🌟',
    title: 'Facetas de Porcelana',
    desc: 'Facetas em cerâmica de alta resistência para corrigir forma, cor e proporção dos dentes anteriores.',
  },
  {
    icon: '🦴',
    title: 'Prótese Dentária',
    desc: 'Próteses fixas e removíveis personalizadas para reabilitar a função mastigatória e a estética do sorriso.',
  },
  {
    icon: '💉',
    title: 'Harmonização Orofacial',
    desc: 'Procedimentos estéticos faciais como preenchimento labial, bichectomia e botox para harmonizar o rosto.',
  },
  {
    icon: '🪥',
    title: 'Limpeza e Profilaxia',
    desc: 'Limpeza profissional completa, remoção de tártaro e orientação de higiene bucal para manter a saúde dos dentes e gengivas.',
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
            Oferecemos uma ampla gama de tratamentos odontológicos com tecnologia de ponta
            e profissionais especializados para cada necessidade.
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
