const WA_LINK = 'https://wa.me/5562993557723?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20BSM%20Odontologia.'

const quickLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre Nós' },
  { href: '#tratamentos', label: 'Tratamentos' },
  { href: '#galeria', label: 'Galeria' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
]

const services = [
  { href: WA_LINK, label: 'Implantes Dentários' },
  { href: WA_LINK, label: 'Ortodontia' },
  { href: WA_LINK, label: 'Clareamento Dental' },
  { href: WA_LINK, label: 'Facetas de Porcelana' },
  { href: WA_LINK, label: 'Harmonização Orofacial' },
  { href: WA_LINK, label: 'Lentes de Contato Dental' },
]

/*
  ─────────────────────────────────────────────────────────────────────────────
  REDES SOCIAIS — preencha os links reais abaixo antes de publicar o site.

  Instagram → troque 'USUARIO_INSTAGRAM' pelo @ da clínica (ex: bsmodontologia)
  Facebook  → troque 'PAGINA_FACEBOOK' pelo slug da página (ex: bsmodontologiago)
  YouTube   → troque '#' pelo link do canal, ou remova este item se não usar
  ─────────────────────────────────────────────────────────────────────────────
*/
const socials = [
  {
    icon: '📸',
    label: 'Instagram',
    href: 'https://www.instagram.com/bsm.odonto/',
    pending: false,
  },
  {
    icon: '📘',
    label: 'Facebook',
    // ⚠️ PENDENTE — substitua pelo link real do Facebook da BSM
    href: 'https://facebook.com/PAGINA_FACEBOOK',
    pending: true,
  },
  {
    icon: '💬',
    label: 'WhatsApp',
    href: WA_LINK,
    pending: false,
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/logo.png" alt="BSM Odontologia e Estética Avançada" style={{ height: 56, width: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
            </div>

            <p className="footer-brand-text">
              Transformando sorrisos e melhorando vidas através de tratamentos odontológicos
              modernos, tecnologia avançada e atendimento humanizado em Goiânia/GO.
            </p>

            <div className="footer-social" role="list" aria-label="Redes sociais">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={s.pending ? `${s.label} (link pendente)` : s.label}
                  role="listitem"
                  title={s.pending ? `⚠️ ${s.label} — link pendente, substitua em Footer.tsx` : s.label}
                  style={s.pending ? { outline: '1px dashed rgba(245,158,11,0.5)', outlineOffset: 2 } : {}}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Aviso visível apenas em desenvolvimento — some automaticamente em produção */}
            {socials.some(s => s.pending) && (
              <div style={{
                marginTop: 12,
                padding: '8px 12px',
                background: 'rgba(245,158,11,0.08)',
                border: '1px dashed rgba(245,158,11,0.30)',
                borderRadius: 8,
                fontSize: 11,
                color: 'rgba(245,158,11,0.85)',
                lineHeight: 1.5,
              }}>
                ⚠️ Links de redes sociais pendentes — atualize em <code style={{ opacity: .8 }}>Footer.tsx</code>
              </div>
            )}
          </div>

          <nav aria-label="Links rápidos">
            <div className="footer-col-title">Links Rápidos</div>
            <ul className="footer-links">
              {quickLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Tratamentos">
            <div className="footer-col-title">Tratamentos</div>
            <ul className="footer-links">
              {services.map(s => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target={s.href.startsWith('http') ? '_blank' : undefined}
                    rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <address style={{ fontStyle: 'normal' }}>
            <div className="footer-col-title">Contato</div>
            <ul className="footer-contact-list">
              <li className="footer-contact-item">
                <span className="footer-contact-icon" aria-hidden="true">📍</span>
                <span>Rua 61, 446 — Sala 6, Jardim Goiás<br />Goiânia/GO — CEP 74810-280</span>
              </li>
              <li className="footer-contact-item">
                <span className="footer-contact-icon" aria-hidden="true">📱</span>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                  (62) 99355-7723
                </a>
              </li>
              <li className="footer-contact-item">
                <span className="footer-contact-icon" aria-hidden="true">🕐</span>
                <span>Seg–Sex: 08h–18h<br />Sáb: 08h–13h</span>
              </li>
              <li className="footer-contact-item">
                <span className="footer-contact-icon" aria-hidden="true">⭐</span>
                <span style={{ color: '#F59E0B', fontWeight: 600 }}>★★★★★ 5,0 no Google</span>
              </li>
            </ul>
          </address>
        </div>

        <div className="footer-bottom">
          <p className="footer-bottom-text">
            © {year} BSM Odontologia e Estética Avançada. Todos os direitos reservados.
          </p>
          <div className="footer-bottom-badge" aria-label="Avaliação 5 estrelas no Google">
            <span className="footer-bottom-stars" aria-hidden="true">★★★★★</span>
            5,0 no Google
          </div>
        </div>
      </div>
    </footer>
  )
}
