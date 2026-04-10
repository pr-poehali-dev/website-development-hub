import CategoryPage from '@/pages/CategoryPage';
import { getServicesByCategory } from '@/data/services-content';

export default function SozdanieSaytov() {
  return (
    <CategoryPage
      title="Создание сайтов"
      subtitle="Разработка сайтов любой сложности: от визитки до интернет-магазина. Работаю на WordPress, React и других платформах."
      icon="Globe"
      href="/sozdanie-saytov"
      services={getServicesByCategory('/sozdanie-saytov')}
    />
  );
}
