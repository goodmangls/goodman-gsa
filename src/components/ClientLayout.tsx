'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Providers from './Providers';
import Navigation from './Navigation';
import Footer from './Footer';
import FloatingConnect from './FloatingConnect';

export default function ClientLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // Routes that should not show main navigation/footer
  const isAuthRoute = pathname?.startsWith('/auth');
  const isPortalRoute = pathname?.startsWith('/portal');
  const hideMainLayout = isAuthRoute || isPortalRoute;

  return (
    <Providers>
      {!hideMainLayout && <Navigation />}
      {children}
      {!hideMainLayout && <Footer />}
      {!hideMainLayout && <FloatingConnect />}
    </Providers>
  );
}
