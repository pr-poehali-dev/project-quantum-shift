import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"
import Icon from "@/components/ui/icon"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <span className="inline-block text-primary text-sm font-semibold uppercase tracking-widest mb-3">
            Контакты
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Обсудим вашу задачу
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Расскажите о своей инфраструктуре или проблеме — проконсультируем бесплатно и предложим решение.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="border border-border/60 shadow-sm">
              <CardHeader>
                <CardTitle className="text-xl">Оставьте заявку</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Имя *</label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ваше имя"
                        required
                        className="rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">E-mail *</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.ru"
                        required
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">Телефон</label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+7 900 123-45-67"
                      className="rounded-lg"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Опишите задачу *</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Расскажите о вашей инфраструктуре, задаче или проблеме..."
                      rows={5}
                      required
                      className="rounded-lg"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-xl group"
                  >
                    Отправить заявку
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-5">
            <Card className="border border-border/60 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon name="Mail" className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">E-mail</h3>
                    <p className="text-sm text-muted-foreground">info@infrateam.ru</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border/60 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon name="Phone" className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">Телефон</h3>
                    <p className="text-sm text-muted-foreground">+7 900 123-45-67</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border/60 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon name="Clock" className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">Время работы</h3>
                    <p className="text-sm text-muted-foreground">
                      Пн — Пт: 9:00 — 18:00
                      <br />
                      Инциденты: 24/7
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border border-border/60 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon name="MapPin" className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm mb-1">Адрес</h3>
                    <p className="text-sm text-muted-foreground">
                      г. Москва
                      <br />
                      Выезд по всей России
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
