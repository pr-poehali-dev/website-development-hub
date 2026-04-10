import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import type { ServiceContent } from '@/data/services-content';
import Contact from '@/components/Contact';

interface Props {
  service: ServiceContent;
  relatedServices?: { label: string; href: string }[];
}

export default function ServicePage({ service, relatedServices }: Props) {
  return (
    <div className="pt-16">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-2 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors">Главная</Link>
          <Icon name="ChevronRight" size={14} />
          <Link to={service.categoryHref} className="hover:text-foreground transition-colors">{service.category}</Link>
          <Icon name="ChevronRight" size={14} />
          <span className="text-foreground">{service.title}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-white section-padding border-b border-border">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-3 py-1.5 rounded-full text-sm font-medium mb-4">
                <Icon name={service.icon} fallback="Circle" size={14} />
                {service.category}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{service.title}</h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{service.subtitle}</p>
              <p className="text-foreground leading-relaxed mb-8">{service.description}</p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#contact-section"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  Заказать
                  <Icon name="ArrowRight" size={16} />
                </a>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Icon name="Banknote" size={15} />
                    <span className="font-semibold text-foreground">{service.price}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Icon name="Clock" size={15} />
                    <span>{service.duration}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background rounded-2xl border border-border p-6">
              <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">Что входит</div>
              <div className="space-y-4">
                {service.includes.map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={13} className="text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-foreground text-sm">{item.title}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-background">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-foreground mb-8">Особенности</h2>
          <div className="flex flex-wrap gap-3">
            {service.features.map((f) => (
              <div
                key={f}
                className="inline-flex items-center gap-2 bg-white border border-border px-4 py-2.5 rounded-xl text-sm font-medium text-foreground"
              >
                <Icon name="CheckCircle" size={15} className="text-[hsl(var(--accent))]" />
                {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {service.faq.length > 0 && (
        <section className="section-padding bg-white border-t border-border">
          <div className="container-max max-w-3xl">
            <h2 className="text-2xl font-bold text-foreground mb-8">Частые вопросы</h2>
            <div className="space-y-4">
              {service.faq.map((item) => (
                <div key={item.q} className="bg-background rounded-xl border border-border p-5">
                  <div className="font-semibold text-foreground mb-2">{item.q}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{item.a}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related services */}
      {relatedServices && relatedServices.length > 0 && (
        <section className="section-padding bg-background border-t border-border">
          <div className="container-max">
            <h2 className="text-2xl font-bold text-foreground mb-6">Другие услуги раздела</h2>
            <div className="flex flex-wrap gap-3">
              {relatedServices.map((s) => (
                <Link
                  key={s.href}
                  to={s.href}
                  className="inline-flex items-center gap-2 bg-white border border-border px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:border-primary transition-all"
                >
                  {s.label}
                  <Icon name="ArrowRight" size={13} />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact */}
      <div id="contact-section">
        <Contact />
      </div>
    </div>
  );
}
