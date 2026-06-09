const WA_LINK = 'https://wa.me/5562993557723?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20BSM%20Odontologia.'
const PHONE = 'tel:+5562993557723'
// Mapa via search — funciona sem API key, aponta para o endereço exato
const MAP_EMBED = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.149!2d-49.2458164!3d-16.7009134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef1aadfb3be03%3A0x34ee42d883af3f0d!2sBSM%20Odontologia%20e%20est%C3%A9tica%20avan%C3%A7ada!5e0!3m2!1spt-BR!2sbr!4v1718800000000!5m2!1spt-BR!2sbr'
const MAP_LINK  = 'https://www.google.com/maps/place/BSM+Odontologia+e+est%C3%A9tica+avan%C3%A7ada/@-16.7009134,-49.2458164,1050m/data=!3m2!1e3!4b1!4m6!3m5!1s0x935ef1aadfb3be03:0x34ee42d883af3f0d!8m2!3d-16.7009186!4d-49.2432415!16s%2Fg%2F11wx_gq4q0'

const hours = [
  { day: 'Segunda a Sexta', time: '08:00 – 18:00' },
  { day: 'Sábado', time: '08:00 – 13:00' },
  { day: 'Domingo', time: 'Fechado' },
]

export default function Contact() {
  return (
    <section id="contato" className="contact" aria-labelledby="contact-title">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 64 }} className="reveal">
          <p className="section-tag">Fale Conosco</p>
          <h2 className="section-title" id="contact-title">
            Entre em <span>Contato</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '16px auto 0' }}>
            Estamos prontos para atender você. Entre em contato ou venha nos visitar.
          </p>
        </div>

        <div className="contact-inner">
          <div className="contact-info reveal-left">
            <div className="contact-info-items">
              <address
                className="contact-info-item"
                style={{ fontStyle: 'normal' }}
                aria-label="Endereço da clínica"
              >
                <div className="contact-icon" aria-hidden="true">📍</div>
                <div>
                  <div className="contact-item-label">Endereço</div>
                  <div className="contact-item-value">Rua 61, 446 — Sala 6</div>
                  <div className="contact-item-sub">Quadra B10, Lt 16 · Jardim Goiás</div>
                  <div className="contact-item-sub">Goiânia/GO · CEP: 74810-280</div>
                </div>
              </address>

              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-info-item"
                aria-label="Contato via WhatsApp: (62) 99355-7723"
              >
                <div className="contact-icon" aria-hidden="true">💬</div>
                <div>
                  <div className="contact-item-label">WhatsApp</div>
                  <div className="contact-item-value">(62) 99355-7723</div>
                  <div className="contact-item-sub">Clique para abrir conversa</div>
                </div>
              </a>

              <a
                href={PHONE}
                className="contact-info-item"
                aria-label="Ligar para (62) 99355-7723"
              >
                <div className="contact-icon" aria-hidden="true">📞</div>
                <div>
                  <div className="contact-item-label">Telefone</div>
                  <div className="contact-item-value">(62) 99355-7723</div>
                  <div className="contact-item-sub">Ligue agora mesmo</div>
                </div>
              </a>

              <div className="contact-info-item" aria-label="Avaliação no Google: 5 estrelas">
                <div className="contact-icon" aria-hidden="true">⭐</div>
                <div>
                  <div className="contact-item-label">Avaliação Google</div>
                  <div className="contact-item-value" style={{ color: '#F59E0B' }}>★★★★★ 5,0</div>
                  <div className="contact-item-sub">Pacientes muito satisfeitos</div>
                </div>
              </div>
            </div>

            <div className="contact-hours" role="region" aria-label="Horário de funcionamento">
              <div className="contact-hours-title">
                🕐 Horário de Funcionamento
              </div>
              {hours.map(h => (
                <div key={h.day} className="contact-hours-row">
                  <span className="contact-hours-day">{h.day}</span>
                  <span className="contact-hours-time">{h.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-map reveal-right">
            <div className="map-header">
              <span className="map-header-icon" aria-hidden="true">🗺️</span>
              <div>
                <div className="map-header-title">BSM Odontologia e Estética Avançada</div>
                <div className="map-header-sub">Rua 61, 446 — Jardim Goiás, Goiânia/GO</div>
              </div>
            </div>
            <iframe
              className="map-frame"
              src={MAP_EMBED}
              title="Localização da BSM Odontologia no Google Maps"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Mapa mostrando a localização da clínica BSM Odontologia"
            />
            <div style={{
              padding: '16px 20px',
              background: 'var(--color-gray-light)',
              borderTop: '1px solid var(--color-gray-200)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: 8,
            }}>
              <span style={{ fontSize: 13, color: 'var(--color-gray-600)' }}>
                📌 Jardim Goiás, Goiânia - GO
              </span>
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-accent"
                style={{ fontSize: 13, padding: '8px 18px' }}
                aria-label="Abrir rota no Google Maps"
              >
                Ver Rota →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
