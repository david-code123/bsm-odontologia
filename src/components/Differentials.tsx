const items = [
  {
    icon: '🫀',
    title: 'Monitorização',
    desc: 'Acompanhamento de sinais vitais em procedimentos selecionados.',
  },
  {
    icon: '🛡️',
    title: 'Suporte de Segurança',
    desc: 'Oxigênio, DEA e estrutura preparada para intercorrências.',
  },
  {
    icon: '⚡',
    title: 'Precisão Cirúrgica',
    desc: 'Bisturi elétrico/eletrocautério para maior controle durante procedimentos.',
  },
  {
    icon: '🔬',
    title: 'Tecnologias de Apoio',
    desc: 'Laser, Hybrius, Fluence, ozônio e recursos auxiliares para estética e recuperação.',
  },
]

export default function Differentials() {
  return (
    <section className="differentials" aria-labelledby="diff-title">
      <div className="container">
        <header className="differentials-header reveal">
          <p className="section-tag">Estrutura &amp; Tecnologia</p>
          <h2 className="section-title" id="diff-title">
            Segurança, tecnologia e <span>cuidado em cada detalhe</span>
          </h2>
          <p className="section-subtitle">
            Na BSM, cada procedimento é realizado com planejamento, estrutura adequada
            e equipamentos que auxiliam na precisão, monitorização e segurança do paciente.
          </p>
        </header>

        <ul className="differentials-grid differentials-grid--4" role="list" aria-label="Estrutura e tecnologia da clínica">
          {items.map((item, i) => (
            <li
              key={item.title}
              className="differential-card reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
              role="listitem"
            >
              <div className="differential-icon" aria-hidden="true">{item.icon}</div>
              <h3 className="differential-title">{item.title}</h3>
              <p className="differential-desc">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
