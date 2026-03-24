export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">InfraTeam</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              IT-инфраструктура для малого и среднего бизнеса. СКС, серверы, домен, поддержка пользователей.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              © 2025 InfraTeam. Все права защищены.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
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
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li><span className="text-sm text-muted-foreground">Монтаж СКС и СВН</span></li>
              <li><span className="text-sm text-muted-foreground">Администрирование серверов</span></li>
              <li><span className="text-sm text-muted-foreground">Администрирование СХД</span></li>
              <li><span className="text-sm text-muted-foreground">Почтовые серверы</span></li>
              <li><span className="text-sm text-muted-foreground">Поддержка пользователей</span></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
