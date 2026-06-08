const galleryItems: { src: string; alt: string; position?: string }[] = [
  { src: '/images/clinic-recepcao.jpg',   alt: 'Recepção da BSM Odontologia — balcão em mármore',         position: 'center' },
  { src: '/images/clinic-consultorio.jpg',alt: 'Consultório odontológico moderno com cadeira e equipamentos', position: 'center' },
  { src: '/images/clinic-estetica.jpg',   alt: 'Sala de estética com equipamento Hyalus',                 position: 'center' },
  { src: '/images/clinic-entrada.jpg',    alt: 'Fachada da BSM Odontologia — Jardim Goiás, Goiânia',      position: 'center' },
  { src: '/images/dentist-procedure.jpg', alt: 'Dentista BSM realizando procedimento odontológico',        position: 'top'    },
  { src: '/images/dentist-green.jpg',     alt: 'Especialista em odontologia estética da BSM',              position: 'top'    },
]

export default function Gallery() {
  return (
    <section id="galeria" className="gallery" aria-labelledby="gallery-title">
      <div className="container">
        <header className="gallery-header reveal">
          <p className="section-tag">Nossa Clínica</p>
          <h2 className="section-title" id="gallery-title">
            Conheça nosso <span>espaço</span>
          </h2>
          <p className="section-subtitle">
            Um ambiente moderno, confortável e projetado para oferecer a melhor experiência durante seu tratamento.
          </p>
        </header>

        <div className="gallery-grid" role="list" aria-label="Galeria de fotos da clínica">
          {galleryItems.map((item, i) => (
            <div key={i} className="gallery-item reveal" role="listitem">
              <div className="gallery-item-inner" style={{ width: '100%', height: '100%' }}>
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: item.position ?? 'center',
                    borderRadius: 12,
                    display: 'block',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
