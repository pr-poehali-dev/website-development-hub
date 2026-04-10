const links = [
  { label: 'Услуги', href: '#services' },
  { label: 'Портфолио', href: '#portfolio' },
  { label: 'Цены', href: '#pricing' },
  { label: 'Этапы работы', href: '#process' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Контакты', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-10">
          <div>
            <div className="font-bold text-xl mb-2">
              Веб<span className="text-[hsl(var(--accent))]">мастер</span>
            </div>
            <p className="text-primary-foreground/60 text-sm max-w-xs">
              Разработка сайтов и функционала под ключ. Быстро, чисто, с гарантией.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Веб-разработчик. Все права защищены.
          </p>
          <a
            href="#hero"
            className="text-xs text-primary-foreground/40 hover:text-primary-foreground transition-colors"
          >
            Наверх ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
