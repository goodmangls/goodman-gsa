import Image from 'next/image';
import type { UnsplashImage } from '@/lib/unsplash';

type PageHeroBackgroundProps = {
  image: UnsplashImage;
  priority?: boolean;
};

export default function PageHeroBackground({ image, priority = true }: PageHeroBackgroundProps) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes="100vw"
        className="ks-menu-hero-bg-image object-cover object-center"
        data-unsplash-topic={image.topic}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/92 via-obsidian/58 to-obsidian/24" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_22%,rgba(188,113,85,0.30),transparent_28%),linear-gradient(90deg,transparent_0,transparent_48%,rgba(255,255,255,0.10)_49%,transparent_50%)] bg-[length:auto,72px_72px] opacity-75" />
      <div className="ks-menu-hero-bg-attribution">
        Photo:{' '}
        <a href={image.photographerUrl} target="_blank" rel="noreferrer">
          {image.photographer}
        </a>{' '}
        on{' '}
        <a href={image.unsplashUrl} target="_blank" rel="noreferrer">
          Unsplash
        </a>
      </div>
    </div>
  );
}
