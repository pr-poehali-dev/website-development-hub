import CategoryPage from '@/pages/CategoryPage';
import { getServicesByCategory } from '@/data/services-content';

export default function Drugoe() {
  return (
    <CategoryPage
      title="Другое"
      subtitle="Разработка на Oxygen, Bricks, Breakdance и поддержка сайтов Adobe Muse."
      icon="MoreHorizontal"
      href="/drugoe"
      services={getServicesByCategory('/drugoe')}
    />
  );
}
