import { useState } from 'react';
import Icon from '@/components/ui/icon';

const categories = [
  {
    id: 'websites',
    title: 'Создание сайтов',
    icon: 'Globe',
    color: 'bg-blue-50 text-blue-600',
    services: [
      { name: 'Сайт-визитка', desc: 'Представительный сайт для специалиста или небольшой компании', price: 'от 5 000 ₽' },
      { name: 'Корпоративный сайт', desc: 'Многостраничный сайт с полным функционалом для бизнеса', price: 'от 20 000 ₽' },
      { name: 'Интернет-магазин', desc: 'Полноценный магазин с каталогом, корзиной и оплатой', price: 'от 30 000 ₽' },
      { name: 'Одностраничный сайт', desc: 'Landing page для продвижения продукта или услуги', price: 'от 8 000 ₽' },
      { name: 'Вёрстка по макету', desc: 'Точная вёрстка из Figma, Adobe XD или PSD', price: 'от 5 000 ₽' },
      { name: 'Перенос сайта', desc: 'Миграция на новый хостинг или CMS без потери данных', price: 'от 3 000 ₽' },
      { name: 'Правка сайта', desc: 'Внесение изменений и улучшений на существующем сайте', price: 'от 1 000 ₽' },
      { name: 'Ускорение сайтов', desc: 'Оптимизация скорости загрузки и PageSpeed', price: 'от 5 000 ₽' },
    ],
  },
  {
    id: 'features',
    title: 'Разработка функционала',
    icon: 'Settings',
    color: 'bg-orange-50 text-orange-600',
    services: [
      { name: 'Конструктор / конфигуратор', desc: 'Интерактивный инструмент для подбора продукта', price: 'от 15 000 ₽' },
      { name: 'Пошаговые формы / квизы', desc: 'Многошаговые опросы для захвата лидов', price: 'от 8 000 ₽' },
      { name: 'Карты / маршрутизация', desc: 'Интеграция Яндекс.Карт, Google Maps с маршрутами', price: 'от 6 000 ₽' },
      { name: 'Написание скриптов', desc: 'JS-скрипты под любую задачу на сайте', price: 'от 2 000 ₽' },
      { name: 'Анимация для сайта', desc: 'CSS и JS анимации, scroll-эффекты, микровзаимодействия', price: 'от 4 000 ₽' },
      { name: 'Бронирование', desc: 'Система онлайн-записи и бронирования с календарём', price: 'от 12 000 ₽' },
      { name: 'Калькулятор', desc: 'Онлайн-калькулятор для расчёта стоимости или параметров', price: 'от 5 000 ₽' },
      { name: 'Геолокация', desc: 'Определение города, ближайших объектов, геофильтры', price: 'от 5 000 ₽' },
      { name: 'Корзина', desc: 'Функциональная корзина товаров с оформлением заказа', price: 'от 8 000 ₽' },
      { name: 'Галерея', desc: 'Адаптивные галереи с лайтбоксом и фильтрацией', price: 'от 4 000 ₽' },
      { name: 'Фильтры', desc: 'Умная фильтрация каталога по категориям и параметрам', price: 'от 6 000 ₽' },
      { name: 'Прайс', desc: 'Удобная таблица цен с сортировкой и поиском', price: 'от 3 000 ₽' },
      { name: 'Виджеты', desc: 'Чат, обратный звонок, онлайн-запись и другие виджеты', price: 'от 3 000 ₽' },
    ],
  },
  {
    id: 'integrations',
    title: 'Интеграции',
    icon: 'Plug',
    color: 'bg-green-50 text-green-600',
    services: [
      { name: 'Telegram / мессенджеры', desc: 'Уведомления в Telegram, боты для обработки заявок', price: 'от 5 000 ₽' },
      { name: 'CRM', desc: 'Интеграция с amoCRM, Bitrix24, RetailCRM и другими', price: 'от 8 000 ₽' },
      { name: 'Онлайн оплата', desc: 'Подключение ЮКасса, Сбербанк, Тинькофф, CloudPayments', price: 'от 8 000 ₽' },
      { name: 'Google таблицы', desc: 'Автоматическая запись заявок и данных в таблицы', price: 'от 4 000 ₽' },
      { name: 'SMS оповещение', desc: 'Отправка SMS через SMSC, SMS.ru и другие сервисы', price: 'от 4 000 ₽' },
      { name: 'Сервисы по API', desc: 'Интеграция с любым сервисом, имеющим API', price: 'от 6 000 ₽' },
    ],
  },
  {
    id: 'other',
    title: 'Другое',
    icon: 'MoreHorizontal',
    color: 'bg-purple-50 text-purple-600',
    services: [
      { name: 'Oxygen Builder', desc: 'Разработка и правка сайтов на Oxygen Builder', price: 'от 5 000 ₽' },
      { name: 'Bricks Builder', desc: 'Создание сайтов и шаблонов на Bricks Builder', price: 'от 5 000 ₽' },
      { name: 'Breakdance', desc: 'Разработка на Breakdance для WordPress', price: 'от 5 000 ₽' },
      { name: 'Adobe Muse', desc: 'Поддержка и доработка сайтов Adobe Muse', price: 'от 3 000 ₽' },
    ],
  },
];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('websites');

  const current = categories.find((c) => c.id === activeCategory)!;

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-max">
        <div className="mb-12">
          <div className="text-sm font-medium text-[hsl(var(--accent))] mb-2">Услуги</div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Чем я занимаюсь</h2>
          <p className="text-muted-foreground max-w-xl">
            Разработка под ключ — от простой правки до сложных интеграций. Работаю с популярными CMS и современными технологиями.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-border'
              }`}
            >
              <Icon name={cat.icon} fallback="Circle" size={15} />
              {cat.title}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {current.services.map((service) => (
            <div
              key={service.name}
              className="bg-background rounded-xl p-5 border border-border card-hover group cursor-pointer"
            >
              <h3 className="font-semibold text-foreground mb-2 text-sm">{service.name}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
              <div className="text-sm font-semibold text-foreground">{service.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}