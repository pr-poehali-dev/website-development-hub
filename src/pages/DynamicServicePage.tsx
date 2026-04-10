import { useParams, Navigate } from 'react-router-dom';
import { getServiceBySlug, getServicesByCategory } from '@/data/services-content';
import ServicePage from '@/pages/ServicePage';

interface Props {
  categoryHref: string;
}

export default function DynamicServicePage({ categoryHref }: Props) {
  const { slug } = useParams<{ slug: string }>();
  if (!slug) return <Navigate to={categoryHref} replace />;

  const service = getServiceBySlug(slug);
  if (!service || service.categoryHref !== categoryHref) return <Navigate to={categoryHref} replace />;

  const related = getServicesByCategory(categoryHref)
    .filter((s) => s.slug !== slug)
    .map((s) => ({ label: s.title, href: `${s.categoryHref}/${s.slug}` }));

  return <ServicePage service={service} relatedServices={related} />;
}
