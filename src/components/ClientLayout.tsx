'use client';

import { ReactNode } from 'react';
import Providers from './Providers';
import Navigation from './Navigation';
import Footer from './Footer';
import IntercomMessenger from './IntercomMessenger';

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <IntercomMessenger />
      <Navigation />
      {children}
      <Footer />
    </Providers>
  );
}
