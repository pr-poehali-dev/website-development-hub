import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { navItems } from '@/data/nav';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [location.pathname]);

  const openDropdown = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(label);
  };

  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen ? 'bg-white shadow-sm' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl text-foreground tracking-tight flex-shrink-0">
          Веб<span className="text-[hsl(var(--accent))]">мастер</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => openDropdown(item.label)}
              onMouseLeave={closeDropdown}
            >
              <Link
                to={item.href}
                className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-foreground bg-secondary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
                }`}
              >
                {item.label}
                {item.children && (
                  <Icon
                    name="ChevronDown"
                    size={13}
                    className={`transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`}
                  />
                )}
              </Link>

              {item.children && activeDropdown === item.label && (
                <div
                  className="absolute top-full left-0 pt-1 z-50"
                  onMouseEnter={() => openDropdown(item.label)}
                  onMouseLeave={closeDropdown}
                >
                  <div
                    className={`bg-white rounded-xl shadow-lg border border-border py-2 animate-fade-in ${
                      item.children.length > 6 ? 'grid grid-cols-2 gap-x-2 min-w-[480px]' : 'min-w-[240px]'
                    }`}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        className="flex flex-col px-4 py-2.5 hover:bg-secondary transition-colors rounded-lg mx-1"
                      >
                        <span className="text-sm font-medium text-foreground">{child.label}</span>
                        {child.desc && (
                          <span className="text-xs text-muted-foreground mt-0.5">{child.desc}</span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <Link
          to="/#contact"
          className="hidden lg:inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity flex-shrink-0"
        >
          Обсудить проект
        </Link>

        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <Icon name={mobileOpen ? 'X' : 'Menu'} size={22} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border max-h-[80vh] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-border last:border-0">
              <button
                onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                className="w-full flex items-center justify-between px-4 py-3.5 text-sm font-medium text-foreground"
              >
                <span>{item.label}</span>
                {item.children && (
                  <Icon
                    name="ChevronDown"
                    size={15}
                    className={`text-muted-foreground transition-transform duration-200 ${
                      mobileExpanded === item.label ? 'rotate-180' : ''
                    }`}
                  />
                )}
              </button>

              {item.children && mobileExpanded === item.label && (
                <div className="bg-secondary/50 px-4 pb-3 grid grid-cols-1 gap-1">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      to={child.href}
                      className="py-2 px-3 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-white transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="p-4">
            <Link
              to="/#contact"
              className="block text-center bg-primary text-primary-foreground px-4 py-2.5 rounded-lg text-sm font-medium"
            >
              Обсудить проект
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
