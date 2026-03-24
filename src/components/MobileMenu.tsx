import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Logo } from "@/components/Logo"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  const menuItems = [
    { href: "#about", label: "О компании" },
    { href: "#services", label: "Услуги" },
    { href: "#portfolio", label: "Кейсы" },
    { href: "#pricing", label: "Тарифы" },
    { href: "#contact", label: "Контакты" },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Меню</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] sm:w-[320px]">
        <SheetHeader>
          <SheetTitle>
            <Logo />
          </SheetTitle>
          <SheetDescription>Навигация по сайту</SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-1 mt-6">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-sm font-medium hover:text-primary hover:bg-primary/5 transition-all py-3 px-4 rounded-lg"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="mt-8 px-4">
          <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl" asChild>
            <a href="tel:+79001234567" onClick={() => setOpen(false)}>
              Позвонить
            </a>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
