'use client';

import { motion } from 'framer-motion';
import { Link } from '@/navigation';
import PageHeroBackground from '@/components/PageHeroBackground';
import DisplayLines from '@/components/DisplayLines';
import { useTranslations } from 'next-intl';
import { getLogisticsSiteUrl } from '@/lib/site-links';
import { getMenuHeroUnsplashImage } from '@/lib/unsplash';

const itemKeys = ['sales', 'pricing', 'capacity', 'intelligence'] as const;
const featureKeys = ['f1', 'f2', 'f3', 'f4'] as const;

export default function ServicesPage() {
  const t = useTranslations();
  const logisticsUrl = getLogisticsSiteUrl();
  const heroImage = getMenuHeroUnsplashImage('services');

  return (
    <main className="bg-canvas min-h-screen">
      {/* Page Hero */}
      <section className="page-hero with-menu-hero-bg">
        <PageHeroBackground image={heroImage} />
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl"
          >
            <span className="eyebrow mb-6">{t('servicesPage.hero.eyebrow')}</span>
            <h1 className="display-xl text-canvas-white mb-10 leading-[0.85] tracking-tighter">
              {t('servicesPage.hero.title')}
            </h1>
            <p className="body-lg text-canvas-white/78 max-w-2xl">
              {t('servicesPage.hero.lead')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick access */}
      <section className="py-6 bg-canvas border-b border-hairline sticky top-16 md:top-16 z-30 backdrop-blur-xl bg-canvas/80">
        <div className="container-wide flex flex-wrap gap-4 md:gap-8 items-center">
          <span className="eyebrow mr-4">{t('servicesPage.quickAccess')}</span>
          {itemKeys.map((key) => (
            <a key={key} href={`#${key}`} className="text-sm font-bold text-ink hover:text-muted transition-colors py-2">
              {t(`servicesPage.items.${key}.name`)}
            </a>
          ))}
        </div>
      </section>

      {/* Capability blocks */}
      <div className="section-spacing space-y-24 md:space-y-32">
        {itemKeys.map((key, index) => {
          const isDark = index % 2 === 1;
          const main = isDark ? 'text-canvas-white' : 'text-ink';
          const sub = isDark ? 'text-canvas-white/75' : 'text-muted';
          const border = isDark ? 'border-canvas-white/20' : 'border-hairline';
          const dot = isDark ? 'bg-canvas-white/50' : 'bg-ink/40';
          return (
            <section key={key} id={key} className="container-wide scroll-mt-32">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                className={`panel-bordered ${isDark ? 'section-surface-obsidian' : 'bg-canvas'}`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div className={`lg:col-span-7 p-10 md:p-16 lg:p-24 border-b lg:border-b-0 lg:border-r ${border} flex flex-col justify-between`}>
                    <div>
                      <div className="flex items-center gap-6 mb-16">
                        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border ${border} ${isDark ? 'bg-canvas-white/10' : 'bg-surface-soft'}`}>
                          <span className={`headline ${main} font-bold tabular-nums`}>{String(index + 1).padStart(2, '0')}</span>
                        </div>
                        <span className="eyebrow">{t(`servicesPage.items.${key}.name`)}</span>
                      </div>
                      <h2 className={`display-lg ${main} mb-8 leading-none tracking-tight`}>{t(`servicesPage.items.${key}.tagline`)}</h2>
                      <p className={`body-lg ${sub} mb-12 max-w-xl leading-relaxed`}>{t(`servicesPage.items.${key}.overview`)}</p>
                    </div>

                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 pt-16 border-t ${border}`}>
                      {featureKeys.map((fk) => (
                        <div key={fk} className="flex items-start gap-4">
                          <div className={`w-1.5 h-1.5 rounded-full ${dot} mt-2.5 flex-shrink-0`} />
                          <span className={`body-sm ${main} font-medium`}>{t(`servicesPage.items.${key}.features.${fk}`)}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`lg:col-span-5 p-10 md:p-16 lg:p-24 ${isDark ? 'bg-canvas-white/5' : 'bg-surface-soft'} flex flex-col justify-center`}>
                    <div className="flex items-center gap-3 mb-10">
                      <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-canvas-white' : 'bg-ink'}`} />
                      <span className="eyebrow">{t(`servicesPage.items.${key}.whyLabel`)}</span>
                    </div>
                    <p className={`headline-sm ${main} font-semibold leading-relaxed`}>
                      {t(`servicesPage.items.${key}.why`)}
                    </p>
                  </div>
                </div>
              </motion.div>
            </section>
          );
        })}
      </div>

      {/* CTA */}
      <section className="section-surface-obsidian section-spacing overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="container-wide text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <DisplayLines
              as="h2"
              lines={[t('servicesPage.cta.titleLine1'), t('servicesPage.cta.titleLine2')]}
              className="display-xl text-canvas-white mb-12 tracking-tighter leading-none"
            />
            <p className="body-lg text-canvas-white/75 mb-16 max-w-xl mx-auto">
              {t('servicesPage.cta.lead')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/#contact" className="btn-pill-primary w-full sm:w-auto text-lg py-5 px-10">
                {t('servicesPage.cta.primary')}
              </Link>
              <Link href="/company" className="text-canvas-white/60 hover:text-canvas-white transition-colors eyebrow">
                {t('servicesPage.cta.secondary')}
              </Link>
            </div>

            {/* Cross-promo to sister logistics site (link dormant until env set) */}
            <div className="mt-20 pt-10 border-t border-canvas-white/15 max-w-2xl mx-auto">
              <p className="body-sm text-canvas-white/55">
                <span className="text-canvas-white/85 font-medium">{t('servicesPage.logistics.label')}</span>{' '}
                {t('servicesPage.logistics.body')}
              </p>
              {logisticsUrl && (
                <a
                  href={logisticsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="caption font-bold text-canvas-white/70 hover:text-canvas-white transition-colors inline-block mt-4"
                >
                  {t('servicesPage.logistics.cta')} ↗
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
