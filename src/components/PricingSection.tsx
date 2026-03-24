import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { QuoteFormDialog } from "@/components/QuoteFormDialog"

const pricingTiers = [
  {
    name: "Разовые работы",
    price: "По запросу",
    description: "Одноразовые задачи и проекты",
    features: [
      "Монтаж СКС / СВН",
      "Развёртывание сервера",
      "Настройка почтового сервера",
      "Подбор и установка оборудования",
      "Создание инфраструктуры с нуля",
    ],
    highlighted: false,
  },
  {
    name: "Абонентское обслуживание",
    price: "от 15 000",
    description: "Ежемесячная поддержка IT‑инфраструктуры",
    features: [
      "Поддержка пользователей",
      "Администрирование серверов",
      "Мониторинг инфраструктуры",
      "Резервное копирование",
      "Реакция на инциденты за 1 час",
      "Ежемесячный отчёт",
    ],
    highlighted: true,
  },
  {
    name: "Комплексный проект",
    price: "По запросу",
    description: "Полное построение IT-инфраструктуры",
    features: [
      "Монтаж СКС",
      "Серверная инфраструктура (AD, GPO, DNS, DHCP)",
      "СХД и резервное копирование",
      "Почтовый сервер",
      "Настройка рабочих мест",
      "Сопровождение после запуска",
    ],
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Тарифы
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Выберите подходящий формат
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Разовые работы, ежемесячное обслуживание или комплексный проект под ключ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingTiers.map((tier, index) => (
            <Card
              key={index}
              className={`relative group transition-all duration-300 ${
                tier.highlighted
                  ? "border-primary shadow-xl shadow-primary/10 scale-[1.03] bg-card"
                  : "border-border/60 hover:border-primary/40 hover:shadow-lg"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-semibold shadow-lg">
                  Популярный
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl mb-1">{tier.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{tier.description}</p>
                <div className="mt-4">
                  {tier.price === "По запросу" ? (
                    <span className="text-2xl font-bold">{tier.price}</span>
                  ) : (
                    <div>
                      <span className="text-sm font-normal text-muted-foreground">от </span>
                      <span className="text-3xl font-extrabold">{tier.price.replace("от ", "")}</span>
                      <span className="text-sm font-normal text-muted-foreground"> ₽/мес</span>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div className="p-0.5 rounded-full bg-primary/10 mt-0.5 flex-shrink-0">
                        <Check className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <QuoteFormDialog
                  packageName={tier.name}
                  variant={tier.highlighted ? "default" : "outline"}
                  className={`w-full rounded-xl ${
                    tier.highlighted
                      ? "bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20"
                      : ""
                  }`}
                >
                  {tier.price === "По запросу" ? "Обсудить проект" : "Выбрать тариф"}
                </QuoteFormDialog>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">
            Все тарифы включают <span className="text-primary font-semibold">бесплатную консультацию</span> и{" "}
            <span className="text-primary font-semibold">аудит текущей инфраструктуры</span>
          </p>
        </div>
      </div>
    </section>
  )
}
