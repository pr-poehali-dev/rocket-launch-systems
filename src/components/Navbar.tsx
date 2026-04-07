import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-xl border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-semibold tracking-tight leading-tight">
              <span className="text-primary">Гоголевские страницы</span>
              <span className="block text-xs font-normal text-muted-foreground tracking-widest uppercase">Калужской земли</span>
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-12">
            <a href="#destinations" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              Маршрут
            </a>
            <a href="#packages" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              Туры
            </a>
            <a href="#about" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              О проекте
            </a>
            <a href="#contact" className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
              Контакты
            </a>
          </div>

          <div className="hidden md:block">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
              Записаться
            </Button>
          </div>

          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <Icon name="X" size={24} /> : <Icon name="Menu" size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="px-6 py-6 space-y-4">
            <a href="#destinations" className="block text-base font-medium text-foreground/70 hover:text-foreground">
              Маршрут
            </a>
            <a href="#packages" className="block text-base font-medium text-foreground/70 hover:text-foreground">
              Туры
            </a>
            <a href="#about" className="block text-base font-medium text-foreground/70 hover:text-foreground">
              О проекте
            </a>
            <a href="#contact" className="block text-base font-medium text-foreground/70 hover:text-foreground">
              Контакты
            </a>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
              Записаться
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
