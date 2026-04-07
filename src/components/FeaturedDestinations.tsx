import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const destinations = [
  {
    name: "Усадьба Полотняный Завод",
    region: "Калужская область",
    image: "https://cdn.poehali.dev/projects/12e4dfcd-bce3-424b-84fd-5cea732e8d6b/files/6b5ddd7f-92ff-4fcd-be85-d9033763c95f.jpg",
    description: "Имение Гончаровых, где бывал Гоголь — старинный парк, господский дом и дух дворянской эпохи",
    tag: "Усадьба",
  },
  {
    name: "Калуга купеческая",
    region: "Город Калуга",
    image: "https://cdn.poehali.dev/projects/12e4dfcd-bce3-424b-84fd-5cea732e8d6b/files/9414938d-5673-47f4-ae85-74b4b94a01d1.jpg",
    description: "Торговые ряды, трактиры и улицы губернского города — прообразы городков из «Мёртвых душ»",
    tag: "Город",
  },
  {
    name: "Оптина пустынь",
    region: "Козельский район",
    image: "https://cdn.poehali.dev/projects/12e4dfcd-bce3-424b-84fd-5cea732e8d6b/files/aa909d71-ba74-4469-923f-16389b20e1ec.jpg",
    description: "Знаменитый монастырь, который посещал Гоголь в поисках духовного покоя и вдохновения",
    tag: "Монастырь",
  },
  {
    name: "Тарутино и окрестности",
    region: "Жуковский район",
    image: "https://cdn.poehali.dev/projects/12e4dfcd-bce3-424b-84fd-5cea732e8d6b/files/6b5ddd7f-92ff-4fcd-be85-d9033763c95f.jpg",
    description: "Деревенские просторы, помещичьи угодья — пейзажи, ставшие декорацией гоголевской прозы",
    tag: "Деревня",
  },
  {
    name: "Козельск средневековый",
    region: "Козельский район",
    image: "https://cdn.poehali.dev/projects/12e4dfcd-bce3-424b-84fd-5cea732e8d6b/files/9414938d-5673-47f4-ae85-74b4b94a01d1.jpg",
    description: "Древний город на Жиздре с многовековой историей и купеческим укладом гоголевской эпохи",
    tag: "Город",
  },
  {
    name: "Дорога Гоголя",
    region: "Калужский тракт",
    image: "https://cdn.poehali.dev/projects/12e4dfcd-bce3-424b-84fd-5cea732e8d6b/files/aa909d71-ba74-4469-923f-16389b20e1ec.jpg",
    description: "Старинный почтовый тракт, по которому ехал Чичиков — бесконечная дорога среди берёз и полей",
    tag: "Маршрут",
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
            Каждое место хранит следы великого писателя — усадьбы, монастыри, дороги и провинциальные города эпохи Гоголя
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Icon name="MapPin" size={14} className="text-primary" />
                  <span className="text-xs font-medium">{destination.region}</span>
                </div>

                <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                  {destination.tag}
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{destination.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{destination.description}</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground italic">Литературное место</span>
                  <Button variant="ghost" size="sm" className="group/btn text-foreground hover:text-primary">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="rounded-full px-8 border-2 bg-transparent">
            Весь маршрут на карте
          </Button>
        </div>
      </div>
    </section>
  )
}
