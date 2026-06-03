import DisplayLines from './DisplayLines';
import { getTranslations } from 'next-intl/server';

const valueKeys = ['trust', 'velocity', 'connectivity'];

export default async function CompanySection() {
  const t = await getTranslations('home.company');
  return (
    <section id="company" className="bg-canvas section-spacing">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-hairline panel-bordered mb-20">
          {valueKeys.map((key) => (
            <div key={key} className="bg-canvas px-10 py-10 md:px-12 md:py-12">
              <h3 className="headline text-ink mb-4">{t(`values.${key}.title`)}</h3>
              <p className="body-default text-muted">{t(`values.${key}.desc`)}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center panel-quote px-12 py-12 md:px-16 md:py-14">
          <blockquote className="subhead text-ink mb-6">
            {t('quote')}
          </blockquote>
          <cite className="eyebrow not-italic">{t('quoteCite')}</cite>
        </div>
      </div>
    </section>
  );
}
