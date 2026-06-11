const WA_LINK = 'https://wa.me/5562993557723?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20BSM%20Odontologia.'
const PHONE = 'tel:+5562993557723'

export default function CTA() {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="container">
        <div className="cta-content reveal">
          <h2 className="cta-title" id="cta-title">
            Seu novo eu começa aqui
          </h2>
          <p className="cta-subtitle">
            Agende sua consulta agora mesmo e dê o primeiro passo para transformar
            seu sorriso com segurança e confiança.
          </p>

          <div className="cta-actions">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              aria-label="Agendar consulta pelo WhatsApp"
              style={{ fontSize: '16px', padding: '16px 36px' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Agendar pelo WhatsApp
            </a>
            <a
              href={PHONE}
              className="btn btn-outline"
              aria-label="Ligar para a clínica"
              style={{ fontSize: '16px', padding: '16px 36px' }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.43 19.79 19.79 0 01.01 4.82 2 2 0 012 2.62h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 10.1a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              (62) 99355-7723
            </a>
          </div>

          <div className="cta-info" role="list" aria-label="Informações rápidas">
            <div className="cta-info-item" role="listitem">
              <span className="cta-info-icon" aria-hidden="true">⭐</span>
              <span>5,0 no Google</span>
            </div>
            <div className="cta-info-item" role="listitem">
              <span className="cta-info-icon" aria-hidden="true">⚡</span>
              <span>Resposta em minutos</span>
            </div>
            <div className="cta-info-item" role="listitem">
              <span className="cta-info-icon" aria-hidden="true">💳</span>
              <span>Facilidade de pagamento</span>
            </div>
            <div className="cta-info-item" role="listitem">
              <span className="cta-info-icon" aria-hidden="true">📍</span>
              <span>Jardim Goiás, Goiânia/GO</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
