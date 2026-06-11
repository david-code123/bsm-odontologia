const IgIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <defs>
      <radialGradient id="ig-grad-strip2" cx="30%" cy="107%" r="150%">
        <stop offset="0%" stopColor="#fdf497"/>
        <stop offset="5%" stopColor="#fdf497"/>
        <stop offset="45%" stopColor="#fd5949"/>
        <stop offset="60%" stopColor="#d6249f"/>
        <stop offset="90%" stopColor="#285AEB"/>
      </radialGradient>
    </defs>
    <rect width="24" height="24" rx="6" fill="url(#ig-grad-strip2)"/>
    <circle cx="12" cy="12" r="4.5" stroke="#fff" strokeWidth="1.8" fill="none"/>
    <circle cx="17.5" cy="6.5" r="1.2" fill="#fff"/>
  </svg>
)

const accounts = [
  {
    handle: '@bsm.odonto',
    desc: 'Resultados, procedimentos e novidades da clínica.',
    href: 'https://www.instagram.com/bsm.odonto/',
    btnLabel: 'Seguir a Clínica',
  },
  {
    handle: '@drbrunobronson',
    desc: 'Conteúdo exclusivo do Dr. Bruno Bronson.',
    href: 'https://www.instagram.com/drbrunobronson/',
    btnLabel: 'Seguir o Profissional',
  },
]

export default function InstagramStrip() {
  return (
    <div className="ig-strip">
      <div className="ig-strip-dual">
        {accounts.map(acc => (
          <div key={acc.handle} className="ig-strip-card">
            <div className="ig-strip-card-info">
              <div className="ig-strip-icon" aria-hidden="true"><IgIcon /></div>
              <div className="ig-strip-text">
                <span className="ig-strip-handle">{acc.handle}</span>
                <span className="ig-strip-sub">{acc.desc}</span>
              </div>
            </div>
            <a
              href={acc.href}
              target="_blank"
              rel="noopener noreferrer"
              className="ig-strip-btn"
              aria-label={acc.btnLabel}
            >
              {acc.btnLabel}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
