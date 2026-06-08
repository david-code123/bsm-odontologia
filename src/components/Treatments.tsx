import { useState } from 'react'

const WA_LINK = 'https://wa.me/5562993557723?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20tratamentos%20da%20BSM%20Odontologia.'

const categories = [
  {
    id: 'facial',
    label: '💉 Estética Facial',
    treatments: [
      { icon: '💉', title: 'Botox', desc: 'Aplicação de toxina botulínica para suavizar linhas de expressão e rugas, com resultado natural e duradouro.' },
      { icon: '✂️', title: 'Lipo de Papada', desc: 'Procedimento minimamente invasivo para redução da gordura localizada na região do pescoço e mento.' },
      { icon: '🔬', title: 'Platismoplastia', desc: 'Tratamento estético para rejuvenescimento e definição do contorno do pescoço e região cervical.' },
      { icon: '✨', title: 'Harmonização Facial', desc: 'Conjunto de procedimentos estéticos para equilibrar as proporções do rosto e realçar a beleza natural.' },
    ],
  },
  {
    id: 'corporal',
    label: '💠 Estética Corporal',
    treatments: [
      { icon: '🌿', title: 'Depilação', desc: 'Tratamento de depilação com tecnologia avançada para resultados duradouros e pele sedosa.' },
      { icon: '💧', title: 'Detox Corporal', desc: 'Tratamento corporal detoxificante para eliminar toxinas, melhorar a circulação e revitalizar o corpo.' },
      { icon: '⚡', title: 'Tratamento para Flacidez', desc: 'Procedimentos corporais com equipamentos de última geração para firmeza e definição da pele.' },
    ],
  },
]

export default function Treatments() {
  const [active, setActive] = useState(0)

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

        <div className="treatments-tabs reveal" role="tablist" aria-label="Categorias de tratamentos">
          {categories.map((cat, i) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={active === i}
              aria-controls={`tab-panel-${cat.id}`}
              className={`treatments-tab${active === i ? ' active' : ''}`}
              onClick={() => setActive(i)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {categories.map((cat, i) => (
          <div
            key={cat.id}
            id={`tab-panel-${cat.id}`}
            role="tabpanel"
            hidden={active !== i}
            aria-label={cat.label}
          >
            <ul className="treatments-grid" role="list" aria-label={`Tratamentos de ${cat.label}`}>
              {cat.treatments.map((t, j) => (
                <li key={t.title} className="treatment-card reveal" style={{ transitionDelay: `${j * 60}ms` }} role="listitem">
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
        ))}
      </div>
    </section>
  )
}
