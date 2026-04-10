export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  technologies: string[];
  image: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Интернет-магазин мебели',
    description: 'Полноценный магазин с каталогом, фильтрами, корзиной и оплатой через ЮКасса',
    category: 'Интернет-магазин',
    tags: ['Каталог', 'Корзина', 'Оплата', 'Фильтры'],
    technologies: ['WordPress', 'WooCommerce', 'PHP'],
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop',
  },
  {
    id: 2,
    title: 'Корпоративный сайт строительной компании',
    description: 'Многостраничный сайт с портфолио, услугами и формой расчёта стоимости',
    category: 'Корпоративный сайт',
    tags: ['Портфолио', 'Калькулятор', 'Формы'],
    technologies: ['WordPress', 'Oxygen', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop',
  },
  {
    id: 3,
    title: 'Квиз для подбора окон',
    description: 'Пошаговый конфигуратор для расчёта стоимости окон с отправкой заявки',
    category: 'Функционал',
    tags: ['Квиз', 'Калькулятор', 'Лиды'],
    technologies: ['JavaScript', 'CSS', 'PHP'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
  },
  {
    id: 4,
    title: 'Telegram-бот для салона красоты',
    description: 'Бот для записи на процедуры с уведомлениями и напоминаниями клиентам',
    category: 'Интеграция',
    tags: ['Telegram', 'Бронирование', 'Уведомления'],
    technologies: ['Python', 'Telegram API', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&h=400&fit=crop',
  },
  {
    id: 5,
    title: 'Landing page для курсов английского',
    description: 'Одностраничный сайт с анимациями, квизом и интеграцией с amoCRM',
    category: 'Лендинг',
    tags: ['Анимации', 'Квиз', 'CRM'],
    technologies: ['HTML', 'CSS', 'JavaScript', 'amoCRM'],
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop',
  },
  {
    id: 6,
    title: 'Карта сети автомоек',
    description: 'Интерактивная карта с геолокацией и построением маршрута до ближайшей точки',
    category: 'Функционал',
    tags: ['Карты', 'Геолокация', 'Маршруты'],
    technologies: ['JavaScript', 'Яндекс.Карты', 'PHP'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
  },
  {
    id: 7,
    title: 'Сайт-визитка юриста',
    description: 'Строгий профессиональный сайт с онлайн-консультацией и расписанием',
    category: 'Сайт-визитка',
    tags: ['Визитка', 'Бронирование', 'Формы'],
    technologies: ['WordPress', 'Bricks', 'PHP'],
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop',
  },
  {
    id: 8,
    title: 'Платёжная форма с рассрочкой',
    description: 'Интеграция оплаты Тинькофф с калькулятором рассрочки и CRM',
    category: 'Интеграция',
    tags: ['Оплата', 'Калькулятор', 'CRM'],
    technologies: ['PHP', 'JavaScript', 'Tinkoff API'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
  },
  {
    id: 9,
    title: 'Галерея работ с фильтрацией',
    description: 'Адаптивная галерея с плавной фильтрацией по категориям и лайтбоксом',
    category: 'Функционал',
    tags: ['Галерея', 'Фильтры', 'Анимации'],
    technologies: ['JavaScript', 'CSS', 'WordPress'],
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&h=400&fit=crop',
  },
];

export const allCategories = ['Все', ...Array.from(new Set(projects.map((p) => p.category)))];
export const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));
export const allTechnologies = Array.from(new Set(projects.flatMap((p) => p.technologies)));
