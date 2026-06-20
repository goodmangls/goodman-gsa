'use client';

import { motion } from 'framer-motion';
import PageHeroBackground from '@/components/PageHeroBackground';
import DisplayLines from '@/components/DisplayLines';
import { useTranslations } from 'next-intl';
import { getMenuHeroUnsplashImage } from '@/lib/unsplash';

const teamKeys = ['changhee', 'minji', 'seungho'] as const;
const timelineYears = ['2014', '2015', '2018', '2020', '2025'] as const;
const valueKeys = ['trust', 'velocity', 'connectivity'] as const;

export default function CompanyPage() {
  const t = useTranslations('pages.company');
  const heroImage = getMenuHeroUnsplashImage('company');

  return (
    <main className="bg-canvas min-h-screen">
      <section className="page-hero with-menu-hero-bg">
        <PageHeroBackground image={heroImage} />
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl"
          >
            <span className="eyebrow mb-6">{t('heroEyebrow')}</span>
            <DisplayLines
              as="h1"
              lines={[t('heroTitleLine1'), t('heroTitleLine2')]}
              className="display-xl text-canvas-white mb-10 leading-[0.85] tracking-tighter"
            />
            <p className="body-lg text-canvas-white/78 max-w-xl">{t('heroLead')}</p>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing bg-canvas">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-color-block-pink color-block border border-ink/10 shadow-sm"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 p-10 md:p-16 lg:p-24 border-b lg:border-b-0 lg:border-r border-ink/10 flex flex-col justify-between">
                <div>
                  <span className="figma-mono text-xs tracking-widest text-ink/40 block mb-16 font-bold uppercase">{t('leadership.eyebrow')}</span>
                  <h2 className="display-lg text-ink mb-12 tracking-tight leading-none italic">&ldquo;{t('leadership.quote')}&rdquo;</h2>
                  <div className="space-y-8 body-lg text-ink/80 leading-relaxed max-w-2xl">
                    <p dangerouslySetInnerHTML={{ __html: t.raw('leadership.paragraph1') }} />
                    <p>{t('leadership.paragraph2')}</p>
                    <p>{t('leadership.paragraph3')}</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 p-10 md:p-16 lg:p-24 flex flex-col justify-end bg-ink/[0.02]">
                <div className="mb-16">
                  <div className="w-40 h-40 rounded-full border-2 border-ink/10 flex items-center justify-center bg-canvas shadow-xl relative">
                    <span className="text-5xl font-black tracking-tighter text-ink/20">SH</span>
                    <div className="absolute -right-2 -bottom-2 w-12 h-12 bg-ink rounded-full flex items-center justify-center text-canvas text-xl">
                      ✓
                    </div>
                  </div>
                </div>
                <h4 className="display-sm text-ink leading-tight tracking-tight font-black">{t('leadership.name')}</h4>
                <p className="figma-mono text-xs tracking-[0.2em] text-ink/50 mt-3 font-bold uppercase">{t('leadership.title')}</p>
                <div className="mt-12 pt-12 border-t border-ink/10">
                  <p className="body-sm text-ink/40 leading-loose">{t('leadership.bio')}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-spacing bg-canvas">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-32">
              <span className="eyebrow block mb-6">{t('heritageEyebrow')}</span>
              <h2 className="display-lg text-ink tracking-tighter">{t('heritageTitle')}</h2>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-hairline -translate-x-1/2 hidden md:block" />
              <div className="space-y-16 md:space-y-24">
                {timelineYears.map((year, index) => {
                  const isLeft = index % 2 === 0;
                  return (
                    <motion.div
                      key={year}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="grid grid-cols-1 md:grid-cols-[1fr_16px_1fr] gap-6 md:gap-12 items-start"
                    >
                      <div className="md:hidden">
                        <span className="display-md text-ink/10 block mb-4">{year}</span>
                        <h4 className="headline text-ink mb-4">{t(`timeline.${year}.milestone`)}</h4>
                        <p className="body text-muted leading-relaxed">{t(`timeline.${year}.desc`)}</p>
                      </div>
                      <div className={`hidden md:block ${isLeft ? 'md:text-right' : 'invisible'}`}>
                        {isLeft && (
                          <>
                            <span className="display-md text-ink/10 block mb-4">{year}</span>
                            <h4 className="headline text-ink mb-4">{t(`timeline.${year}.milestone`)}</h4>
                            <p className="body text-muted max-w-md md:ml-auto leading-relaxed">{t(`timeline.${year}.desc`)}</p>
                          </>
                        )}
                      </div>
                      <div className="hidden md:flex justify-center pt-6">
                        <div className="w-4 h-4 rounded-full bg-ink border-4 border-canvas z-10 shrink-0" />
                      </div>
                      <div className={`hidden md:block ${!isLeft ? 'md:text-left' : 'invisible'}`}>
                        {!isLeft && (
                          <>
                            <span className="display-md text-ink/10 block mb-4">{year}</span>
                            <h4 className="headline text-ink mb-4">{t(`timeline.${year}.milestone`)}</h4>
                            <p className="body text-muted max-w-md leading-relaxed">{t(`timeline.${year}.desc`)}</p>
                          </>
                        )}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-color-block-lilac border-y border-hairline">
        <div className="container-wide">
          <div className="max-w-4xl mb-24">
            <span className="figma-mono text-sm tracking-widest text-ink/40 block mb-6 uppercase font-bold">{t('team.eyebrow')}</span>
            <DisplayLines
              as="h2"
              lines={[t('teamTitleLine1'), t('teamTitleLine2')]}
              className="display-lg text-ink mb-10 tracking-tight leading-none"
            />
            <p className="body-lg text-muted max-w-2xl leading-relaxed">
              {t('team.lead')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamKeys.map((key) => (
              <motion.div
                key={key}
                whileHover={{ y: -6 }}
                className="p-10 bg-canvas border border-ink/10 rounded-[32px] shadow-sm flex flex-col h-full"
              >
                <div className="w-20 h-20 bg-ink/[0.03] rounded-2xl flex items-center justify-center mb-12 border border-ink/5 text-4xl">
                  {t(`team.members.${key}.icon`)}
                </div>
                <div className="flex-1">
                  <h4 className="headline text-ink mb-1">{t(`team.members.${key}.name`)}</h4>
                  <p className="figma-mono text-[10px] tracking-[0.2em] text-ink/50 mb-8 uppercase font-bold">{t(`team.members.${key}.title`)}</p>

                  <div className="space-y-6 pt-8 border-t border-ink/5">
                    <div>
                      <p className="text-[10px] text-ink/30 figma-mono mb-2 uppercase tracking-widest font-bold">{t('team.divisionLabel')}</p>
                      <p className="body-sm text-ink/80 font-medium">{t(`team.members.${key}.department`)}</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-ink/30 figma-mono mb-2 uppercase tracking-widest font-bold">{t('team.expertiseLabel')}</p>
                      <p className="body-sm text-ink/80 font-medium">{t(`team.members.${key}.expertise`)}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-12 pt-8 border-t border-ink/5">
                  <button className="text-[10px] figma-mono text-ink/40 hover:text-ink transition-colors font-bold uppercase tracking-widest">{t('team.profileCta')} →</button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-spacing bg-ink text-canvas overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="container-wide text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="display-xl mb-32 tracking-tighter leading-none">{t('values.title')}</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-24 max-w-6xl mx-auto">
              {valueKeys.map((key, index) => (
                <div key={key} className="text-center group">
                  <span className="figma-mono text-xs tracking-[0.3em] text-canvas/40 block mb-8 font-black group-hover:text-canvas/60 transition-colors uppercase">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="display-md text-canvas mb-8 tracking-tight font-black leading-none">{t(`values.items.${key}.value`)}</h3>
                  <p className="body-lg text-canvas/60 leading-relaxed max-w-xs mx-auto">{t(`values.items.${key}.desc`)}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
