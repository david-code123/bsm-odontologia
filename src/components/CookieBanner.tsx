import { useState, useEffect } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('bsm-cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('bsm-cookie-consent', 'accepted')
    setVisible(false)
  }

  const decline = () => {
    localStorage.setItem('bsm-cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-banner" role="dialog" aria-label="Aviso de cookies e privacidade">
      <div className="cookie-banner-inner">
        <div className="cookie-banner-text">
          <strong>Cookies e Privacidade</strong>
          <p>
            Utilizamos cookies para melhorar sua experiência e analisar o tráfego do site,
            conforme a <strong>LGPD</strong> (Lei 13.709/2018). Ao continuar navegando,
            você concorda com nossa política de privacidade.
          </p>
        </div>
        <div className="cookie-banner-actions">
          <button className="cookie-btn-decline" onClick={decline}>
            Recusar
          </button>
          <button className="cookie-btn-accept" onClick={accept}>
            Aceitar Todos
          </button>
        </div>
      </div>
    </div>
  )
}
