import { useState, useMemo } from 'react';
import Icon from '@/components/ui/icon';
import { projects, allCategories, allTags, allTechnologies } from '@/data/portfolio';

type FilterType = 'category' | 'tag' | 'tech';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Все');
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [activeTechs, setActiveTechs] = useState<string[]>([]);
  const [showMoreTags, setShowMoreTags] = useState(false);
  const [showMoreTechs, setShowMoreTechs] = useState(false);

  const toggleFilter = (value: string, type: FilterType) => {
    if (type === 'category') {
      setActiveCategory(value);
    } else if (type === 'tag') {
      setActiveTags((prev) =>
        prev.includes(value) ? prev.filter((t) => t !== value) : [...prev, value]
      );
    } else {
      setActiveTechs((prev) =>
        prev.includes(value) ? prev.filter((t) => t !== value) : [...prev, value]
      );
    }
  };

  const clearFilters = () => {
    setActiveCategory('Все');
    setActiveTags([]);
    setActiveTechs([]);
  };

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const catMatch = activeCategory === 'Все' || p.category === activeCategory;
      const tagMatch = activeTags.length === 0 || activeTags.some((t) => p.tags.includes(t));
      const techMatch = activeTechs.length === 0 || activeTechs.some((t) => p.technologies.includes(t));
      return catMatch && tagMatch && techMatch;
    });
  }, [activeCategory, activeTags, activeTechs]);

  const hasFilters = activeCategory !== 'Все' || activeTags.length > 0 || activeTechs.length > 0;

  const visibleTags = showMoreTags ? allTags : allTags.slice(0, 8);
  const visibleTechs = showMoreTechs ? allTechnologies : allTechnologies.slice(0, 8);

  return (
    <section id="portfolio" className="section-padding bg-background">
      <div className="container-max">
        <div className="mb-10">
          <div className="text-sm font-medium text-[hsl(var(--accent))] mb-2">Портфолио</div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Примеры работ</h2>
          <p className="text-muted-foreground">Фильтруйте по категории, тегам или технологиям</p>
        </div>

        <div className="bg-white rounded-2xl border border-border p-5 mb-8 space-y-5">
          <div>
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Категория</div>
            <div className="flex flex-wrap gap-2">
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => toggleFilter(cat, 'category')}
                  className={`tag-pill ${activeCategory === cat ? 'active' : ''}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Теги</div>
            <div className="flex flex-wrap gap-2">
              {visibleTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleFilter(tag, 'tag')}
                  className={`tag-pill ${activeTags.includes(tag) ? 'active' : ''}`}
                >
                  {tag}
                </button>
              ))}
              {allTags.length > 8 && (
                <button
                  onClick={() => setShowMoreTags(!showMoreTags)}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors px-2"
                >
                  {showMoreTags ? 'Скрыть' : `+${allTags.length - 8} ещё`}
                </button>
              )}
            </div>
          </div>

          <div className="border-t border-border pt-5">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Технологии</div>
            <div className="flex flex-wrap gap-2">
              {visibleTechs.map((tech) => (
                <button
                  key={tech}
                  onClick={() => toggleFilter(tech, 'tech')}
                  className={`tag-pill ${activeTechs.includes(tech) ? 'active' : ''}`}
                >
                  {tech}
                </button>
              ))}
              {allTechnologies.length > 8 && (
                <button
                  onClick={() => setShowMoreTechs(!showMoreTechs)}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors px-2"
                >
                  {showMoreTechs ? 'Скрыть' : `+${allTechnologies.length - 8} ещё`}
                </button>
              )}
            </div>
          </div>

          {hasFilters && (
            <div className="border-t border-border pt-4 flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Найдено: <strong className="text-foreground">{filtered.length}</strong> из {projects.length}
              </span>
              <button
                onClick={clearFilters}
                className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors"
              >
                <Icon name="X" size={14} />
                Сбросить фильтры
              </button>
            </div>
          )}
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">
            <Icon name="SearchX" size={40} className="mx-auto mb-4 opacity-30" />
            <p>Ничего не найдено. Попробуйте изменить фильтры.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden border border-border card-hover group"
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-foreground text-xs font-medium px-2.5 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-secondary text-muted-foreground px-2 py-0.5 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs bg-primary/5 text-foreground px-2 py-0.5 rounded-md font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
