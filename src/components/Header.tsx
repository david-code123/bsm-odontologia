import { useState, useEffect } from 'react'

const WA_LINK = 'https://wa.me/5562993557723?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20BSM%20Odontologia.'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const close = () => setMenuOpen(false)

  const navLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#tratamentos', label: 'Tratamentos' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#contato', label: 'Contato' },
  ]

  return (
    <>
      <header className={`header${scrolled ? ' scrolled' : ''}`} role="banner">
        <div className="container">
          <div className="header-inner">
            <a href="#inicio" className="header-logo" aria-label="BSM Odontologia - Voltar ao início">
              {/*
                LOGO — substituir pelo arquivo real da logo BSM.
                Coloque o arquivo em /public/images/logo-bsm.png (ou .svg)
                e troque o bloco abaixo por:
                <img src="/images/logo-bsm.png" alt="BSM Odontologia" style={{ height: 44 }} />
              */}
              <div
                className="header-logo-icon"
                aria-hidden="true"
                title="⚠️ Aguardando logo oficial"
                style={{ outline: '2px dashed rgba(20,184,166,0.5)', outlineOffset: 2 }}
              >
                B
              </div>
              <div className="header-logo-text">
                <span className="header-logo-name">BSM Odontologia</span>
                <span className="header-logo-sub">Estética Avançada</span>
              </div>
            </a>

            <nav className="nav" aria-label="Menu principal">
              {navLinks.map(l => (
                <a key={l.href} href={l.href}>{l.label}</a>
              ))}
            </nav>

            <div className="header-actions">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="header-whatsapp"
                aria-label="Contato via WhatsApp"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>WhatsApp</span>
              </a>
              <button
                className={`hamburger${menuOpen ? ' open' : ''}`}
                onClick={() => setMenuOpen(v => !v)}
                aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={menuOpen}
              >
                <span /><span /><span />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} role="dialog" aria-modal="true" aria-label="Menu mobile">
        <button
          style={{
            position: 'absolute', top: 24, right: 24,
            background: 'rgba(255,255,255,.08)', border: 'none',
            color: '#fff', fontSize: 24, width: 44, height: 44,
            borderRadius: 10, cursor: 'pointer', display: 'flex',
            alignItems: 'center', justifyContent: 'center'
          }}
          onClick={close}
          aria-label="Fechar menu"
        >✕</button>
        {navLinks.map(l => (
          <a key={l.href} href={l.href} onClick={close}>{l.label}</a>
        ))}
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-menu-whatsapp"
          onClick={close}
        >
          📱 Agendar pelo WhatsApp
        </a>
      </div>
    </>
  )
}
