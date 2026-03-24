import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const testimonials = [
  {
    quote:
      "Ребята подняли нам Active Directory и настроили всю сеть буквально за 3 дня. Работа на 80 компьютеров — теперь всё централизованно. Очень доволен.",
    name: "Алексей",
    role: "Директор производственной компании",
  },
  {
    quote:
      "Долго не могли найти нормальных специалистов. InfraTeam разобрались со старой инфраструктурой и предложили чёткий план. Теперь у нас работающий почтовый сервер и бекапы каждую ночь.",
    name: "Марина",
    role: "Офис-менеджер медицинского центра",
  },
  {
    quote:
      "Обратились за монтажом СКС в новом офисе. Сделали быстро и чисто, всё задокументировано. Потом ещё и серверную настроили. Рекомендую.",
    name: "Дмитрий",
    role: "Руководитель торговой компании",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/40">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Отзывы
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Что говорят наши клиенты
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Работаем честно и на результат. Вот что говорят те, кто уже доверил нам своё IT.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-border/60 shadow-sm hover:shadow-md transition-all duration-300">
              <CardContent className="p-6">
                <Icon name="Quote" className="h-8 w-8 text-primary/30 mb-4" fallback="MessageSquare" />
                <p className="text-sm leading-relaxed mb-6 text-foreground/80">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-3 border-t border-border/60 pt-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    {testimonial.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-muted-foreground text-xs">{testimonial.role}</p>
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
