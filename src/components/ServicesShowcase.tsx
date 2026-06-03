'use client';

import DisplayLines from './DisplayLines';
import { useLanguage } from '@/contexts/LanguageContext';
import { getLogisticsSiteUrl } from '@/lib/site-links';

const serviceKeys = ['sales', 'pricing', 'capacity', 'intelligence'];

export default function ServicesShowcase() {
  const { t } = useLanguage();
  const logisticsUrl = getLogisticsSiteUrl();

  return (
    <section className="section-surface-obsidian section-spacing">
      <div className="container-wide">
        <div className="max-w-3xl mb-16">
          <p className="eyebrow mb-6">{t('home.services.eyebrow')}</p>
          <DisplayLines
            as="h2"
            lines={[t('home.services.titleLine1'), t('home.services.titleLine2')]}
            className="display-lg text-canvas-white mb-8"
          />
          <p className="body-lg text-canvas-white/75 max-w-2xl">
            {t('home.services.lead')}
          </p>
        </div>

        <div className="feature-stack max-w-4xl">
          {serviceKeys.map((key) => (
            <div key={key} className="feature-stack-item">
              <h3 className="headline text-canvas-white mb-2">{t(`home.services.items.${key}.name`)}</h3>
              <p className="caption text-canvas-white/50 mb-4">{t(`home.services.items.${key}.tagline`)}</p>
              <p className="body-default text-canvas-white/75">{t(`home.services.items.${key}.description`)}</p>
            </div>
          ))}
        </div>

        {/* Cross-promo to the sister integrated-logistics site. Link is dormant
            until NEXT_PUBLIC_LOGISTICS_SITE_URL is set; the text always shows. */}
        <div className="mt-16 pt-10 border-t border-canvas-white/15 max-w-4xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="body-default text-canvas-white/60 max-w-xl">
            <span className="text-canvas-white/90 font-medium">{t('home.services.logistics.label')}</span>{' '}
            {t('home.services.logistics.body')}
          </p>
          {logisticsUrl && (
            <a
              href={logisticsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="caption font-bold text-canvas-white/70 hover:text-canvas-white transition-colors whitespace-nowrap"
            >
              {t('home.services.logistics.cta')} ↗
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
