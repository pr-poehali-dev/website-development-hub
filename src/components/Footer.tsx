import { Link, useLocation } from 'react-router-dom';
import { navItems } from '@/data/nav';

export default function Footer() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <footer className="bg-primary text-primary-foreground py-14 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo col */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link to="/" className="font-bold text-xl inline-block mb-3">
              Веб<span className="text-[hsl(var(--accent))]">мастер</span>
            </Link>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Разработка сайтов и функционала под ключ. Быстро, чисто, с гарантией.
            </p>
          </div>

          {/* Nav columns */}
          {navItems.slice(1).map((section) => (
            <div key={section.label}>
              <Link
                to={section.href}
                className="text-sm font-semibold text-primary-foreground mb-3 block hover:text-primary-foreground/80 transition-colors"
              >
                {section.label}
              </Link>
              <ul className="space-y-1.5">
                {section.children?.map((child) => (
                  <li key={child.href}>
                    <Link
                      to={child.href}
                      className="text-xs text-primary-foreground/50 hover:text-primary-foreground/90 transition-colors"
                    >
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Веб-разработчик. Все права защищены.
          </p>
          {isHome ? (
            <a href="#hero" className="text-xs text-primary-foreground/40 hover:text-primary-foreground transition-colors">
              Наверх ↑
            </a>
          ) : (
            <Link to="/" className="text-xs text-primary-foreground/40 hover:text-primary-foreground transition-colors">
              На главную
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
}
