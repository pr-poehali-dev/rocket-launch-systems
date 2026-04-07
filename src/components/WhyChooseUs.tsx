import Icon from "@/components/ui/icon"

const features = [
  {
    icon: "BookOpen",
    title: "Литературный контекст",
    description: "Каждая точка маршрута раскрывается через тексты Гоголя — цитаты, отрывки, истории создания произведений",
  },
  {
    icon: "Users",
    title: "Учёные-гиды",
    description: "Экскурсии ведут литературоведы и краеведы, влюблённые в эпоху и глубоко знающие материал",
  },
  {
    icon: "Map",
    title: "Живой маршрут",
    description: "Не музейные витрины, а настоящие места — усадьбы, дороги, монастыри, где ощущается дух XIX века",
  },
  {
    icon: "Star",
    title: "Для всех возрастов",
    description: "Школьные группы, взрослые ценители литературы и семьи — программа адаптируется под каждую аудиторию",
  },
]

export function WhyChooseUs() {
  return (
    <section id="about" className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Почему выбирают <span className="font-semibold">наш маршрут</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Мы соединяем литературу и путешествие — так, чтобы Гоголь ожил не на странице, а прямо перед вами
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-2">
                <Icon name={feature.icon} fallback="Star" size={32} />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
