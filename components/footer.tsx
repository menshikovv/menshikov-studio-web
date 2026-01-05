"use client"

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative border-t border-white/10 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold text-white glow-text mb-2">MENSHIKOV STUDIO</h3>
            <p className="text-sm text-muted-foreground">Создаём digital будущее вместе</p>
          </div>

          <div className="flex gap-8 text-sm text-muted-foreground">
            <button 
              onClick={() => scrollToSection('services')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Услуги
            </button>
            <button 
              onClick={() => scrollToSection('portfolio-section')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Портфолио
            </button>
            <button 
              onClick={() => scrollToSection('cta-section')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Контакты
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-muted-foreground">
          © 2025 Menshikov Studio. Все права защищены.
        </div>
      </div>
    </footer>
  )
}
