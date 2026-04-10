import Icon from '@/components/ui/icon';

const reviews = [
  {
    name: 'Анна Михайлова',
    role: 'Владелец студии йоги',
    text: 'Заказала сайт-визитку с онлайн-записью. Всё сделано быстро, аккуратно и без лишних вопросов. Клиенты сразу отметили удобство.',
    rating: 5,
    project: 'Сайт-визитка',
  },
  {
    name: 'Дмитрий Соколов',
    role: 'Директор строительной компании',
    text: 'Помог перенести старый сайт на новый хостинг и попутно почистил код, ускорил загрузку. Работает заметно лучше. Рекомендую!',
    rating: 5,
    project: 'Перенос и ускорение',
  },
  {
    name: 'Марина Козлова',
    role: 'Основатель магазина косметики',
    text: 'Настроил интеграцию с amoCRM и Telegram — теперь все заявки сразу падают менеджерам. Сэкономили кучу времени.',
    rating: 5,
    project: 'Интеграция CRM + Telegram',
  },
  {
    name: 'Сергей Воронов',
    role: 'Маркетолог агентства',
    text: 'Нужен был квиз для лендинга. Сделал за 2 дня, конверсия выросла с 2% до 6%. Очень доволен результатом.',
    rating: 5,
    project: 'Квиз для лендинга',
  },
  {
    name: 'Ольга Петрова',
    role: 'Репетитор английского',
    text: 'Разработал небольшой сайт с расписанием и формой записи. Понятно объяснил как им пользоваться. Всё работает отлично.',
    rating: 5,
    project: 'Сайт-визитка',
  },
  {
    name: 'Николай Фёдоров',
    role: 'Владелец автосервиса',
    text: 'Подключил онлайн-оплату к сайту. Клиенты теперь могут оплачивать предоплату картой — удобно для всех. Спасибо!',
    rating: 5,
    project: 'Онлайн-оплата',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="section-padding bg-white">
      <div className="container-max">
        <div className="mb-12">
          <div className="text-sm font-medium text-[hsl(var(--accent))] mb-2">Отзывы</div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Что говорят клиенты</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review) => (
            <div key={review.name} className="bg-background rounded-2xl p-6 border border-border">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Icon key={i} name="Star" size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-sm text-foreground leading-relaxed mb-5">"{review.text}"</p>

              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-sm text-foreground">{review.name}</div>
                  <div className="text-xs text-muted-foreground">{review.role}</div>
                </div>
                <span className="text-xs bg-secondary text-muted-foreground px-2 py-1 rounded-md whitespace-nowrap ml-2">
                  {review.project}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
