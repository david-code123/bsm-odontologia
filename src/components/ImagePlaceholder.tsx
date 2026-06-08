interface ImagePlaceholderProps {
  label: string
  hint?: string
  width?: string | number
  height?: string | number
  style?: React.CSSProperties
  variant?: 'dark' | 'light'
  icon?: string
}

export default function ImagePlaceholder({
  label,
  hint,
  width = '100%',
  height = '100%',
  style,
  variant = 'dark',
  icon = '📷',
}: ImagePlaceholderProps) {
  const isDark = variant === 'dark'
  return (
    <div
      role="img"
      aria-label={`Aguardando imagem: ${label}`}
      style={{
        width,
        height,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 14,
        background: isDark
          ? 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)'
          : 'linear-gradient(135deg, #F1F5F9 0%, #E2E8F0 100%)',
        border: isDark
          ? '2px dashed rgba(20,184,166,0.35)'
          : '2px dashed rgba(37,99,235,0.25)',
        borderRadius: 16,
        padding: 24,
        boxSizing: 'border-box',
        userSelect: 'none',
        ...style,
      }}
    >
      {/* Camera icon circle */}
      <div
        style={{
          width: 64,
          height: 64,
          borderRadius: '50%',
          background: isDark
            ? 'rgba(20,184,166,0.12)'
            : 'rgba(37,99,235,0.10)',
          border: isDark
            ? '2px solid rgba(20,184,166,0.30)'
            : '2px solid rgba(37,99,235,0.20)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 26,
          flexShrink: 0,
        }}
        aria-hidden="true"
      >
        {icon}
      </div>

      {/* Badge "Aguardando Foto" */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          padding: '5px 14px',
          borderRadius: 999,
          background: isDark
            ? 'rgba(20,184,166,0.15)'
            : 'rgba(37,99,235,0.10)',
          border: isDark
            ? '1px solid rgba(20,184,166,0.30)'
            : '1px solid rgba(37,99,235,0.20)',
        }}
      >
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: '50%',
            background: '#14B8A6',
            display: 'inline-block',
            animation: 'pulse-dot 2s ease-in-out infinite',
            flexShrink: 0,
          }}
          aria-hidden="true"
        />
        <span
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: isDark ? '#14B8A6' : '#2563EB',
          }}
        >
          Aguardando Foto
        </span>
      </div>

      {/* Label */}
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            fontSize: 15,
            fontWeight: 700,
            color: isDark ? 'rgba(255,255,255,0.90)' : '#0F172A',
            marginBottom: 6,
            lineHeight: 1.3,
          }}
        >
          {label}
        </div>
        {hint && (
          <div
            style={{
              fontSize: 12,
              color: isDark ? 'rgba(255,255,255,0.45)' : '#64748B',
              lineHeight: 1.5,
              maxWidth: 200,
            }}
          >
            {hint}
          </div>
        )}
      </div>

      {/* File format tip */}
      <div
        style={{
          fontSize: 10,
          color: isDark ? 'rgba(255,255,255,0.25)' : 'rgba(0,0,0,0.25)',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
        }}
      >
        JPG · PNG · WEBP recomendado
      </div>
    </div>
  )
}
