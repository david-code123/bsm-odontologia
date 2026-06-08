import ImagePlaceholder from './ImagePlaceholder'

/* ─────────────────────────────────────────────────────────────────────────────
   GALERIA — 6 fotos reais da clínica
   Substitua cada ImagePlaceholder por uma tag <img> quando tiver as fotos.

   Estrutura sugerida de arquivos (coloque em /public/images/):
     gallery-recepcao.jpg      → Recepção da clínica         (800×800px)
     gallery-consultorio-1.jpg → Consultório principal        (400×400px)
     gallery-equipamentos.jpg  → Equipamentos / aparelhos     (400×400px)
     gallery-espera.jpg        → Sala de espera               (800×400px)
     gallery-consultorio-2.jpg → Segundo consultório          (400×400px)
     gallery-equipe.jpg        → Foto da equipe               (400×400px)

   Exemplo de uso depois de ter a foto:
     <img
       src="/images/gallery-recepcao.jpg"
       alt="Recepção BSM Odontologia"
       loading="lazy"
       style={{ width: '100%', height: '100%', objectFit: 'cover' }}
     />
───────────────────────────────────────────────────────────────────────────── */
const galleryItems: { label: string; hint: string; icon: string; variant: 'dark' | 'light' }[] = [
  { label: 'Recepção da Clínica',    hint: 'Visão geral da recepção/entrada. 800×800px',        icon: '🏢',     variant: 'dark'  },
  { label: 'Consultório Principal',  hint: 'Cadeira odontológica e equipamentos. 400×400px',    icon: '🦷',     variant: 'dark'  },
  { label: 'Equipamentos Modernos',  hint: 'Aparelhos e tecnologia da clínica. 400×400px',      icon: '⚙️',     variant: 'dark'  },
  { label: 'Sala de Espera',         hint: 'Ambiente confortável de espera. 800×400px',         icon: '🛋️',    variant: 'light' },
  { label: 'Consultório 2',          hint: 'Segundo consultório ou detalhe. 400×400px',         icon: '💎',     variant: 'dark'  },
  { label: 'Nossa Equipe',           hint: 'Foto da equipe BSM. Fundo neutro. 400×400px',       icon: '👨‍⚕️',  variant: 'dark'  },
]

export default function Gallery() {
  return (
    <section id="galeria" className="gallery" aria-labelledby="gallery-title">
      <div className="container">
        <header className="gallery-header reveal">
          <p className="section-tag">Nossa Clínica</p>
          <h2 className="section-title" id="gallery-title">
            Conheça nosso <span>espaço</span>
          </h2>
          <p className="section-subtitle">
            Um ambiente moderno, confortável e projetado para oferecer a melhor experiência durante seu tratamento.
          </p>
        </header>

        <div className="gallery-grid" role="list" aria-label="Galeria de fotos da clínica">
          {galleryItems.map((item, i) => (
            <div key={i} className="gallery-item reveal" role="listitem">
              <div className="gallery-item-inner" style={{ width: '100%', height: '100%' }}>
                <ImagePlaceholder
                  label={item.label}
                  hint={item.hint}
                  icon={item.icon}
                  variant={item.variant}
                  style={{ height: '100%', borderRadius: 12 }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Nota visual para o dono da clínica */}
        <div style={{
          marginTop: 32,
          padding: '16px 24px',
          background: 'rgba(37,99,235,0.06)',
          border: '1px dashed rgba(37,99,235,0.25)',
          borderRadius: 12,
          display: 'flex',
          alignItems: 'center',
          gap: 14,
          flexWrap: 'wrap',
        }}>
          <span style={{ fontSize: 24 }}>📸</span>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#0F172A' }}>
              Galeria aguardando suas fotos reais
            </div>
            <div style={{ fontSize: 13, color: '#64748B', marginTop: 3 }}>
              Envie fotos da recepção, consultórios, equipamentos e equipe para substituirmos os placeholders. Formatos aceitos: JPG, PNG ou WebP.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
