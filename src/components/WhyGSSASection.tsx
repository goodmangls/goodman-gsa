import DisplayLines from './DisplayLines';
import { getTranslations } from 'next-intl/server';

const pillarKeys = ['sales', 'capacity', 'intelligence', 'digital'];

export default async function WhyGSSASection() {
  const t = await getTranslations('home.why');
  return (
    <section id="services" className="bg-canvas section-spacing">
      <div className="container-wide">
        <div className="max-w-3xl mb-16">
          <p className="eyebrow mb-6">{t('eyebrow')}</p>
          <DisplayLines
            as="h2"
            lines={[t('titleLine1'), t('titleLine2')]}
            className="display-lg text-ink mb-8"
          />
          <p className="body-default text-muted max-w-2xl">
            {t('lead')}
          </p>
        </div>

        <div className="feature-stack max-w-4xl">
          {pillarKeys.map((key) => (
            <div key={key} className="feature-stack-item">
              <h3 className="headline text-ink mb-3">{t(`pillars.${key}.title`)}</h3>
              <p className="body-default text-muted">{t(`pillars.${key}.description`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
