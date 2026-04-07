import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const packages = [
  {
    title: "Один день с Гоголем",
    duration: "1 день",
    groupSize: "до 20 человек",
    rating: "5.0",
    reviews: "48",
    image: "https://cdn.poehali.dev/projects/12e4dfcd-bce3-424b-84fd-5cea732e8d6b/files/9414938d-5673-47f4-ae85-74b4b94a01d1.jpg",
    highlights: ["Калуга", "Полотняный Завод", "Обед в усадьбе"],
    price: "3 500 ₽",
  },
  {
    title: "Выходные в XIX веке",
    duration: "2 дня",
    groupSize: "до 15 человек",
    rating: "4.9",
    reviews: "62",
    image: "https://cdn.poehali.dev/projects/12e4dfcd-bce3-424b-84fd-5cea732e8d6b/files/6b5ddd7f-92ff-4fcd-be85-d9033763c95f.jpg",
    highlights: ["Оптина пустынь", "Козельск", "Ночь в усадьбе", "Литературный вечер"],
    price: "8 900 ₽",
  },
  {
    title: "Полный маршрут Гоголя",
    duration: "3 дня",
    groupSize: "до 12 человек",
    rating: "5.0",
    reviews: "31",
    image: "https://cdn.poehali.dev/projects/12e4dfcd-bce3-424b-84fd-5cea732e8d6b/files/aa909d71-ba74-4469-923f-16389b20e1ec.jpg",
    highlights: ["Все 12 точек", "Экскурсии литературоведа", "Питание", "Размещение"],
    price: "16 500 ₽",
  },
]

export function PopularPackages() {
  return (
    <section id="packages" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Форматы <span className="font-semibold">туров</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Выберите глубину погружения — от однодневной экскурсии до полного трёхдневного путешествия по следам Гоголя
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Icon name="Star" size={14} className="fill-primary text-primary" />
                  <span className="text-xs font-semibold">{pkg.rating}</span>
                  <span className="text-xs text-muted-foreground">({pkg.reviews})</span>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">{pkg.title}</h3>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1.5">
                      <Icon name="Calendar" size={16} />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Icon name="Users" size={16} />
                      <span>{pkg.groupSize}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.map((highlight, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-muted rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Цена от</div>
                    <div className="text-2xl font-semibold text-primary">{pkg.price}</div>
                  </div>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                    Записаться
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
