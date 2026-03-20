import { Navbar } from '@/components/sections/Navbar'
import { Hero } from '@/components/sections/Hero'
import { SocialProof } from '@/components/sections/SocialProof'
import { ProblemaVsSolucao } from '@/components/sections/ProblemaVsSolucao'
import { Features } from '@/components/sections/Features'
import { DashboardPreview } from '@/components/sections/DashboardPreview'
import { ComoFunciona } from '@/components/sections/ComoFunciona'
import { Fees } from '@/components/sections/Fees'
import { Analytics } from '@/components/sections/Analytics'
import { Testimonials } from '@/components/sections/Testimonials'
import { Autoridade } from '@/components/sections/Autoridade'
import { Pricing } from '@/components/sections/Pricing'
import { Waitlist } from '@/components/sections/Waitlist'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SocialProof />
      <ProblemaVsSolucao />
      <Features />
      <DashboardPreview />
      <ComoFunciona />
      <Fees />
      <Analytics />
      <Testimonials />
      <Autoridade />
      <Pricing />
      <Waitlist />
      <Footer />
    </main>
  )
}
