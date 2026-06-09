import { Analytics } from '@vercel/analytics/react'
import Maintenance from './components/Maintenance'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Treatments from './components/Treatments'
import Differentials from './components/Differentials'
import Testimonials from './components/Testimonials'
import Results from './components/Results'
import Gallery from './components/Gallery'
import CTA from './components/CTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import { useScrollReveal } from './components/useScrollReveal'

// ⚠️ MODO MANUTENÇÃO — mude para true para ativar, false para desativar
const MAINTENANCE_MODE = true

export default function App() {
  useScrollReveal()

  if (MAINTENANCE_MODE) return <Maintenance />

  return (
    <>
      <Header />

      <main id="main-content">
        <Hero />
        <About />
        <Treatments />
        <Differentials />
        <Testimonials />
        <Results />
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
