import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const values = [
  { icon: "ShieldCheck", title: "Надёжность", description: "Строим инфраструктуру, которая не подводит в критический момент" },
  { icon: "Eye", title: "Прозрачность", description: "Объясняем что делаем и зачем — без скрытых платежей" },
  { icon: "Zap", title: "Скорость реакции", description: "Отвечаем на заявки в течение 1 часа, критические инциденты — сразу" },
  { icon: "Layers", title: "Комплексный подход", description: "Закрываем весь периметр: сеть, серверы, рабочие места, почта" },
  { icon: "Building2", title: "Опыт в МСБ", description: "Знаем специфику малого и среднего бизнеса: бюджеты и задачи" },
  { icon: "Handshake", title: "Долгосрочность", description: "Работаем на перспективу — растём вместе с вашим бизнесом" },
]

const stats = [
  { number: "7+", label: "Лет опыта" },
  { number: "30+", label: "Компаний" },
  { number: "200+", label: "Решённых задач" },
  { number: "1 час", label: "Время реакции" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/40">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            О компании
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            IT‑партнёр, которому доверяют
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Берём на себя всю IT-инфраструктуру — от кабеля до домена и ежедневной поддержки сотрудников.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-card border border-border/60 shadow-sm">
              <div className="text-3xl md:text-4xl font-extrabold text-primary mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((value, index) => (
            <Card
              key={index}
              className="border border-border/60 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group"
            >
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon name={value.icon} className="h-5 w-5" fallback="CheckCircle" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
