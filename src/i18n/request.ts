import {notFound} from 'next/navigation';
import {getRequestConfig} from 'next-intl/server';

const locales = ['en', 'ko'] as const;
type Locale = (typeof locales)[number];

function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}

export default getRequestConfig(async ({requestLocale}) => {
  const requested = await requestLocale;

  if (!isLocale(requested)) {
    notFound();
  }

  const locale = requested;

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default
  };
});
