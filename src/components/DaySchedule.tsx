import Icon from "@/components/ui/icon"

const schedule = [
  {
    time: "09:00 – 09:30",
    type: "start",
    title: "Сбор группы",
    location: "Центр Калуги",
    description: "Встреча у входа в парк им. К. Э. Циолковского. Знакомство с гидом, вводный инструктаж, представление программы дня.",
    transfer: null,
    icon: "Users",
    index: null,
  },
  {
    time: "09:30 – 11:00",
    type: "location",
    title: "Парк им. К. Э. Циолковского",
    location: "Калуга",
    description: "Театрализованное приветствие «Встреча с Гоголем», прогулка по парку, рассказ о легендах, чтение отрывков. Мини-конкурс «Гоголевская мысль».",
    transfer: "Пеший",
    icon: "Trees",
    index: "01",
  },
  {
    time: "11:00 – 11:45",
    type: "location",
    title: "Гостиные ряды",
    location: "Калуга",
    description: "Экскурсия-наблюдение, рассказ об истории любимого места прогулок Гоголя, фотосессия у арочных галерей.",
    transfer: "Пеший · 5–10 мин от парка",
    icon: "Store",
    index: "02",
  },
  {
    time: "11:45 – 12:15",
    type: "transfer",
    title: "Трансфер в Тарусу",
    location: null,
    description: "Переезд на заказанном автобусе или микроавтобусе. Время в пути ~30 минут.",
    transfer: null,
    icon: "Bus",
    index: null,
  },
  {
    time: "12:15 – 13:45",
    type: "location",
    title: "Набережная Оки · Таруса",
    location: "Таруса",
    description: "Прогулка по набережной, экскурсия к дому Гоголя, чтение и обсуждение отрывков на литературной скамье.",
    transfer: "Пеший",
    icon: "Waves",
    index: "03",
  },
  {
    time: "13:45 – 15:00",
    type: "location",
    title: "Гоголевский обед",
    location: "Таруса",
    description: "Тематический обед с блюдами из «Вечеров на хуторе близ Диканьки» и «Мёртвых душ». Комментарии гида-актёра за столом.",
    transfer: null,
    icon: "UtensilsCrossed",
    index: "04",
  },
  {
    time: "15:00 – 16:30",
    type: "location",
    title: "Олонкин сад · Прогулка по реке Суходрев",
    location: "Окрестности Тарусы",
    description: "Яблоневый сад, увековеченный в произведениях Гоголя. Спокойная прогулка, время для рефлексии и индивидуальных фотографий.",
    transfer: "Трансфер включён в автобус",
    icon: "Leaf",
    index: "05",
  },
  {
    time: "16:30 – 17:00",
    type: "transfer",
    title: "Трансфер в Калугу",
    location: null,
    description: "Возвращение на заказанном автобусе. Время в пути ~30 минут.",
    transfer: null,
    icon: "Bus",
    index: null,
  },
  {
    time: "17:00 – 18:30",
    type: "location",
    title: "Библиотека им. В. Г. Белинского",
    location: "Центр Калуги",
    description: "Мини-выставка «Гоголь в Калужском крае», участие в «Литературной гостиной»: обсуждение впечатлений, ответы на вопросы, итоги дня.",
    transfer: null,
    icon: "BookOpen",
    index: "06",
  },
  {
    time: "18:30",
    type: "end",
    title: "Завершение маршрута",
    location: "Центр Калуги",
    description: "Участники расходятся из удобной точки в центре города.",
    transfer: null,
    icon: "Flag",
    index: null,
  },
]

export function DaySchedule() {
  return (
    <section id="schedule" className="py-32 bg-secondary/30">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Расписание <span className="font-semibold">дня</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Один день — шесть локаций. Полная программа с точным временем и переездами
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-[2.15rem] top-0 bottom-0 w-px bg-border" />

          <div className="space-y-2">
            {schedule.map((item, index) => (
              <div key={index} className="relative flex gap-8 pb-2">
                <div className="relative z-10 shrink-0 flex flex-col items-center">
                  <div
                    className={`w-[4.3rem] h-[4.3rem] rounded-2xl flex items-center justify-center shadow-sm border
                      ${item.type === "location" ? "bg-primary text-primary-foreground border-primary" : ""}
                      ${item.type === "transfer" ? "bg-muted text-muted-foreground border-border" : ""}
                      ${item.type === "start" || item.type === "end" ? "bg-card text-foreground border-border" : ""}
                    `}
                  >
                    <Icon name={item.icon} fallback="MapPin" size={20} />
                  </div>
                </div>

                <div
                  className={`flex-1 rounded-2xl p-5 mb-4 border transition-all
                    ${item.type === "location" ? "bg-card border-border hover:shadow-md hover:border-primary/30" : ""}
                    ${item.type === "transfer" ? "bg-muted/50 border-border/50" : ""}
                    ${item.type === "start" || item.type === "end" ? "bg-card border-dashed border-border" : ""}
                  `}
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      {item.index && (
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                          Точка {item.index}
                        </span>
                      )}
                      {item.type === "transfer" && (
                        <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                          Трансфер
                        </span>
                      )}
                    </div>
                    <span className="text-xs font-medium text-muted-foreground font-mono bg-muted px-2.5 py-1 rounded-lg whitespace-nowrap">
                      {item.time}
                    </span>
                  </div>

                  <div className="flex items-start gap-2 mb-1.5">
                    <h3 className={`font-semibold leading-snug ${item.type === "transfer" ? "text-muted-foreground text-sm" : "text-base"}`}>
                      {item.title}
                    </h3>
                  </div>

                  {item.location && (
                    <div className="flex items-center gap-1 mb-2">
                      <Icon name="MapPin" size={12} className="text-primary shrink-0" />
                      <span className="text-xs text-muted-foreground">{item.location}</span>
                    </div>
                  )}

                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>

                  {item.transfer && (
                    <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-border/60">
                      <Icon name="Footprints" fallback="Navigation" size={13} className="text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{item.transfer}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
