import { Logo } from "@/components/Logo"
import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-14 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Logo className="mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              IT‑инфраструктура для малого и среднего бизнеса. Сети, серверы, поддержка.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider text-foreground/80">Навигация</h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  О компании
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Услуги
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Кейсы
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Тарифы
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Контакты
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider text-foreground/80">Услуги</h4>
            <ul className="space-y-2.5">
              <li><span className="text-sm text-muted-foreground">Монтаж СКС и СВН</span></li>
              <li><span className="text-sm text-muted-foreground">Серверы и домен</span></li>
              <li><span className="text-sm text-muted-foreground">СХД и бекапы</span></li>
              <li><span className="text-sm text-muted-foreground">Почтовые серверы</span></li>
              <li><span className="text-sm text-muted-foreground">Поддержка</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 uppercase tracking-wider text-foreground/80">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Phone" className="h-4 w-4 text-primary" />
                +7 900 123-45-67
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Mail" className="h-4 w-4 text-primary" />
                info@infrateam.ru
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="MapPin" className="h-4 w-4 text-primary" />
                Москва
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/60 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2025 InfraTeam. Все права защищены.
          </p>
          <p className="text-xs text-muted-foreground">
            IT‑услуги для бизнеса
          </p>
        </div>
      </div>
    </footer>
  )
}
