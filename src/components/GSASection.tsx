import { Link } from '@/navigation';
import { getTranslations } from 'next-intl/server';
import { GSA_PARTNERS } from '@/lib/constants/partners';

export default async function GSASection() {
  const t = await getTranslations('home.gsa');
  
  return (
    <section id="network" className="bg-canvas section-spacing">
      <div className="container-wide">
        <div className="max-w-4xl mb-16">
          <p className="eyebrow mb-6">{t('eyebrow')}</p>
          <h2 className="display-lg text-ink mb-6">{t('title')}</h2>
          <p className="body-lg text-muted">
            {t('lead')}
          </p>
        </div>

        <div className="panel-bordered grid grid-cols-2 md:grid-cols-4 gap-px bg-hairline">
          {GSA_PARTNERS.map((partner) => (
            <div
              key={partner.code}
              className="bg-canvas p-8 flex flex-col justify-center items-center text-center min-h-[160px] group hover:bg-surface-soft transition-colors"
            >
              <span className="card-title mb-2 group-hover:scale-105 transition-transform">
                {partner.code}
              </span>
              <span className="caption text-muted">{partner.name} ({partner.type})</span>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <Link href="#contact" className="btn-pill-primary">
            {t('cta')}
          </Link>
        </div>
      </div>
    </section>
  );
}
