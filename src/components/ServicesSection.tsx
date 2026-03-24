import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "Cable",
    title: "Монтаж СКС и СВН",
    description:
      "Профессиональный монтаж структурированных кабельных и слаботочных сетей. Проектирование и прокладка кабельной инфраструктуры с соблюдением всех стандартов — надёжная основа для вашей сети.",
  },
  {
    icon: "Server",
    title: "Администрирование серверов",
    description:
      "Настройка и поддержка Active Directory, групповых политик GPO, DNS, DHCP и файловых серверов. Создание доменной инфраструктуры с нуля или поддержка существующей.",
  },
  {
    icon: "Database",
    title: "Администрирование СХД",
    description:
      "Настройка и обслуживание систем хранения данных. Организация резервного копирования, контроль целостности данных и обеспечение их надёжной сохранности.",
  },
  {
    icon: "Cpu",
    title: "Подбор оборудования",
    description:
      "Подбор серверного и пользовательского железа под ваши задачи и бюджет. Помогаем не переплачивать и выбрать оборудование, которое прослужит долго.",
  },
  {
    icon: "Mail",
    title: "Почтовые серверы",
    description:
      "Развёртывание и настройка корпоративных почтовых серверов. Настройка антиспама, резервирования и обеспечение стабильной работы корпоративной почты.",
  },
  {
    icon: "HeadphonesIcon",
    title: "Поддержка пользователей",
    description:
      "Техническая поддержка сотрудников вашей организации: настройка рабочих мест, устранение неполадок, помощь с программами и периферией. Быстро и без лишних слов.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Наша экспертиза
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          В чем мы <span className="text-primary">сильны</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Закрываем весь спектр IT-задач для малых и средних предприятий — от кабеля до домена и поддержки пользователей.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <Icon name={service.icon} className="h-6 w-6" fallback="Settings" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
