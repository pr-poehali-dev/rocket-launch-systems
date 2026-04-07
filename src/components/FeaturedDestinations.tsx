import { Card } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const destinations = [
  {
    number: "01",
    name: "Парк им. К. Э. Циолковского",
    region: "Калуга",
    image: "https://cdn.poehali.dev/projects/12e4dfcd-bce3-424b-84fd-5cea732e8d6b/files/3196f727-d00a-446c-b922-e63a869cd21f.jpg",
    description: "Место, где Гоголь жил и работал во время пребывания в Калуге. Старинные аллеи парка хранят атмосферу тех лет",
    tag: "Парк",
    icon: "Trees",
  },
  {
    number: "02",
    name: "Гостиные ряды",
    region: "Калуга",
    image: "https://cdn.poehali.dev/projects/12e4dfcd-bce3-424b-84fd-5cea732e8d6b/files/bef7af3c-58f6-4922-a2be-79ddeaec1e4b.jpg",
    description: "Любимое место прогулок Гоголя — торговые ряды с арочными галереями, купеческий уклад и живой дух провинции",
    tag: "Архитектура",
    icon: "Store",
  },
  {
    number: "03",
    name: "Набережная Оки, д. Ромоданово",
    region: "Калужская область",
    image: "https://cdn.poehali.dev/projects/12e4dfcd-bce3-424b-84fd-5cea732e8d6b/files/a0580088-ca3f-4c60-a356-d0a229c3e65b.jpg",
    description: "Живописная набережная Оки — место для чтения отрывков из гоголевских произведений на фоне речных просторов",
    tag: "Природа",
    icon: "Waves",
  },
  {
    number: "04",
    name: "Гоголевский обед",
    region: "Калуга",
    image: "https://cdn.poehali.dev/projects/12e4dfcd-bce3-424b-84fd-5cea732e8d6b/files/6141440e-a7c8-40ea-a31a-c6d45bb3f9fe.jpg",
    description: "Тематический обед с блюдами из «Вечеров на хуторе близ Диканьки» и «Мёртвых душ»: вареники, борщ, поросёнок, мёд",
    tag: "Гастрономия",
    icon: "UtensilsCrossed",
  },
  {
    number: "05",
    name: "Олонкин сад",
    region: "Калуга",
    image: "https://cdn.poehali.dev/projects/12e4dfcd-bce3-424b-84fd-5cea732e8d6b/files/60c1cf4c-501b-40fc-b0f7-153e1edaeb48.jpg",
    description: "Яблоневый сад, увековеченный в произведениях Гоголя — прогулка среди деревьев для размышлений и творческих замыслов",
    tag: "Сад",
    icon: "Leaf",
  },
  {
    number: "06",
    name: "Библиотека им. В. Г. Белинского",
    region: "Центр Калуги",
    image: "https://cdn.poehali.dev/projects/12e4dfcd-bce3-424b-84fd-5cea732e8d6b/files/6fe4fb10-7451-4908-ac4e-a7e0def1ed0e.jpg",
    description: "Мини-выставка «Гоголь в Калужском крае» и литературная гостиная — торжественное завершение маршрута",
    tag: "Литература",
    icon: "BookOpen",
  },
]

export function FeaturedDestinations() {
  return (
    <section id="destinations" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Точки <span className="font-semibold">маршрута</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Шесть остановок одного дня — от утренней прогулки по паркам Гоголя до вечерней литературной гостиной
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/0" />

                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Icon name="MapPin" size={14} className="text-primary" />
                  <span className="text-xs font-medium">{destination.region}</span>
                </div>

                <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                  {destination.tag}
                </div>

                <div className="absolute bottom-4 left-4 text-white/40 font-light text-5xl leading-none select-none">
                  {destination.number}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center mt-0.5">
                    <Icon name={destination.icon} fallback="MapPin" size={18} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 leading-tight">{destination.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{destination.description}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-sm text-muted-foreground italic mb-6">Маршрут проходит за один день · Все точки в Калуге и ближайших окрестностях</p>
        </div>
      </div>
    </section>
  )
}