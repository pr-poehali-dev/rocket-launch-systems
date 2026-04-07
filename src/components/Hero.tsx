import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-muted/30 to-background">
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.poehali.dev/projects/12e4dfcd-bce3-424b-84fd-5cea732e8d6b/files/9414938d-5673-47f4-ae85-74b4b94a01d1.jpg"
          alt="Калужская земля"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background/60" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center py-32">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Icon name="BookOpen" size={16} />
            Литературно-туристический маршрут
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-balance">
            Гоголевские страницы
            <span className="block font-semibold mt-2 text-primary">Калужской земли</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Пройдите по местам, вдохновившим великого писателя. Усадьбы, дороги и пейзажи, сохранившие дух эпохи «Мёртвых душ»
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 h-14 text-base group"
            >
              Смотреть маршрут
              <Icon name="ArrowRight" size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base border-2 bg-transparent">
              Все туры
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 md:gap-16 max-w-3xl mx-auto mt-24 pt-16 border-t border-border/50">
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-light">12</div>
            <div className="text-sm text-muted-foreground">Точек маршрута</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-light">★</div>
            <div className="text-sm text-muted-foreground">Авторский формат тура</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-light">XIX</div>
            <div className="text-sm text-muted-foreground">Век оживает</div>
          </div>
        </div>
      </div>
    </section>
  )
}