import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const projects = [
  {
    title: "Производственное предприятие",
    category: "Инфраструктура с нуля",
    icon: "Factory",
    description:
      "Развернули доменную инфраструктуру с нуля для предприятия 80 рабочих мест: Active Directory, GPO, DHCP, DNS, файловый сервер с разграничением прав доступа по отделам.",
    tags: ["Active Directory", "GPO", "DNS/DHCP", "File Server"],
  },
  {
    title: "Торговая компания",
    category: "Монтаж СКС + настройка сети",
    icon: "Building2",
    description:
      "Спроектировали и смонтировали структурированную кабельную сеть в офисе на 3 этажа, настроили коммутацию, VLAN-сегментацию и беспроводную сеть для сотрудников и гостей.",
    tags: ["СКС", "VLAN", "Wi-Fi", "Коммутация"],
  },
  {
    title: "Медицинский центр",
    category: "Почтовый сервер + поддержка",
    icon: "HeartPulse",
    description:
      "Внедрили корпоративный почтовый сервер с антиспамом и архивированием. Организовали регулярную поддержку пользователей и обслуживание рабочих мест.",
    tags: ["Mail Server", "Антиспам", "Helpdesk", "Backup"],
  },
  {
    title: "Логистическая компания",
    category: "СХД + резервное копирование",
    icon: "Truck",
    description:
      "Внедрили систему хранения данных, настроили политики резервного копирования с ежедневной верификацией. Подобрали и поставили серверное оборудование под задачи компании.",
    tags: ["СХД", "Backup", "Серверы", "Мониторинг"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Наши кейсы</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Реальные проекты для реального бизнеса — смотрите, какие задачи мы уже решили.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-primary/10 via-muted/50 to-primary/5 flex items-center justify-center">
                <div className="flex flex-col items-center gap-4 p-8">
                  <div className="p-6 rounded-2xl bg-primary/10 group-hover:bg-primary transition-all duration-300">
                    <Icon
                      name={project.icon}
                      className="h-16 w-16 text-primary group-hover:text-primary-foreground transition-colors duration-300"
                      fallback="Building"
                    />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                    {project.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-sm text-primary font-semibold mb-2">{project.category}</p>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
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
