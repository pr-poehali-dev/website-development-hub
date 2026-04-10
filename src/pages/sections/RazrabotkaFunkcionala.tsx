import CategoryPage from '@/pages/CategoryPage';
import { getServicesByCategory } from '@/data/services-content';

export default function RazrabotkaFunkcionala() {
  return (
    <CategoryPage
      title="Разработка функционала"
      subtitle="Квизы, калькуляторы, карты, фильтры, корзины и другие интерактивные инструменты для вашего сайта."
      icon="Settings"
      href="/razrabotka-funkcionala"
      services={getServicesByCategory('/razrabotka-funkcionala')}
    />
  );
}
