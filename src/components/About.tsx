const features = [
  { icon: '🤝', title: 'Atendimento Humanizado', desc: 'Cada paciente é tratado com cuidado e atenção individualizada.' },
  { icon: '⚙️', title: 'Equipamentos Modernos', desc: 'Tecnologia de ponta para diagnósticos precisos e tratamentos eficazes.' },
  { icon: '🎓', title: 'Especialistas Qualificados', desc: 'Equipe com formação e atualização contínua nas melhores técnicas.' },
  { icon: '🔬', title: 'Tecnologia Avançada', desc: 'Procedimentos minimamente invasivos com resultados superiores.' },
  { icon: '🏢', title: 'Ambiente Confortável', desc: 'Espaço projetado para seu bem-estar e tranquilidade.' },
  { icon: '⭐', title: 'Resultados de Excelência', desc: 'Avaliação 5 estrelas no Google comprovam nosso compromisso.' },
]

export default function About() {
  return (
    <section id="sobre" className="about" aria-labelledby="about-title">
      <div className="container">
        <div className="about-inner">
          <div className="about-visual reveal-left">
            <div className="about-image-stack">

              {/* ─────────────────────────────────────────────────────────────
                  FOTO SOBRE (principal) — foto da equipe ou do consultório
                  Tamanho ideal: 600×700px  |  Formato: JPG ou WebP
                  Exemplo depois:
                  <img src="/images/sobre-equipe.jpg" alt="Equipe BSM" style={{ width:'100%', height:'100%', objectFit:'cover' }} />
              ───────────────────────────────────────────────────────────── */}
              <div className="about-img-main">
                <img
                  src="/images/dentist-blue.jpg"
                  alt="Dr. BSM Odontologia — especialista em estética dental em Goiânia"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                  loading="lazy"
                />
              </div>

              {/* ─────────────────────────────────────────────────────────────
                  FOTO SOBRE (secundária) — equipamento, consultório ou detalhe
                  Tamanho ideal: 400×400px  |  Formato: JPG ou WebP
              ───────────────────────────────────────────────────────────── */}
              <div className="about-img-secondary">
                <img
                  src="/images/dentist-procedure.jpg"
                  alt="Dentista BSM realizando procedimento odontológico"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                  loading="lazy"
                />
              </div>

              <div className="about-accent-block" aria-hidden="true" />
              <div className="about-accent-block-2" aria-hidden="true" />
              <div className="about-experience-badge" role="img" aria-label="Avaliação 5 estrelas">
                <div className="about-experience-badge-num">5★</div>
                <div className="about-experience-badge-text">Google Reviews</div>
              </div>
            </div>
          </div>

          <div className="about-content reveal-right">
            <p className="section-tag">Conheça a BSM</p>
            <h2 className="section-title" id="about-title">
              Dedicados à sua <span>saúde bucal</span> e ao seu sorriso
            </h2>

            <p className="about-text" style={{ marginTop: 20 }}>
              A <strong>BSM Odontologia e Estética Avançada</strong> tem como missão transformar
              sorrisos e melhorar vidas através de tratamentos odontológicos modernos, tecnologia
              avançada e atendimento humanizado.
            </p>
            <p className="about-text">
              Localizada no coração do Jardim Goiás em Goiânia/GO, nossa clínica reúne
              especialistas altamente qualificados e equipamentos de última geração para oferecer
              resultados excepcionais — desde procedimentos preventivos até transformações
              estéticas completas.
            </p>

            <div className="about-features" role="list" aria-label="Diferenciais da clínica">
              {features.map(f => (
                <div key={f.title} className="about-feature" role="listitem">
                  <div className="about-feature-icon" aria-hidden="true">{f.icon}</div>
                  <div className="about-feature-text">
                    <div className="about-feature-title">{f.title}</div>
                    <div className="about-feature-desc">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
