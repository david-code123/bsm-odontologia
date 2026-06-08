const items = [
  {
    icon: '👤',
    title: 'Atendimento Personalizado',
    desc: 'Cada paciente recebe um plano de tratamento exclusivo, desenvolvido com atenção às suas necessidades e expectativas.',
  },
  {
    icon: '🔬',
    title: 'Equipamentos de Última Geração',
    desc: 'Utilizamos tecnologia de ponta: radiografia digital, scanner intraoral e laser odontológico para maior precisão.',
  },
  {
    icon: '🎓',
    title: 'Equipe Especializada',
    desc: 'Profissionais com formação avançada e atualização contínua nos melhores centros de especialização do Brasil.',
  },
  {
    icon: '🏢',
    title: 'Ambiente Moderno',
    desc: 'Clínica projetada para oferecer conforto e tranquilidade, com instalações amplas e climatizadas.',
  },
  {
    icon: '📱',
    title: 'Agendamento Rápido',
    desc: 'Agende sua consulta em segundos pelo WhatsApp, sem filas ou burocracia. Atendemos no menor tempo possível.',
  },
  {
    icon: '💳',
    title: 'Facilidade de Pagamento',
    desc: 'Parcelamento sem juros, diversas bandeiras de cartão e condições especiais para tratamentos completos.',
  },
]

export default function Differentials() {
  return (
    <section className="differentials" aria-labelledby="diff-title">
      <div className="container">
        <header className="differentials-header reveal">
          <p className="section-tag">Por que nos escolher</p>
          <h2 className="section-title" id="diff-title">
            Nossos <span>Diferenciais</span>
          </h2>
          <p className="section-subtitle">
            Mais do que tratamentos odontológicos, oferecemos uma experiência completa
            de cuidado e excelência.
          </p>
        </header>

        <ul className="differentials-grid" role="list" aria-label="Diferenciais da clínica">
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
