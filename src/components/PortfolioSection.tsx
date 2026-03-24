import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const projects = [
  {
    title: "Производственное предприятие",
    category: "Инфраструктура с нуля",
    icon: "Factory",
    description: "Доменная инфраструктура на 80 мест: AD, GPO, DHCP, DNS, файловый сервер с разграничением прав по отделам.",
    tags: ["Active Directory", "GPO", "DNS/DHCP", "File Server"],
  },
  {
    title: "Торговая компания",
    category: "Монтаж СКС + настройка сети",
    icon: "Building2",
    description: "СКС на 3 этажа, коммутация, VLAN-сегментация и Wi-Fi для сотрудников и гостей.",
    tags: ["СКС", "VLAN", "Wi-Fi", "Коммутация"],
  },
  {
    title: "Медицинский центр",
    category: "Почтовый сервер + поддержка",
    icon: "HeartPulse",
    description: "Корпоративный почтовый сервер с антиспамом. Регулярная поддержка пользователей и обслуживание рабочих мест.",
    tags: ["Mail Server", "Антиспам", "Helpdesk", "Backup"],
  },
  {
    title: "Логистическая компания",
    category: "СХД + резервное копирование",
    icon: "Truck",
    description: "СХД, политики резервного копирования с ежедневной верификацией. Подбор и установка серверного оборудования.",
    tags: ["СХД", "Backup", "Серверы", "Мониторинг"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/40">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Кейсы
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Наши проекты</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Реальные проекты для реального бизнеса — смотрите, какие задачи мы решили.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group border border-border/60 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0">
                    <Icon name={project.icon} className="h-8 w-8" fallback="Building" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">{project.category}</p>
                    <h3 className="text-lg font-bold">{project.title}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-2.5 py-1 rounded-lg bg-primary/8 text-primary/80 border border-primary/15 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
