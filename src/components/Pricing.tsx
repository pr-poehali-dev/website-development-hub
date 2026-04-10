import Icon from '@/components/ui/icon';

const plans = [
  {
    name: 'Базовый',
    price: 'от 5 000 ₽',
    desc: 'Для небольших задач и правок',
    features: [
      'Сайт-визитка или лендинг',
      'Адаптивный дизайн',
      'Форма обратной связи',
      'Настройка хостинга',
      'Поддержка 7 дней',
    ],
    cta: 'Заказать',
    highlighted: false,
  },
  {
    name: 'Стандарт',
    price: 'от 20 000 ₽',
    desc: 'Оптимально для малого бизнеса',
    features: [
      'Корпоративный сайт / магазин',
      'До 10 страниц',
      'SEO-оптимизация',
      'Интеграция с CRM или мессенджером',
      'Обучение по управлению сайтом',
      'Поддержка 30 дней',
    ],
    cta: 'Заказать',
    highlighted: true,
  },
  {
    name: 'Расширенный',
    price: 'Договорная',
    desc: 'Для сложных проектов',
    features: [
      'Проект любой сложности',
      'Уникальный дизайн',
      'Несколько интеграций',
      'Сложный функционал',
      'Длительное сопровождение',
      'Приоритетная поддержка',
    ],
    cta: 'Обсудить',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-max">
        <div className="mb-12 text-center">
          <div className="text-sm font-medium text-[hsl(var(--accent))] mb-2">Стоимость</div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Цены</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Точная стоимость зависит от задачи. Напишите — обсудим и рассчитаем бесплатно.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-6 border transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-primary text-primary-foreground border-primary shadow-xl scale-105'
                  : 'bg-background border-border hover:shadow-md'
              }`}
            >
              <div className="mb-5">
                <div className={`text-xs font-semibold uppercase tracking-wider mb-2 ${plan.highlighted ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                  {plan.name}
                </div>
                <div className={`text-2xl font-bold mb-1 ${plan.highlighted ? 'text-primary-foreground' : 'text-foreground'}`}>
                  {plan.price}
                </div>
                <div className={`text-sm ${plan.highlighted ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                  {plan.desc}
                </div>
              </div>

              <ul className="space-y-2.5 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Icon
                      name="Check"
                      size={14}
                      className={`mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-primary-foreground' : 'text-[hsl(var(--accent))]'}`}
                    />
                    <span className={`text-sm ${plan.highlighted ? 'text-primary-foreground/90' : 'text-foreground'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-200 ${
                  plan.highlighted
                    ? 'bg-white text-primary hover:bg-white/90'
                    : 'bg-primary text-primary-foreground hover:opacity-90'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
