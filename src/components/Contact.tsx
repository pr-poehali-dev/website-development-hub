import { useState } from 'react';
import Icon from '@/components/ui/icon';

const contacts = [
  { icon: 'MessageCircle', label: 'Telegram', value: '@username', href: 'https://t.me/username' },
  { icon: 'Phone', label: 'WhatsApp', value: '+7 (999) 000-00-00', href: 'https://wa.me/79990000000' },
  { icon: 'Mail', label: 'Email', value: 'hello@example.com', href: 'mailto:hello@example.com' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', contact: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <div className="text-sm font-medium text-[hsl(var(--accent))] mb-2">Контакты</div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Обсудим проект?</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Опишите задачу — отвечу в течение 30 минут в рабочее время. Первая консультация бесплатно.
            </p>

            <div className="space-y-4 mb-8">
              {contacts.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-border hover:shadow-sm transition-shadow group"
                >
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Icon name={c.icon} size={18} className="text-foreground group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{c.label}</div>
                    <div className="font-medium text-foreground text-sm">{c.value}</div>
                  </div>
                  <Icon name="ArrowUpRight" size={16} className="ml-auto text-muted-foreground group-hover:text-foreground transition-colors" />
                </a>
              ))}
            </div>

            <div className="p-4 bg-secondary rounded-xl">
              <div className="text-sm font-medium text-foreground mb-1">График работы</div>
              <div className="text-sm text-muted-foreground">Пн–Пт: 9:00–19:00 · Сб: 10:00–16:00</div>
            </div>
          </div>

          <div>
            {sent ? (
              <div className="bg-white rounded-2xl border border-border p-8 text-center">
                <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Check" size={24} className="text-green-600" />
                </div>
                <h3 className="font-semibold text-foreground text-lg mb-2">Заявка отправлена!</h3>
                <p className="text-muted-foreground text-sm">Отвечу в ближайшее рабочее время.</p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', contact: '', message: '' }); }}
                  className="mt-5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Отправить ещё раз
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-border p-6 space-y-4"
              >
                <h3 className="font-semibold text-foreground mb-1">Оставьте заявку</h3>
                <p className="text-sm text-muted-foreground mb-4">Опишите задачу, и я вернусь с оценкой</p>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Ваше имя</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Иван Иванов"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Telegram / телефон</label>
                  <input
                    type="text"
                    required
                    value={form.contact}
                    onChange={(e) => setForm({ ...form, contact: e.target.value })}
                    placeholder="@username или +7 (999) 000-00-00"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Опишите задачу</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Что нужно сделать? Есть ли дедлайн? Какой примерный бюджет?"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  Отправить заявку
                  <Icon name="ArrowRight" size={15} />
                </button>

                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
