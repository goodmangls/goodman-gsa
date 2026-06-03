import { Link } from '@/navigation';
import { getTranslations } from 'next-intl/server';

const featureKeys = ['agent', 'insights', 'account'];

export default async function PartnerHubSection() {
  const t = await getTranslations('home.partnerHub');
  return (
    <section id="partner-hub" className="bg-canvas section-spacing">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <p className="eyebrow mb-6">{t('eyebrow')}</p>
            <h2 className="display-lg text-ink mb-8">{t('title')}</h2>
            <p className="body-lg text-muted mb-12 max-w-xl">
              {t('lead')}
            </p>
            <ul className="feature-stack max-w-lg mb-12">
              {featureKeys.map((key) => (
                <li key={key} className="feature-stack-item">
                  <span className="body-default text-ink font-bold">{t(`features.${key}`)}</span>
                </li>
              ))}
            </ul>
            <Link href="#contact" className="btn-pill-primary">
              {t('cta')}
            </Link>
          </div>

          <div className="hidden md:flex justify-end">
            <div className="panel-bordered w-full aspect-square max-w-sm flex items-center justify-center p-12 bg-surface-soft">
              <span className="display-xl opacity-10 text-ink select-none">G</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
