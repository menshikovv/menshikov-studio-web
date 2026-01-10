import { HeroSection } from "@/components/hero-section"
import { ProblemsSolutionsSection } from "@/components/problems-solutions-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { GuaranteesSection } from "@/components/guarantees-section"
import { ServicesSection } from "@/components/services-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <HeroSection />
      <ProblemsSolutionsSection />
      <PortfolioSection />
      <TestimonialsSection />
      <GuaranteesSection />
      <ServicesSection />
      <CTASection />
      <Footer />
    </main>
  )
}
