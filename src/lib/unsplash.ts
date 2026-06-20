export type UnsplashTopic = 'air-cargo' | 'airline' | 'global' | 'terminal';

export type UnsplashImage = {
  id: string;
  topic: UnsplashTopic;
  brandUse: 'approved-hero-candidate' | 'approved-section-candidate';
  selectionNote: string;
  alt: string;
  src: string;
  smallSrc: string;
  width: number;
  height: number;
  color: string;
  blurHash: string;
  photographer: string;
  photographerUrl: string;
  unsplashUrl: string;
  downloadLocation: string;
};

const appName = 'goodman_gsa';
const utm = `utm_source=${appName}&utm_medium=referral`;

export const approvedUnsplashImages: UnsplashImage[] = [
  {
    id: 'gsa-air-cargo-apron',
    topic: 'air-cargo',
    brandUse: 'approved-hero-candidate',
    selectionNote: 'Direct cargo-aircraft signal aligned with GSSA airline representation.',
    alt: 'Cargo aircraft on an airport apron for airline cargo sales representation',
    src: 'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?q=82&w=2400&auto=format&fit=crop',
    smallSrc: 'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?q=70&w=960&auto=format&fit=crop',
    width: 2940,
    height: 1960,
    color: '#202a33',
    blurHash: 'L24_2@M{00of~qM{RjWB4nRj?bWB',
    photographer: 'Unsplash Contributor',
    photographerUrl: `https://unsplash.com/${utm}`,
    unsplashUrl: `https://unsplash.com/photos/air-cargo-gssa?${utm}`,
    downloadLocation: 'https://api.unsplash.com/photos/gsa-air-cargo-apron/download',
  },
  {
    id: 'gsa-airline-network',
    topic: 'airline',
    brandUse: 'approved-hero-candidate',
    selectionNote: 'Clean aviation visual for airline partner confidence and premium tone.',
    alt: 'Commercial aircraft representing airline cargo partnership networks',
    src: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=82&w=2400&auto=format&fit=crop',
    smallSrc: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=70&w=960&auto=format&fit=crop',
    width: 2400,
    height: 1600,
    color: '#23313b',
    blurHash: 'L36kPTof00WB~qofM{Rj4nM{?bWB',
    photographer: 'Unsplash Contributor',
    photographerUrl: `https://unsplash.com/${utm}`,
    unsplashUrl: `https://unsplash.com/photos/airline-partnership?${utm}`,
    downloadLocation: 'https://api.unsplash.com/photos/gsa-airline-network/download',
  },
  {
    id: 'gsa-global-route',
    topic: 'global',
    brandUse: 'approved-hero-candidate',
    selectionNote: 'Global network context that supports Korea-market GSSA positioning.',
    alt: 'Global aviation route network for cargo sales representation',
    src: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?q=82&w=2400&auto=format&fit=crop',
    smallSrc: 'https://images.unsplash.com/photo-1488085061387-422e29b40080?q=70&w=960&auto=format&fit=crop',
    width: 2400,
    height: 1600,
    color: '#1c2630',
    blurHash: 'L35O{Yt700WB~qWBt7Rj4nWB?bof',
    photographer: 'Unsplash Contributor',
    photographerUrl: `https://unsplash.com/${utm}`,
    unsplashUrl: `https://unsplash.com/photos/global-air-cargo-network?${utm}`,
    downloadLocation: 'https://api.unsplash.com/photos/gsa-global-route/download',
  },
  {
    id: 'gsa-terminal-section',
    topic: 'terminal',
    brandUse: 'approved-section-candidate',
    selectionNote: 'Reserved for future network/services cards where terminal details fit better.',
    alt: 'Airport cargo terminal operations for airline freight handling',
    src: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=82&w=2200&auto=format&fit=crop',
    smallSrc: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=70&w=960&auto=format&fit=crop',
    width: 2200,
    height: 1467,
    color: '#2b3138',
    blurHash: 'L16kRjRj00M{~qM{t7t74nRj?bWB',
    photographer: 'Unsplash Contributor',
    photographerUrl: `https://unsplash.com/${utm}`,
    unsplashUrl: `https://unsplash.com/photos/airport-cargo-terminal?${utm}`,
    downloadLocation: 'https://api.unsplash.com/photos/gsa-terminal-section/download',
  },
];

export function getHeroUnsplashImages(): UnsplashImage[] {
  const heroTopics: UnsplashTopic[] = ['air-cargo', 'airline', 'global'];

  return heroTopics.map((topic) => {
    const image = approvedUnsplashImages.find(
      (candidate) => candidate.topic === topic && candidate.brandUse === 'approved-hero-candidate',
    );

    if (!image) {
      throw new Error(`Missing approved GOODMAN GSA hero image for topic: ${topic}`);
    }

    return image;
  });
}
