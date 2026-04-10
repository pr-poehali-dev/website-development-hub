import CategoryPage from '@/pages/CategoryPage';
import { getServicesByCategory } from '@/data/services-content';

export default function Integracii() {
  return (
    <CategoryPage
      title="Интеграции"
      subtitle="Подключение Telegram, CRM, онлайн-оплаты, Google Таблиц и других сервисов к вашему сайту."
      icon="Plug"
      href="/integracii"
      services={getServicesByCategory('/integracii')}
    />
  );
}
