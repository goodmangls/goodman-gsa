'use client';

import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import IntercomMessenger from './IntercomMessenger';

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <IntercomMessenger />
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
