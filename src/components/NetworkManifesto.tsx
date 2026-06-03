import { Link } from '@/navigation';
import DisplayLines from './DisplayLines';
import { getTranslations } from 'next-intl/server';

export default async function NetworkManifesto() {
  const t = await getTranslations('home.network');
  return (
    <section className="bg-canvas section-spacing">
      <div className="container-wide">
        <div className="section-surface-obsidian rounded-[var(--radius-feature)] p-12 md:p-16 lg:p-20 max-w-4xl">
          <p className="eyebrow mb-8">{t('eyebrow')}</p>
          <DisplayLines
            as="h2"
            lines={[t('titleLine1'), t('titleLine2')]}
            className="display-lg text-canvas-white mb-10"
          />
          <p className="body-lg text-canvas-white/75 max-w-2xl mb-12">
            {t('lead')}
          </p>
          <Link href="/network" className="btn-pill-primary">
            {t('cta')}
          </Link>
        </div>
      </div>
    </section>
  );
}
