export type UnsplashTopic = 'air-cargo' | 'airline' | 'global' | 'terminal';
export type MenuHeroPage = 'company' | 'services' | 'network';

export type UnsplashImage = {
  id: string;
  topic: UnsplashTopic;
  brandUse: 'approved-hero-candidate' | 'approved-menu-hero-candidate' | 'approved-section-candidate';
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
  {
    id: 'gsa-company-premium-gate-operations',
    topic: 'global',
    brandUse: 'approved-menu-hero-candidate',
    selectionNote: 'Premium fixed curation: sunset gate operations creates a more executive aviation mood for company credibility.',
    alt: 'Aircraft at airport gate operations for GOODMAN GSA company profile',
    src: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?q=86&w=2200&auto=format&fit=crop&crop=entropy',
    smallSrc: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?q=74&w=960&auto=format&fit=crop&crop=entropy',
    width: 2400,
    height: 1600,
    color: '#1c2b35',
    blurHash: 'L26kRjRj00M{~qM{t7t74nRj?bWB',
    photographer: 'Unsplash Contributor',
    photographerUrl: `https://unsplash.com/${utm}`,
    unsplashUrl: `https://unsplash.com/photos/1542296332-2e4473faf563?${utm}`,
    downloadLocation: 'https://api.unsplash.com/photos/gsa-company-premium-gate-operations/download',
  },
  {
    id: 'gsa-services-premium-terminal-front',
    topic: 'terminal',
    brandUse: 'approved-menu-hero-candidate',
    selectionNote: 'Premium fixed curation: front-on terminal aircraft image communicates disciplined airport execution.',
    alt: 'Aircraft at cargo-capable terminal for GOODMAN GSA service capabilities',
    src: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=86&w=2200&auto=format&fit=crop&crop=entropy',
    smallSrc: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?q=74&w=960&auto=format&fit=crop&crop=entropy',
    width: 2200,
    height: 1467,
    color: '#2a3238',
    blurHash: 'L16kRjRj00M{~qM{t7t74nRj?bWB',
    photographer: 'Unsplash Contributor',
    photographerUrl: `https://unsplash.com/${utm}`,
    unsplashUrl: `https://unsplash.com/photos/1569154941061-e231b4725ef1?${utm}`,
    downloadLocation: 'https://api.unsplash.com/photos/gsa-services-premium-terminal-front/download',
  },
  {
    id: 'gsa-network-premium-airline-flight',
    topic: 'airline',
    brandUse: 'approved-menu-hero-candidate',
    selectionNote: 'Premium fixed curation: clean in-flight aircraft cue separates the network page from terminal operations.',
    alt: 'Commercial aircraft in flight for GOODMAN GSA airline partner network',
    src: 'https://images.unsplash.com/photo-1529074963764-98f45c47344b?q=86&w=2200&auto=format&fit=crop&crop=entropy',
    smallSrc: 'https://images.unsplash.com/photo-1529074963764-98f45c47344b?q=74&w=960&auto=format&fit=crop&crop=entropy',
    width: 2400,
    height: 1572,
    color: '#2d4b62',
    blurHash: 'L36kPTof00WB~qofM{Rj4nM{?bWB',
    photographer: 'Unsplash Contributor',
    photographerUrl: `https://unsplash.com/${utm}`,
    unsplashUrl: `https://unsplash.com/photos/1529074963764-98f45c47344b?${utm}`,
    downloadLocation: 'https://api.unsplash.com/photos/gsa-network-premium-airline-flight/download',
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

const menuHeroTopics: Record<MenuHeroPage, UnsplashTopic> = {
  company: 'global',
  services: 'terminal',
  network: 'airline',
};

export function getMenuHeroUnsplashImage(page: MenuHeroPage): UnsplashImage {
  const topic = menuHeroTopics[page];
  const image = approvedUnsplashImages.find(
    (candidate) => candidate.topic === topic && candidate.brandUse === 'approved-menu-hero-candidate',
  );

  if (!image) {
    throw new Error(`Missing approved GOODMAN GSA menu hero image for page: ${page}`);
  }

  return image;
}
