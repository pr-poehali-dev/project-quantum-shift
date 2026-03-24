import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "Cable",
    title: "Монтаж СКС и СВН",
    description: "Проектирование и прокладка кабельной инфраструктуры с соблюдением стандартов — надёжная основа для сети.",
  },
  {
    icon: "Server",
    title: "Администрирование серверов",
    description: "Active Directory, GPO, DNS, DHCP, файловые серверы. Создание доменной среды с нуля или поддержка существующей.",
  },
  {
    icon: "Database",
    title: "Администрирование СХД",
    description: "Настройка систем хранения данных, резервное копирование, контроль целостности и надёжная сохранность.",
  },
  {
    icon: "Cpu",
    title: "Подбор оборудования",
    description: "Серверное и пользовательское железо под ваши задачи и бюджет. Помогаем не переплачивать.",
  },
  {
    icon: "Mail",
    title: "Почтовые серверы",
    description: "Корпоративная почта с антиспамом, резервированием и стабильной работой 24/7.",
  },
  {
    icon: "Headphones",
    title: "Поддержка пользователей",
    description: "Техподдержка сотрудников: настройка рабочих мест, устранение неполадок, помощь с ПО и периферией.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-14">
          <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Наши услуги
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Полный спектр IT‑услуг
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Закрываем весь IT-периметр для малых и средних предприятий — от прокладки кабеля до ежедневной поддержки.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group border border-border/60 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 bg-card"
            >
              <CardContent className="p-6">
                <div className="mb-4 inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon name={service.icon} className="h-6 w-6" fallback="Settings" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
