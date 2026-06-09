const features = [
  { icon: '🤝', title: 'Atendimento Individualizado', desc: 'Avaliação detalhada e plano personalizado para cada paciente.' },
  { icon: '🛡️', title: 'Segurança em Primeiro Lugar', desc: 'Protocolos, estrutura e acompanhamento para mais tranquilidade.' },
  { icon: '✨', title: 'Resultados Naturais', desc: 'Estética com equilíbrio, sem exageros e respeitando sua identidade.' },
  { icon: '⚙️', title: 'Tecnologia e Estrutura Moderna', desc: 'Ambiente preparado para procedimentos estéticos faciais com conforto e precisão.' },
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
              Estética facial com <span>segurança, naturalidade</span> e precisão
            </h2>

            <p className="about-text" style={{ marginTop: 20 }}>
              A <strong>BSM Odontologia e Estética Avançada</strong> nasceu para oferecer
              tratamentos estéticos faciais com planejamento individualizado, técnica apurada
              e foco em resultados naturais.
            </p>
            <p className="about-text">
              Localizada no coração do Jardim Goiás, em Goiânia/GO, nossa clínica une estrutura
              moderna, atendimento humanizado e protocolos de segurança para quem busca
              rejuvenescimento, harmonização facial e procedimentos estéticos com responsabilidade.
            </p>
            <p className="about-text">
              Aqui, cada detalhe importa: da avaliação inicial ao acompanhamento
              pós-procedimento, sempre respeitando a anatomia, a individualidade e o desejo
              de cada paciente.
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
