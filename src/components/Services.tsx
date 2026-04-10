import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const categories = [
  {
    id: 'websites',
    title: 'Создание сайтов',
    icon: 'Globe',
    href: '/sozdanie-saytov',
    services: [
      { name: 'Сайт-визитка', desc: 'Представительный сайт для специалиста или небольшой компании', price: 'от 5 000 ₽', slug: 'sayt-vizitka' },
      { name: 'Корпоративный сайт', desc: 'Многостраничный сайт с полным функционалом для бизнеса', price: 'от 20 000 ₽', slug: 'korporativnyy-sayt' },
      { name: 'Интернет-магазин', desc: 'Полноценный магазин с каталогом, корзиной и оплатой', price: 'от 30 000 ₽', slug: 'internet-magazin' },
      { name: 'Одностраничный сайт', desc: 'Landing page для продвижения продукта или услуги', price: 'от 8 000 ₽', slug: 'odnostranicnyy-sayt' },
      { name: 'Верстка по макету', desc: 'Точная вёрстка из Figma, Adobe XD или PSD', price: 'от 5 000 ₽', slug: 'verstka-po-maketu' },
      { name: 'Перенос сайта', desc: 'Миграция на новый хостинг без потери данных', price: 'от 3 000 ₽', slug: 'perenos-sayta' },
      { name: 'Правка сайта', desc: 'Внесение изменений и улучшений на существующем сайте', price: 'от 1 000 ₽', slug: 'pravka-sayta' },
      { name: 'Ускорение сайтов', desc: 'Оптимизация скорости загрузки и PageSpeed', price: 'от 5 000 ₽', slug: 'uskorenie-saytov' },
    ],
  },
  {
    id: 'features',
    title: 'Разработка функционала',
    icon: 'Settings',
    href: '/razrabotka-funkcionala',
    services: [
      { name: 'Конструктор / конфигуратор', desc: 'Интерактивный инструмент для подбора продукта', price: 'от 15 000 ₽', slug: 'konfigurator' },
      { name: 'Пошаговые формы / квизы', desc: 'Многошаговые опросы для захвата лидов', price: 'от 8 000 ₽', slug: 'kvizy' },
      { name: 'Карты / маршрутизация', desc: 'Интеграция Яндекс.Карт, Google Maps с маршрутами', price: 'от 6 000 ₽', slug: 'karty' },
      { name: 'Написание скриптов', desc: 'JS-скрипты под любую задачу на сайте', price: 'от 2 000 ₽', slug: 'skripty' },
      { name: 'Анимация для сайта', desc: 'CSS и JS анимации, scroll-эффекты', price: 'от 4 000 ₽', slug: 'animaciya' },
      { name: 'Бронирование', desc: 'Система онлайн-записи и бронирования с календарём', price: 'от 12 000 ₽', slug: 'bronirovanie' },
      { name: 'Калькулятор', desc: 'Онлайн-калькулятор для расчёта стоимости', price: 'от 5 000 ₽', slug: 'kalkulyator' },
      { name: 'Геолокация', desc: 'Определение города, ближайших объектов', price: 'от 5 000 ₽', slug: 'geolokaciya' },
      { name: 'Корзина', desc: 'Функциональная корзина товаров с оформлением заказа', price: 'от 8 000 ₽', slug: 'korzina' },
      { name: 'Галерея', desc: 'Адаптивные галереи с лайтбоксом и фильтрацией', price: 'от 4 000 ₽', slug: 'galereya' },
      { name: 'Фильтры', desc: 'Умная фильтрация каталога по категориям', price: 'от 6 000 ₽', slug: 'filtry' },
      { name: 'Прайс', desc: 'Удобная таблица цен с сортировкой и поиском', price: 'от 3 000 ₽', slug: 'prajs' },
      { name: 'Виджеты', desc: 'Чат, обратный звонок и другие виджеты', price: 'от 3 000 ₽', slug: 'vidzhety' },
    ],
  },
  {
    id: 'integrations',
    title: 'Интеграции',
    icon: 'Plug',
    href: '/integracii',
    services: [
      { name: 'Telegram / мессенджеры', desc: 'Уведомления в Telegram, боты для обработки заявок', price: 'от 5 000 ₽', slug: 'telegram' },
      { name: 'CRM', desc: 'Интеграция с amoCRM, Bitrix24 и другими', price: 'от 8 000 ₽', slug: 'crm' },
      { name: 'Онлайн оплата', desc: 'Подключение ЮКасса, Тинькофф, Сбербанк', price: 'от 8 000 ₽', slug: 'oplata' },
      { name: 'Google таблицы', desc: 'Автоматическая запись заявок в таблицы', price: 'от 4 000 ₽', slug: 'google-tablicy' },
      { name: 'SMS оповещение', desc: 'Отправка SMS через SMSC, SMS.ru', price: 'от 4 000 ₽', slug: 'sms' },
      { name: 'Сервисы по API', desc: 'Интеграция с любым сервисом, имеющим API', price: 'от 6 000 ₽', slug: 'api' },
    ],
  },
  {
    id: 'other',
    title: 'Другое',
    icon: 'MoreHorizontal',
    href: '/drugoe',
    services: [
      { name: 'Oxygen Builder', desc: 'Разработка и правка сайтов на Oxygen Builder', price: 'от 5 000 ₽', slug: 'oxygen' },
      { name: 'Bricks Builder', desc: 'Создание сайтов и шаблонов на Bricks Builder', price: 'от 5 000 ₽', slug: 'bricks' },
      { name: 'Breakdance', desc: 'Разработка на Breakdance для WordPress', price: 'от 5 000 ₽', slug: 'breakdance' },
      { name: 'Adobe Muse', desc: 'Поддержка и доработка сайтов Adobe Muse', price: 'от 3 000 ₽', slug: 'adobe-muse' },
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
            <Link
              key={service.slug}
              to={`${current.href}/${service.slug}`}
              className="bg-background rounded-xl p-5 border border-border card-hover group cursor-pointer"
            >
              <h3 className="font-semibold text-foreground mb-2 text-sm group-hover:text-primary transition-colors">{service.name}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">{service.desc}</p>
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold text-foreground">{service.price}</div>
                <Icon name="ArrowRight" size={13} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6">
          <Link
            to={current.href}
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Все услуги раздела «{current.title}»
            <Icon name="ArrowRight" size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
