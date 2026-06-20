'use client';

import { motion } from 'framer-motion';
import { Link } from '@/navigation';
import Image from 'next/image';
import DisplayLines from './DisplayLines';
import { useTranslations } from 'next-intl';
import { getHeroUnsplashImages } from '@/lib/unsplash';

export default function HeroSection() {
  const t = useTranslations();
  const heroImages = getHeroUnsplashImages();

  return (
    <section className="relative hero-spacing overflow-hidden">
      {/* Full-bleed approved Unsplash imagery */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <Image
            key={image.id}
            src={image.src}
            alt={image.alt}
            fill
            className="ks-hero-bg-slide object-cover object-center"
            priority={index === 0}
            sizes="100vw"
            data-unsplash-topic={image.topic}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/95 via-obsidian/55 to-obsidian/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_24%,rgba(188,113,85,0.38),transparent_25%),linear-gradient(90deg,transparent_0,transparent_48%,rgba(255,255,255,0.12)_49%,transparent_50%)] bg-[length:auto,72px_72px] opacity-80" />
        <div className="ks-hero-bg-attribution">
          {heroImages.map((image, index) => (
            <span key={image.id} className="ks-hero-bg-credit" style={{ animationDelay: `${index * 6}s` }}>
              Photo:{' '}
              <a href={image.photographerUrl} target="_blank" rel="noreferrer">
                {image.photographer}
              </a>{' '}
              on{' '}
              <a href={image.unsplashUrl} target="_blank" rel="noreferrer">
                Unsplash
              </a>
            </span>
          ))}
        </div>
      </div>

      <div className="container-wide relative z-10 w-full">
        <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_390px]">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="subhead text-canvas-white/90 mb-6 max-w-xl"
          >
            {t('home.hero.eyebrow')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <DisplayLines
              as="h1"
              lines={[t('home.hero.titleLine1'), t('home.hero.titleLine2')]}
              className="display-hero text-canvas-white mb-8"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="body-lg text-canvas-white/80 max-w-xl mb-12"
          >
            {t('home.hero.lead')}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <Link href="#contact" className="btn-pill-primary w-full sm:w-auto justify-center">
              {t('home.hero.ctaPrimary')}
            </Link>
            <Link href="/network" className="btn-pill-ghost w-full sm:w-auto justify-center">
              {t('home.hero.ctaSecondary')}
            </Link>
          </motion.div>
        </div>

        <motion.aside
          aria-label="GOODMAN GSA premium airline sales desk"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="hidden rounded-[34px] border border-canvas-white/20 bg-canvas-white/[0.07] p-6 shadow-2xl shadow-obsidian/40 backdrop-blur-md lg:block"
        >
          <div className="mb-7 flex items-start justify-between gap-4">
            <div>
              <p className="caption text-canvas-white/50">AIRLINE SALES DESK</p>
              <p className="mt-2 text-2xl font-bold leading-tight text-canvas-white">Premium Korea GSSA mandate</p>
            </div>
            <span className="rounded-full border border-desert-sienna/70 px-3 py-1 text-xs font-bold text-canvas-white">GSA</span>
          </div>

          <div className="rounded-[26px] border border-canvas-white/15 bg-obsidian/65 p-5">
            <div className="mb-5 flex items-center justify-between">
              <span className="caption text-canvas-white/45">ICN</span>
              <span className="h-px flex-1 bg-gradient-to-r from-desert-sienna via-canvas-white/50 to-desert-sienna mx-4" />
              <span className="caption text-canvas-white/45">GLOBAL</span>
            </div>
            <div className="grid gap-3">
              {[
                ['Sales coverage', 'Forwarder demand'],
                ['Yield guardrail', 'Rate discipline'],
                ['Capacity rhythm', 'Every kilo visible'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-canvas-white/10 bg-canvas-white/[0.06] p-4">
                  <p className="caption text-desert-sienna">{label}</p>
                  <p className="mt-2 text-lg font-bold text-canvas-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.aside>
        </div>
      </div>
    </section>
  );
}
