import { stats } from "@/data/site";

export function StatsStrip() {
  return (
    <section className="stats-strip">
      <div className="site-shell">
        <div className="stats-grid">
          {stats.map((item) => (
            <article key={item.label} className="stat-card surface-card">
              <span className="stat-value">{item.value}</span>
              <span className="stat-label">{item.label}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
