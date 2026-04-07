import Icon from "@/components/ui/icon"

export function Footer() {
  return (
    <footer id="contact" className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold leading-tight">
              Гоголевские страницы
              <span className="block text-xs font-normal text-muted-foreground tracking-widest uppercase mt-1">Калужской земли</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Литературно-туристический маршрут по местам, связанным с Николаем Васильевичем Гоголем
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Маршрут</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Полотняный Завод</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Оптина пустынь</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Козельск</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Калуга</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Дорога Гоголя</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Туры</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Один день с Гоголем</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Выходные в XIX веке</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Полный маршрут</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Школьные группы</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Корпоративные туры</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Информация</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">О проекте</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Связаться с нами</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Условия участия</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Правила отмены</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>2026 «Гоголевские страницы Калужской земли». Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
