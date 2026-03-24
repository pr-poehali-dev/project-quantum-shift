import Icon from "@/components/ui/icon"

const steps = [
  {
    icon: "ClipboardList",
    title: "Аудит и постановка задачи",
    description: "Изучаем текущую инфраструктуру, выявляем узкие места. Составляем ТЗ и смету.",
    number: "01",
  },
  {
    icon: "Wrench",
    title: "Реализация",
    description: "Выполняем работы в согласованные сроки без остановки бизнеса. Держим в курсе на каждом этапе.",
    number: "02",
  },
  {
    icon: "ShieldCheck",
    title: "Приёмка и поддержка",
    description: "Сдаём работу с документацией и обучением. Остаёмся на связи для обслуживания и развития.",
    number: "03",
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-14">
          <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Как мы работаем
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            От задачи до результата
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Три простых шага — и ваша IT-инфраструктура работает без сбоев.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="flex flex-col items-center text-center p-8 rounded-2xl bg-card border border-border/60 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-5xl font-extrabold text-primary/15 mb-4">{step.number}</div>
                <div className="p-3 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Icon name={step.icon} className="h-7 w-7" fallback="Settings" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 -translate-y-1/2 z-10">
                  <Icon name="ChevronRight" className="h-6 w-6 text-primary/40" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
