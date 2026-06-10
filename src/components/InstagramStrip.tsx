const IG_LINK = 'https://www.instagram.com/bsm.odonto/'

export default function InstagramStrip() {
  return (
    <div className="ig-strip">
      <div className="ig-strip-inner">
        <div className="ig-strip-left">
          <div className="ig-strip-icon" aria-hidden="true">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <defs>
                <radialGradient id="ig-grad-strip" cx="30%" cy="107%" r="150%">
                  <stop offset="0%" stopColor="#fdf497"/>
                  <stop offset="5%" stopColor="#fdf497"/>
                  <stop offset="45%" stopColor="#fd5949"/>
                  <stop offset="60%" stopColor="#d6249f"/>
                  <stop offset="90%" stopColor="#285AEB"/>
                </radialGradient>
              </defs>
              <rect width="24" height="24" rx="6" fill="url(#ig-grad-strip)"/>
              <circle cx="12" cy="12" r="4.5" stroke="#fff" strokeWidth="1.8" fill="none"/>
              <circle cx="17.5" cy="6.5" r="1.2" fill="#fff"/>
            </svg>
          </div>
          <div className="ig-strip-text">
            <span className="ig-strip-handle">@bsm.odonto</span>
            <span className="ig-strip-sub">Novos resultados toda semana — siga e acompanhe</span>
          </div>
        </div>
        <a
          href={IG_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="ig-strip-btn"
          aria-label="Seguir a BSM no Instagram"
        >
          Seguir no Instagram
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>
  )
}
