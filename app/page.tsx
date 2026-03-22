import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/sections/Hero'
import SocialProof from '@/components/sections/SocialProof'
import Services from '@/components/sections/Services'
import About from '@/components/sections/About'
import Stats from '@/components/sections/Stats'
import CTA from '@/components/sections/CTA'
import Footer from '@/components/sections/Footer'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "AI Money Platform — AI-Powered Financial Management | AI Mon",
  description: "AI-powered financial platform for smarter money management. Automate budgeting, optimize investments, and get personalized insights. Transform your financial fu",
  openGraph: {
    title: "AI Money Platform — Smarter Money Decisions Through AI",
    description: "Leverage AI to automate budgeting, investments, and risk assessment. Get real-time personalized financial insights. Join modern money management.",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AI Money Platform — Smarter Money Decisions Through AI",
    description: "Leverage AI to automate budgeting, investments, and risk assessment. Get real-time personalized financial insights. Join modern money management.",
  },
}

// @lpg: This is the 1-page layout — sections scroll vertically.
// Add section IDs, adjust order if needed, remove any unused sections.
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SocialProof />
      <Services />
      <About />
      <Stats />
      <CTA />
      <Footer />
    </main>
  )
}
