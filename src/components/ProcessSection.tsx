import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import { Fragment } from "react"
import Icon from "@/components/ui/icon"

const steps = [
  {
    icon: "ClipboardList",
    title: "Аудит и постановка задачи",
    description:
      "Выезжаем на объект или проводим онлайн-встречу. Изучаем текущую инфраструктуру, выявляем узкие места и согласовываем цели. Составляем техническое задание и смету.",
    number: "01",
  },
  {
    icon: "Wrench",
    title: "Реализация",
    description:
      "Выполняем работы в согласованные сроки: монтаж, настройка, развёртывание. Работаем без остановки вашего бизнеса там, где это возможно. Держим вас в курсе на каждом этапе.",
    number: "02",
  },
  {
    icon: "ShieldCheck",
    title: "Приёмка и поддержка",
    description:
      "Сдаём работу с документацией и обучением сотрудников. Остаёмся на связи: плановое обслуживание, оперативное устранение инцидентов и развитие инфраструктуры.",
    number: "03",
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Как мы работаем
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            От <span className="text-primary">задачи</span> до <span className="text-primary">результата</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Три простых шага — и ваша IT-инфраструктура работает без сбоев.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <Fragment key={index}>
              <Card className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-background">
                <div className="absolute top-0 right-0 text-[120px] font-bold bg-gradient-to-br from-primary/10 to-primary/5 bg-clip-text text-transparent leading-none p-4">
                  {step.number}
                </div>
                <CardHeader>
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 w-fit group-hover:scale-110 group-hover:rotate-6">
                    <Icon name={step.icon} className="h-6 w-6" fallback="Settings" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
              {index < steps.length - 1 && (
                <div
                  className="hidden md:flex items-center justify-center absolute top-1/2 -translate-y-1/2"
                  style={{ left: `${(index + 1) * 33.33 - 4}%` }}
                >
                  <ArrowRight className="h-8 w-8 text-primary animate-pulse" />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  )
}
