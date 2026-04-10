export interface NavChild {
  label: string;
  href: string;
  desc?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export const navItems: NavItem[] = [
  {
    label: 'Главная',
    href: '/',
    children: [
      { label: 'Задать вопрос', href: '/#contact' },
      { label: 'Чем я занимаюсь?', href: '/#services' },
      { label: 'Примеры работ', href: '/#portfolio' },
      { label: 'Цены', href: '/#pricing' },
      { label: 'Этапы работы', href: '/#process' },
      { label: 'Отзывы', href: '/#reviews' },
      { label: 'Контакты', href: '/#contact' },
    ],
  },
  {
    label: 'Создание сайтов',
    href: '/sozdanie-saytov',
    children: [
      { label: 'Сайт-визитка', href: '/sozdanie-saytov/sayt-vizitka', desc: 'Профессиональная визитка онлайн' },
      { label: 'Корпоративный сайт', href: '/sozdanie-saytov/korporativnyy-sayt', desc: 'Представительный сайт компании' },
      { label: 'Интернет-магазин', href: '/sozdanie-saytov/internet-magazin', desc: 'Продажи через интернет' },
      { label: 'Одностраничный сайт', href: '/sozdanie-saytov/odnostranicnyy-sayt', desc: 'Лендинг для продвижения' },
      { label: 'Верстка по макету', href: '/sozdanie-saytov/verstka-po-maketu', desc: 'Pixel-perfect из Figma / PSD' },
      { label: 'Перенос сайта', href: '/sozdanie-saytov/perenos-sayta', desc: 'Миграция без потери данных' },
      { label: 'Правка сайта', href: '/sozdanie-saytov/pravka-sayta', desc: 'Исправления и доработки' },
      { label: 'Ускорение сайтов', href: '/sozdanie-saytov/uskorenie-saytov', desc: 'Оптимизация скорости загрузки' },
    ],
  },
  {
    label: 'Разработка функционала',
    href: '/razrabotka-funkcionala',
    children: [
      { label: 'Конструктор / конфигуратор', href: '/razrabotka-funkcionala/konfigurator', desc: 'Интерактивный подбор продукта' },
      { label: 'Пошаговые формы / квизы', href: '/razrabotka-funkcionala/kvizy', desc: 'Захват лидов через опросы' },
      { label: 'Карты / маршрутизация', href: '/razrabotka-funkcionala/karty', desc: 'Яндекс.Карты и Google Maps' },
      { label: 'Написание скриптов', href: '/razrabotka-funkcionala/skripty', desc: 'JS-скрипты под любую задачу' },
      { label: 'Анимация для сайта', href: '/razrabotka-funkcionala/animaciya', desc: 'CSS и JS анимации' },
      { label: 'Бронирование', href: '/razrabotka-funkcionala/bronirovanie', desc: 'Онлайн-запись с календарём' },
      { label: 'Калькулятор', href: '/razrabotka-funkcionala/kalkulyator', desc: 'Расчёт стоимости онлайн' },
      { label: 'Геолокация', href: '/razrabotka-funkcionala/geolokaciya', desc: 'Определение города и маршрутов' },
      { label: 'Корзина', href: '/razrabotka-funkcionala/korzina', desc: 'Добавление и оформление заказов' },
      { label: 'Галерея', href: '/razrabotka-funkcionala/galereya', desc: 'Адаптивные галереи с лайтбоксом' },
      { label: 'Фильтры', href: '/razrabotka-funkcionala/filtry', desc: 'Умная фильтрация каталога' },
      { label: 'Прайс', href: '/razrabotka-funkcionala/prajs', desc: 'Таблица цен с поиском' },
      { label: 'Виджеты', href: '/razrabotka-funkcionala/vidzhety', desc: 'Чат, звонок и другие виджеты' },
    ],
  },
  {
    label: 'Интеграции',
    href: '/integracii',
    children: [
      { label: 'Telegram / мессенджеры', href: '/integracii/telegram', desc: 'Уведомления и боты' },
      { label: 'CRM', href: '/integracii/crm', desc: 'amoCRM, Bitrix24 и другие' },
      { label: 'Онлайн оплата', href: '/integracii/oplata', desc: 'ЮКасса, Тинькофф, Сбербанк' },
      { label: 'Google таблицы', href: '/integracii/google-tablicy', desc: 'Автозапись заявок в таблицы' },
      { label: 'SMS оповещение', href: '/integracii/sms', desc: 'SMSC, SMS.ru и другие' },
      { label: 'Сервисы по API', href: '/integracii/api', desc: 'Любой сервис с API' },
    ],
  },
  {
    label: 'Другое',
    href: '/drugoe',
    children: [
      { label: 'Oxygen', href: '/drugoe/oxygen', desc: 'Разработка на Oxygen Builder' },
      { label: 'Bricks', href: '/drugoe/bricks', desc: 'Сайты на Bricks Builder' },
      { label: 'Breakdance', href: '/drugoe/breakdance', desc: 'Разработка на Breakdance' },
      { label: 'Adobe Muse', href: '/drugoe/adobe-muse', desc: 'Поддержка сайтов Adobe Muse' },
    ],
  },
];
