import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"
import Icon from "@/components/ui/icon"

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex items-center hero-gradient overflow-hidden">
      <div className="absolute inset-0 hero-gradient-overlay" />

      <div className="absolute inset-0 pointer-events-none opacity-20">
        <Icon
          name="Server"
          className="absolute text-blue-400/30 animate-float"
          style={{ top: "18%", left: "8%", animationDelay: "0s" } as React.CSSProperties}
          size={48}
        />
        <Icon
          name="Network"
          className="absolute text-blue-400/20 animate-float"
          style={{ top: "30%", right: "12%", animationDelay: "2s" } as React.CSSProperties}
          size={40}
        />
        <Icon
          name="Shield"
          className="absolute text-blue-400/20 animate-float"
          style={{ bottom: "25%", left: "15%", animationDelay: "1s" } as React.CSSProperties}
          size={36}
        />
        <Icon
          name="HardDrive"
          className="absolute text-blue-400/15 animate-float"
          style={{ bottom: "20%", right: "20%", animationDelay: "3s" } as React.CSSProperties}
          size={32}
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 mb-8 animate-fade-in-up backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
            <span className="text-sm font-medium text-blue-100">IT-услуги для бизнеса</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in-up text-white leading-[1.1]">
            IT‑инфраструктура,
            <br />
            <span className="text-blue-400">которая работает</span>
          </h1>

          <p className="text-lg sm:text-xl text-blue-100/80 mb-10 max-w-2xl animate-fade-in-up animate-delay-100 leading-relaxed">
            Монтаж сетей, настройка серверов, администрирование и поддержка пользователей. Берём на себя всё ваше IT — от кабеля до стабильной работы.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-200 mb-14">
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-6 text-lg group shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all rounded-xl"
              asChild
            >
              <a href="#contact">
                Оставить заявку
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/40 font-semibold px-8 py-6 text-lg backdrop-blur-sm bg-white/5 rounded-xl"
              asChild
            >
              <a href="tel:+79001234567">
                <Phone className="mr-2 h-5 w-5" />
                +7 900 123-45-67
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 max-w-lg animate-fade-in-up animate-delay-300">
            <div className="text-center sm:text-left">
              <div className="text-3xl sm:text-4xl font-extrabold text-white">7+</div>
              <div className="text-sm text-blue-200/60 mt-1">лет опыта</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-3xl sm:text-4xl font-extrabold text-white">30+</div>
              <div className="text-sm text-blue-200/60 mt-1">компаний</div>
            </div>
            <div className="text-center sm:text-left">
              <div className="text-3xl sm:text-4xl font-extrabold text-white">1 ч</div>
              <div className="text-sm text-blue-200/60 mt-1">реакция</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
