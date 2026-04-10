const steps = [
  {
    num: '01',
    title: 'Обсуждение',
    desc: 'Разбираем задачу: что нужно сделать, в какие сроки, какой бюджет. Отвечаю на все вопросы.',
  },
  {
    num: '02',
    title: 'Оценка и КП',
    desc: 'Готовлю техническое предложение со сроками и стоимостью. Согласовываем детали.',
  },
  {
    num: '03',
    title: 'Разработка',
    desc: 'Приступаю к работе. Показываю промежуточные результаты — вы контролируете процесс.',
  },
  {
    num: '04',
    title: 'Согласование',
    desc: 'Демонстрирую результат, вношу правки по вашим комментариям до полного согласования.',
  },
  {
    num: '05',
    title: 'Сдача',
    desc: 'Передаю готовый проект, документацию и доступы. Провожу обучение при необходимости.',
  },
  {
    num: '06',
    title: 'Поддержка',
    desc: 'Остаюсь на связи после сдачи. Помогаю с вопросами и при необходимости вношу правки.',
  },
];

export default function Process() {
  return (
    <section id="process" className="section-padding bg-background">
      <div className="container-max">
        <div className="mb-12">
          <div className="text-sm font-medium text-[hsl(var(--accent))] mb-2">Как работаю</div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Этапы работы</h2>
          <p className="text-muted-foreground max-w-md">
            Прозрачный процесс от первого сообщения до запуска проекта
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="relative group">
              <div className="bg-white rounded-2xl p-6 border border-border h-full transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                <div className="text-4xl font-black text-secondary-foreground/20 mb-4 leading-none">
                  {step.num}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
