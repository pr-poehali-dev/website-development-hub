import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import type { ServiceContent } from '@/data/services-content';
import Contact from '@/components/Contact';

interface Props {
  title: string;
  subtitle: string;
  icon: string;
  href: string;
  services: ServiceContent[];
}

export default function CategoryPage({ title, subtitle, icon, services }: Props) {
  return (
    <div className="pt-16">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Главная</Link>
          <Icon name="ChevronRight" size={14} />
          <span className="text-foreground">{title}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-white section-padding border-b border-border">
        <div className="container-max">
          <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full text-sm font-medium mb-4">
            <Icon name={icon} fallback="Circle" size={14} />
            {services.length} услуг
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{title}</h1>
          <p className="text-lg text-muted-foreground max-w-xl">{subtitle}</p>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service) => (
              <Link
                key={service.slug}
                to={`${service.categoryHref}/${service.slug}`}
                className="bg-white rounded-2xl border border-border p-6 card-hover group"
              >
                <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <Icon name={service.icon} fallback="Circle" size={18} className="text-foreground group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">{service.subtitle}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold text-foreground">{service.price}</span>
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Icon name="Clock" size={12} />
                    {service.duration}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Contact />
    </div>
  );
}
