import { getTranslations } from 'next-intl/server';

export default async function TermsPage() {
  const t = await getTranslations('pages.legal.terms');
  const sections = ['scope', 'rfq', 'compliance', 'liability', 'contact'] as const;

  return (
    <main className="bg-canvas min-h-screen">
      <section className="page-hero bg-canvas border-b border-hairline">
        <div className="container-wide max-w-4xl">
          <span className="eyebrow mb-6">{t('eyebrow')}</span>
          <h1 className="display-xl text-ink mb-10 leading-[0.9] tracking-tighter">{t('title')}</h1>
          <p className="body-lg text-muted max-w-2xl">{t('lead')}</p>
        </div>
      </section>

      <section className="section-spacing bg-canvas">
        <div className="container-wide max-w-4xl space-y-12">
          {sections.map((key) => (
            <section key={key} className="panel-bordered p-8 md:p-10 bg-canvas">
              <h2 className="headline text-ink mb-4">{t(`sections.${key}.title`)}</h2>
              <p className="body-lg text-muted leading-relaxed">{t(`sections.${key}.body`)}</p>
            </section>
          ))}
        </div>
      </section>
    </main>
  );
}
