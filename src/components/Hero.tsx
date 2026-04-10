import Icon from '@/components/ui/icon';

const tags = ['WordPress', 'React', 'Битрикс', 'OpenCart', 'PHP', 'JavaScript', 'CSS анимации', 'API интеграции', 'Telegram боты', 'CRM'];

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full inline-block animate-pulse"></span>
              Доступен для новых проектов
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Создаю сайты<br />
              и функционал<br />
              <span className="text-[hsl(var(--accent))]">под ключ</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
              Разрабатываю сайты любой сложности: от визиток до интернет-магазинов. Подключаю интеграции, пишу скрипты, настраиваю анимации.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                Обсудить проект
                <Icon name="ArrowRight" size={16} />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-border transition-colors"
              >
                Примеры работ
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="text-xs bg-secondary text-muted-foreground px-2.5 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="hidden md:flex flex-col gap-4 animate-slide-up">
            <div className="bg-white rounded-2xl p-6 border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Code2" size={18} className="text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">Разработка с нуля</div>
                  <div className="text-xs text-muted-foreground">Любая сложность</div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">Создаю сайты на WordPress, React, чистом HTML/CSS — под ваш проект</div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-border shadow-sm ml-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[hsl(var(--accent))] rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={18} className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">Быстрый старт</div>
                  <div className="text-xs text-muted-foreground">Ответ за 30 минут</div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">Приступаю к работе сразу после согласования — без долгих ожиданий</div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Puzzle" size={18} className="text-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">Интеграции</div>
                  <div className="text-xs text-muted-foreground">Telegram, CRM, API</div>
                </div>
              </div>
              <div className="text-sm text-muted-foreground">Подключаю любые сервисы и платёжные системы к вашему сайту</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-border">
          {[
            { num: '150+', label: 'Проектов выполнено' },
            { num: '5 лет', label: 'Опыт работы' },
            { num: '98%', label: 'Довольных клиентов' },
            { num: '24ч', label: 'Среднее время ответа' },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.num}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
