import { useState, useEffect, useRef } from 'react'

const testimonials = [
  {
    text: 'Fiz botox, harmonização facial e cuidados dentários e tive uma experiência excelente. Desde a primeira consulta, fui muito bem atendido, com explicações claras e atenção em cada detalhe. O resultado ficou super natural e valorizou minhas características de forma sutil. Recomendo muito, em especial ao Dr. Bruno, pelo ótimo trabalho.',
    name: 'Rafael Bronson',
    label: 'Botox & Harmonização Facial',
    initials: 'RB',
  },
  {
    text: 'Equipe atenciosa, profissionais qualificados, além do procedimento ter ficado excelente. Obrigado ao doutor Bruno que me devolveu a autoestima que eu estava tanto precisando.',
    name: 'Alqueliton Personal',
    label: 'Procedimento Estético',
    initials: 'AP',
  },
  {
    text: 'Excelente atendimento desde o primeiro contato. Equipe muito atenciosa, educada e prestativa. A clínica é organizada, ambiente agradável e os profissionais passam muita confiança e cuidado. Fui muito bem atendida e com certeza recomendo!',
    name: 'Naianne Oliveira',
    label: 'Paciente BSM',
    initials: 'NO',
  },
  {
    text: 'Gostaria de parabenizar a clínica pelo excelente atendimento e profissionalismo! Todos os detalhes são pensados para proporcionar uma experiência confortável e segura. A equipe é extremamente competente e sempre disposta a esclarecer dúvidas. Recomendo a todos!',
    name: 'David Marques',
    label: 'Paciente BSM',
    initials: 'DM',
  },
  {
    text: 'Super indico! Atendimento excelente, ambiente acolhedor, profissionais que te passam tranquilidade quanto aos procedimentos.',
    name: 'Lucicleide Teixeira',
    label: 'Paciente BSM',
    initials: 'LT',
  },
  {
    text: 'Atendimento excelente, profissionais capacitados, atenciosos, experiência maravilhosa, amei os resultados. Super indico!',
    name: 'Valdirene Guimarães',
    label: 'Paciente BSM',
    initials: 'VG',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [perPage, setPerPage] = useState(3)
  const sliderRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef(0)

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth
      const pp = w < 640 ? 1 : w < 1024 ? 2 : 3
      setPerPage(pp)
      setCurrent(c => Math.min(c, Math.max(0, testimonials.length - pp)))
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const total = testimonials.length
  const maxIndex = Math.max(0, total - perPage)

  const goTo = (i: number) => setCurrent(Math.max(0, Math.min(maxIndex, i)))

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(delta) > 40) goTo(current + (delta > 0 ? 1 : -1))
  }

  const getTransform = () => {
    if (!sliderRef.current) return `translateX(calc(${-current * (100 / perPage)}% - ${current * 28 / perPage}px))`
    const gap = 28
    const sliderW = sliderRef.current.offsetWidth
    const cardW = (sliderW - gap * (perPage - 1)) / perPage
    return `translateX(${-current * (cardW + gap)}px)`
  }

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

        <div
          className="testimonials-slider"
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="region"
          aria-label="Carrossel de depoimentos"
        >
          <div
            className="testimonials-track"
            style={{ transform: getTransform() }}
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
                onClick={() => goTo(i)}
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
