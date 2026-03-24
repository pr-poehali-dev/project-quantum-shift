import Icon from "@/components/ui/icon"

export function Logo({ className = "", isHero = false }: { className?: string; isHero?: boolean }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className={`p-1.5 rounded-lg ${isHero ? "bg-blue-500/20" : "bg-primary/10"}`}>
        <Icon
          name="Network"
          className={`h-6 w-6 ${isHero ? "text-blue-400" : "text-primary"}`}
          fallback="Globe"
        />
      </div>
      <div className="flex flex-col">
        <span className={`text-lg font-bold tracking-tight leading-tight ${isHero ? "text-white" : ""}`}>
          InfraTeam
        </span>
        <span className={`text-[10px] font-medium leading-tight ${isHero ? "text-blue-200/60" : "text-muted-foreground"}`}>
          IT-услуги для бизнеса
        </span>
      </div>
    </div>
  )
}
