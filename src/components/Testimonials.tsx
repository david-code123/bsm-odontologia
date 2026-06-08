import { useState, useCallback } from 'react'

const testimonials = [
  {
    text: 'Ótima qualidade no serviço, atendimento de primeira e excelente custo-benefício. Saí com um sorriso novo e muito mais confiante. Recomendo a todos!',
    name: 'Maria Clara S.',
    label: 'Paciente — Implante Dentário',
    initials: 'MC',
  },
  {
    text: 'Clínica ampla, bem organizada e com ótimos profissionais. O ambiente é acolhedor e a equipe super atenciosa. Fiz meu clareamento e ficou perfeito!',
    name: 'João Paulo R.',
    label: 'Paciente — Clareamento Dental',
    initials: 'JP',
  },
  {
    text: 'Excelente atendimento e resultados incríveis. Fiz minhas facetas de porcelana aqui e o resultado superou todas as minhas expectativas. Obrigada equipe BSM!',
    name: 'Fernanda Lima',
    label: 'Paciente — Facetas de Porcelana',
    initials: 'FL',
  },
  {
    text: 'Profissionais extremamente competentes e atenciosos. Me senti acolhida desde a primeira consulta. A harmonização orofacial ficou natural e linda!',
    name: 'Camila Andrade',
    label: 'Paciente — Harmonização Orofacial',
    initials: 'CA',
  },
  {
    text: 'Indico de olhos fechados! Fiz meu tratamento ortodôntico aqui e a evolução foi surpreendente. Equipe dedicada, ambiente moderno. Nota 10!',
    name: 'Rafael Costa',
    label: 'Paciente — Ortodontia',
    initials: 'RC',
  },
  {
    text: 'Melhor clínica que já fui! Atendimento humanizado, sem dor, explicam tudo com cuidado. Meu implante ficou perfeito. Valeu cada centavo investido.',
    name: 'Sandra Pereira',
    label: 'Paciente — Implante Dentário',
    initials: 'SP',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const total = testimonials.length
  const perPage = 3

  const maxIndex = total - perPage
  const prev = useCallback(() => setCurrent(c => Math.max(0, c - 1)), [])
  const next = useCallback(() => setCurrent(c => Math.min(maxIndex, c + 1)), [maxIndex])

  const offset = -current * (100 / perPage)

  return (
    <section id="depoimentos" className="testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <header className="testimonials-header reveal">
          <p className="section-tag">Depoimentos</p>
          <h2 className="section-title" id="testimonials-title">
            O que nossos <span>pacientes dizem</span>
          </h2>
          <p className="section-subtitle">
            A satisfação dos nossos pacientes é nossa maior conquista. Veja o que eles falam sobre a experiência na BSM.
          </p>
        </header>

        <div className="testimonials-slider" role="region" aria-label="Carrossel de depoimentos">
          <div
            className="testimonials-track"
            style={{ transform: `translateX(calc(${offset}% - ${current * 28}px))` }}
            role="list"
          >
            {testimonials.map((t, i) => (
              <article key={i} className="testimonial-card" role="listitem" aria-label={`Depoimento de ${t.name}`}>
                <div className="testimonial-quote" aria-hidden="true">"</div>
                <div className="testimonial-stars" aria-label="5 estrelas">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="testimonial-star" aria-hidden="true">★</span>
                  ))}
                </div>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar" aria-hidden="true">{t.initials}</div>
                  <div>
                    <div className="testimonial-author-name">{t.name}</div>
                    <div className="testimonial-author-label">{t.label}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="testimonials-controls" role="group" aria-label="Controles do carrossel">
          <div className="slider-dots" role="list" aria-label="Indicadores de posição">
            {[...Array(maxIndex + 1)].map((_, i) => (
              <button
                key={i}
                className={`slider-dot${current === i ? ' active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Ir para depoimento ${i + 1}`}
                aria-current={current === i ? 'true' : 'false'}
                role="listitem"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
