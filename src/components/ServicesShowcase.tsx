import DisplayLines from './DisplayLines';
import { getTranslations } from 'next-intl/server';
import { getLogisticsSiteUrl } from '@/lib/site-links';

const serviceKeys = ['sales', 'pricing', 'capacity', 'intelligence'];

export default async function ServicesShowcase() {
  const t = await getTranslations('home.services');
  const logisticsUrl = getLogisticsSiteUrl();

  return (
    <section className="section-surface-obsidian section-spacing">
      <div className="container-wide">
        <div className="max-w-3xl mb-16">
          <p className="eyebrow mb-6">{t('eyebrow')}</p>
          <DisplayLines
            as="h2"
            lines={[t('titleLine1'), t('titleLine2')]}
            className="display-lg text-canvas-white mb-8"
          />
          <p className="body-lg text-canvas-white/75 max-w-2xl">
            {t('lead')}
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-start">
          <div className="feature-stack max-w-4xl">
            {serviceKeys.map((key) => (
              <div key={key} className="feature-stack-item">
                <h3 className="headline text-canvas-white mb-2">{t(`items.${key}.name`)}</h3>
                <p className="caption text-canvas-white/50 mb-4">{t(`items.${key}.tagline`)}</p>
                <p className="body-default text-canvas-white/75">{t(`items.${key}.description`)}</p>
              </div>
            ))}
          </div>

          <aside
            aria-label="GSSA commercial operating rhythm"
            className="rounded-[32px] border border-canvas-white/15 bg-canvas-white/[0.06] p-6 shadow-2xl shadow-obsidian/30"
          >
            <p className="caption text-canvas-white/45">COMMERCIAL RHYTHM</p>
            <div className="mt-6 grid gap-4">
              {[
                ['01', 'Sales pipeline'],
                ['02', 'Yield decision'],
                ['03', 'Space control'],
                ['04', 'HQ reporting'],
              ].map(([step, label]) => (
                <div key={step} className="flex items-center justify-between rounded-2xl border border-canvas-white/10 bg-obsidian/55 px-4 py-3">
                  <span className="caption text-desert-sienna">{step}</span>
                  <span className="text-sm font-bold text-canvas-white/85">{label}</span>
                </div>
              ))}
            </div>
            <p className="body-sm mt-7 text-canvas-white/60">
              Carrier-first governance keeps sales activity, pricing discipline, and capacity visibility in one premium mandate.
            </p>
          </aside>
        </div>

        {/* Cross-promo to the sister integrated-logistics site. Link is dormant
            until NEXT_PUBLIC_LOGISTICS_SITE_URL is set; the text always shows. */}
        <div className="mt-16 pt-10 border-t border-canvas-white/15 max-w-4xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="body-default text-canvas-white/60 max-w-xl">
            <span className="text-canvas-white/90 font-medium">{t('logistics.label')}</span>{' '}
            {t('logistics.body')}
          </p>
          {logisticsUrl && (
            <a
              href={logisticsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="caption font-bold text-canvas-white/70 hover:text-canvas-white transition-colors whitespace-nowrap"
            >
              {t('logistics.cta')} ↗
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
