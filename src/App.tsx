import { Analytics } from '@vercel/analytics/react'
import Maintenance from './components/Maintenance'
import Header from './components/Header'

// ⚠️ MODO MANUTENÇÃO — mude para true para ativar, false para desativar
const MAINTENANCE_MODE = false
import Hero from './components/Hero'
import About from './components/About'
import Treatments from './components/Treatments'
import Differentials from './components/Differentials'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import { useScrollReveal } from './components/useScrollReveal'

export default function App() {
  useScrollReveal()

  if (MAINTENANCE_MODE) return <Maintenance />

  return (
    <>
      <a
        href="#main-content"
        style={{
          position: 'absolute',
          top: -100,
          left: 16,
          padding: '12px 24px',
          background: 'var(--color-accent)',
          color: '#fff',
          borderRadius: '0 0 8px 8px',
          fontWeight: 600,
          zIndex: 9999,
          transition: 'top .2s',
        }}
        onFocus={e => { (e.currentTarget as HTMLElement).style.top = '0' }}
        onBlur={e => { (e.currentTarget as HTMLElement).style.top = '-100px' }}
      >
        Pular para o conteúdo principal
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <About />
        <Treatments />
        <Differentials />
        <Testimonials />
        <Gallery />
        <CTA />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFloat />
      <Analytics />
    </>
  )
}
