import CustomCursor from '@/components/CustomCursor'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import Services from '@/components/Services'
import About from '@/components/About'
import Process from '@/components/Process'
import Pricing from '@/components/Pricing'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import SectionReveal from '@/components/SectionReveal'

export default function Home() {
  return (
    <>
      <CustomCursor />
      <Header />
      <main>
        <Hero />
        <SectionReveal><Portfolio /></SectionReveal>
        <SectionReveal><Services /></SectionReveal>
        <SectionReveal><About /></SectionReveal>
        <SectionReveal><Process /></SectionReveal>
        <SectionReveal><Pricing /></SectionReveal>
        <SectionReveal><Testimonials /></SectionReveal>
        <CTA />
      </main>
    </>
  )
}
