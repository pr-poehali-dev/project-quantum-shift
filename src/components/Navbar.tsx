import { ThemeToggle } from "@/components/ThemeToggle"
import { Logo } from "@/components/Logo"
import { MobileMenu } from "@/components/MobileMenu"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Phone } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-lg border-b border-border shadow-sm"
          : "bg-[hsl(222,47%,11%)]/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="hover:opacity-80 transition-opacity">
            <Logo isHero={!isScrolled} />
          </a>

          <div className="hidden lg:flex items-center gap-8">
            <a
              href="#about"
              className={`text-sm font-medium transition-colors ${
                isScrolled ? "hover:text-primary" : "text-blue-100/80 hover:text-white"
              }`}
            >
              О компании
            </a>
            <a
              href="#services"
              className={`text-sm font-medium transition-colors ${
                isScrolled ? "hover:text-primary" : "text-blue-100/80 hover:text-white"
              }`}
            >
              Услуги
            </a>
            <a
              href="#portfolio"
              className={`text-sm font-medium transition-colors ${
                isScrolled ? "hover:text-primary" : "text-blue-100/80 hover:text-white"
              }`}
            >
              Кейсы
            </a>
            <a
              href="#pricing"
              className={`text-sm font-medium transition-colors ${
                isScrolled ? "hover:text-primary" : "text-blue-100/80 hover:text-white"
              }`}
            >
              Тарифы
            </a>
            <a
              href="#contact"
              className={`text-sm font-medium transition-colors ${
                isScrolled ? "hover:text-primary" : "text-blue-100/80 hover:text-white"
              }`}
            >
              Контакты
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Button
              size="sm"
              className="hidden sm:inline-flex bg-blue-500 hover:bg-blue-600 text-white rounded-lg"
              asChild
            >
              <a href="tel:+79001234567">
                <Phone className="mr-2 h-4 w-4" />
                Позвонить
              </a>
            </Button>
            <ThemeToggle />
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  )
}
