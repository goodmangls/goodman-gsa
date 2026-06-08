import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { Inter, Outfit, JetBrains_Mono } from "next/font/google";
import "../globals.css";
import ClientLayout from "@/components/ClientLayout";
import Providers from "@/components/Providers";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home.hero' });
 
  return {
    title: {
      template: '%s | GOODMAN GSA',
      default: 'GOODMAN GSA - Premium Cargo GSSA in Korea'
    },
    description: t('lead'),
    keywords: ['GSSA', 'Cargo GSSA', 'Korea Logistics', 'Air Freight Korea', 'Goodman GSA'],
    openGraph: {
      title: 'GOODMAN GSA',
      description: t('lead'),
      url: 'https://goodman-gsa.vercel.app',
      siteName: 'GOODMAN GSA',
      locale: locale === 'ko' ? 'ko_KR' : 'en_US',
      type: 'website',
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} ${mono.variable} antialiased selection:bg-orange-500/30`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Providers>
            <ClientLayout>{children}</ClientLayout>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
