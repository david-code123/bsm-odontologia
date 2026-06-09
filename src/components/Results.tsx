const WA_LINK = 'https://wa.me/5562993557723?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20BSM%20Odontologia.'

const results = [
  { src: '/images/proc-harmonizacao.jpeg',    treatment: 'Harmonização Facial',       label: 'FullFace' },
  { src: '/images/proc-botox.jpeg',           treatment: 'Botox',                     label: 'Estética Facial' },
  { src: '/images/proc-papada.jpeg',          treatment: 'Papada',                    label: 'Estética Facial' },
  { src: '/images/proc-rejuvenescimento.jpeg',treatment: 'Rejuvenescimento do Olhar', label: 'Estética Facial' },
  { src: '/images/proc-otomodelacao.jpeg',    treatment: 'Otomodelação Estruturada',  label: 'Estética Facial' },
]

export default function Results() {
  return (
    <section id="resultados" className="results" aria-labelledby="results-title">
      <div className="container">
        <header className="results-header reveal">
          <p className="section-tag">Resultados Reais</p>
          <h2 className="section-title" id="results-title">
            Transformações dos nossos <span>pacientes</span>
          </h2>
          <p className="section-subtitle">
            Resultados reais de pacientes reais. Conheça as transformações realizadas na BSM.
          </p>
        </header>

        <div className="results-grid">
          {results.map((r, i) => (
            <div key={i} className="result-card reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="result-img-wrap">
                <img
                  src={r.src}
                  alt={`Resultado de ${r.treatment} — BSM Odontologia`}
                  loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center', display: 'block', background: '#f8f8f8' }}
                />
                <div className="result-overlay">
                  <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="result-overlay-btn"
                  >
                    Quero esse resultado →
                  </a>
                </div>
              </div>
              <div className="result-info">
                <span className="result-tag">{r.label}</span>
                <span className="result-treatment">{r.treatment}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ textAlign: 'center', marginTop: 48 }}>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Agendar Minha Consulta
          </a>
        </div>
      </div>
    </section>
  )
}
