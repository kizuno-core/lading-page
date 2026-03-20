import { Navbar } from '@/components/sections/Navbar'
import { Hero } from '@/components/sections/Hero'
import { SocialProof } from '@/components/sections/SocialProof'
import { Features } from '@/components/sections/Features'
import { DashboardPreview } from '@/components/sections/DashboardPreview'
import { Fees } from '@/components/sections/Fees'
import { Analytics } from '@/components/sections/Analytics'
import { Pricing } from '@/components/sections/Pricing'
import { Waitlist } from '@/components/sections/Waitlist'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SocialProof />
      <Features />
      <DashboardPreview />
      <Fees />
      <Analytics />
      <Pricing />
      <Waitlist />
    </main>
  )
}
