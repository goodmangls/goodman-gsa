'use client';

import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { useTranslations } from '@/contexts/LanguageContext';

export default function PortalDashboard() {
  const { data: session } = useSession();
  const t = useTranslations('portal');

  const quickActions = [
    {
      title: t('requestQuote'),
      description: t('requestQuoteDesc'),
      href: '/portal/quotes/new',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: 'from-orange-500 to-red-500',
    },
    {
      title: t('trackShipment'),
      description: t('trackShipmentDesc'),
      href: '/portal/tracking',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: t('viewRates'),
      description: t('viewRatesDesc'),
      href: '/portal/rates',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: t('marketInsights'),
      description: t('marketInsightsDesc'),
      href: '/portal/insights',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <main className="min-h-screen bg-[#070612]">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#070612]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/portal" className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-white font-serif">GOODMAN GLS</h1>
            <span className="text-[#FF6B35] font-semibold text-sm">{t('partnerPortal')}</span>
          </Link>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-white font-medium">{session?.user?.name}</p>
              <p className="text-white/50 text-sm">{session?.user?.email}</p>
            </div>
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className="px-4 py-2 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white rounded-lg transition-colors text-sm font-medium border border-white/10"
            >
              {t('signOut')}
            </button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-white mb-2">
            {t('welcome')}, {session?.user?.name?.split(' ')[0] || t('partner')}!
          </h2>
          <p className="text-white/60">{t('dashboardSubtitle')}</p>
        </div>

        {/* Quick Actions */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-white mb-6">{t('quickActions')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => (
              <Link
                key={index}
                href={action.href}
                className="group bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl p-6 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {action.icon}
                </div>
                <h4 className="text-white font-semibold mb-2">{action.title}</h4>
                <p className="text-white/50 text-sm">{action.description}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activity & Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Quotes */}
          <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-white">{t('recentQuotes')}</h3>
              <Link href="/portal/quotes" className="text-[#FF6B35] hover:underline text-sm font-medium">
                {t('viewAll')}
              </Link>
            </div>

            <div className="text-center py-12">
              <div className="w-16 h-16 mx-auto mb-4 bg-white/5 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-white/50 mb-4">{t('noQuotesYet')}</p>
              <Link
                href="/portal/quotes/new"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF6B35] hover:bg-[#E05A2B] text-white font-medium rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                {t('requestFirstQuote')}
              </Link>
            </div>
          </div>

          {/* Account Info */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-white mb-6">{t('accountInfo')}</h3>

            <div className="space-y-4">
              <div>
                <p className="text-white/50 text-sm">{t('memberSince')}</p>
                <p className="text-white font-medium">
                  {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </p>
              </div>

              <div>
                <p className="text-white/50 text-sm">{t('accountStatus')}</p>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full"></span>
                  {t('active')}
                </span>
              </div>

              <div>
                <p className="text-white/50 text-sm">{t('accountType')}</p>
                <p className="text-white font-medium">{t('partnerAccount')}</p>
              </div>

              <div className="pt-4 border-t border-white/10">
                <Link
                  href="/portal/settings"
                  className="flex items-center gap-2 text-[#FF6B35] hover:underline text-sm font-medium"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {t('manageAccount')}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-8 bg-gradient-to-r from-[#FF6B35]/10 to-[#FF6B35]/5 border border-[#FF6B35]/20 rounded-2xl p-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#FF6B35]/20 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-[#FF6B35]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-semibold">{t('needHelp')}</h4>
                <p className="text-white/60 text-sm">{t('needHelpDesc')}</p>
              </div>
            </div>
            <a
              href="mailto:contact@goodmangls.com"
              className="px-6 py-2.5 bg-[#FF6B35] hover:bg-[#E05A2B] text-white font-medium rounded-lg transition-colors whitespace-nowrap"
            >
              {t('contactSupport')}
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
