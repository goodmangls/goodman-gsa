'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, type RegisterFormInput } from '@/lib/validations/auth';
import { useTranslations } from '@/contexts/LanguageContext';

const COUNTRIES = [
  'South Korea', 'United States', 'China', 'Japan', 'Germany', 'Singapore',
  'United Kingdom', 'France', 'Netherlands', 'Australia', 'Vietnam', 'Thailand',
  'Indonesia', 'Malaysia', 'India', 'Brazil', 'Mexico', 'Canada', 'Italy', 'Spain',
  'Other',
];

const COMPANY_TYPES = [
  { value: 'FREIGHT_FORWARDER', label: 'Freight Forwarder' },
  { value: 'SHIPPER', label: 'Shipper / Manufacturer' },
  { value: 'AIRLINE', label: 'Airline' },
  { value: 'NVOCC', label: 'NVOCC' },
  { value: 'CUSTOMS_BROKER', label: 'Customs Broker' },
  { value: 'OTHER', label: 'Other' },
];

export default function RegisterPage() {
  const router = useRouter();
  const t = useTranslations('auth');

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      wcaMember: false,
      mplMember: false,
      eanMember: false,
      terms: false,
    },
  });

  const onSubmit = async (data: RegisterFormInput) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.error || 'Registration failed. Please try again.');
        return;
      }

      // Redirect to login with success message
      router.push('/auth/login?registered=true');
    } catch {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#070612] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-2xl">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <h1 className="text-3xl font-bold text-white font-serif">GOODMAN GLS</h1>
            <p className="text-[#FF6B35] font-semibold mt-1">{t('partnerPortal')}</p>
          </Link>
        </div>

        {/* Register Card */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-2 text-center">
            {t('registerTitle')}
          </h2>
          <p className="text-white/50 text-center mb-8">
            {t('registerSubtitle')}
          </p>

          {/* Error message */}
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Account Information */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-white/10">
                {t('accountInfo')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-white/60 mb-2">
                    {t('email')} *
                  </label>
                  <input
                    type="email"
                    {...register('email')}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#FF6B35] transition-colors"
                    placeholder="your@company.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">
                    {t('password')} *
                  </label>
                  <input
                    type="password"
                    {...register('password')}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#FF6B35] transition-colors"
                    placeholder="••••••••"
                  />
                  {errors.password && (
                    <p className="mt-2 text-sm text-red-400">{errors.password.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">
                    {t('confirmPassword')} *
                  </label>
                  <input
                    type="password"
                    {...register('confirmPassword')}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#FF6B35] transition-colors"
                    placeholder="••••••••"
                  />
                  {errors.confirmPassword && (
                    <p className="mt-2 text-sm text-red-400">{errors.confirmPassword.message}</p>
                  )}
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-white/60 mb-2">
                    {t('yourName')} *
                  </label>
                  <input
                    type="text"
                    {...register('name')}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#FF6B35] transition-colors"
                    placeholder="John Smith"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-400">{errors.name.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Company Information */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-white/10">
                {t('companyInfo')}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-white/60 mb-2">
                    {t('companyName')} *
                  </label>
                  <input
                    type="text"
                    {...register('companyName')}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-[#FF6B35] transition-colors"
                    placeholder="Your Company Name"
                  />
                  {errors.companyName && (
                    <p className="mt-2 text-sm text-red-400">{errors.companyName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">
                    {t('country')} *
                  </label>
                  <select
                    {...register('country')}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FF6B35] transition-colors"
                  >
                    <option value="" className="bg-[#070612]">{t('selectCountry')}</option>
                    {COUNTRIES.map((country) => (
                      <option key={country} value={country} className="bg-[#070612]">
                        {country}
                      </option>
                    ))}
                  </select>
                  {errors.country && (
                    <p className="mt-2 text-sm text-red-400">{errors.country.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/60 mb-2">
                    {t('companyType')} *
                  </label>
                  <select
                    {...register('companyType')}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#FF6B35] transition-colors"
                  >
                    <option value="" className="bg-[#070612]">{t('selectType')}</option>
                    {COMPANY_TYPES.map((type) => (
                      <option key={type.value} value={type.value} className="bg-[#070612]">
                        {type.label}
                      </option>
                    ))}
                  </select>
                  {errors.companyType && (
                    <p className="mt-2 text-sm text-red-400">{errors.companyType.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Network Memberships */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4 pb-2 border-b border-white/10">
                {t('networkMemberships')}
              </h3>
              <p className="text-white/50 text-sm mb-4">{t('networkMembershipsHint')}</p>
              <div className="flex flex-wrap gap-4">
                <label className="flex items-center text-white/80 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register('wcaMember')}
                    className="mr-2 w-4 h-4 rounded border-white/20 bg-white/5 text-[#FF6B35] focus:ring-[#FF6B35]"
                  />
                  WCA Member
                </label>
                <label className="flex items-center text-white/80 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register('mplMember')}
                    className="mr-2 w-4 h-4 rounded border-white/20 bg-white/5 text-[#FF6B35] focus:ring-[#FF6B35]"
                  />
                  MPL Member
                </label>
                <label className="flex items-center text-white/80 cursor-pointer">
                  <input
                    type="checkbox"
                    {...register('eanMember')}
                    className="mr-2 w-4 h-4 rounded border-white/20 bg-white/5 text-[#FF6B35] focus:ring-[#FF6B35]"
                  />
                  EAN Member
                </label>
              </div>
            </div>

            {/* Terms */}
            <div>
              <label className="flex items-start text-white/80 cursor-pointer">
                <input
                  type="checkbox"
                  {...register('terms')}
                  className="mr-3 mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-[#FF6B35] focus:ring-[#FF6B35]"
                />
                <span className="text-sm">
                  {t('termsAgree')}{' '}
                  <Link href="/terms" className="text-[#FF6B35] hover:underline">
                    {t('termsLink')}
                  </Link>{' '}
                  {t('termsAnd')}{' '}
                  <Link href="/privacy" className="text-[#FF6B35] hover:underline">
                    {t('privacyLink')}
                  </Link>
                </span>
              </label>
              {errors.terms && (
                <p className="mt-2 text-sm text-red-400">{errors.terms.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 px-4 bg-[#FF6B35] hover:bg-[#E05A2B] text-white font-semibold rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-lg"
            >
              {isLoading ? t('registering') : t('createAccount')}
            </button>
          </form>

          <div className="mt-6 text-center text-white/60 text-sm">
            {t('haveAccount')}{' '}
            <Link href="/auth/login" className="text-[#FF6B35] hover:underline font-semibold">
              {t('loginHere')}
            </Link>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <Link href="/" className="text-white/40 hover:text-white/60 text-sm transition-colors">
            ← {t('backToHome')}
          </Link>
        </div>
      </div>
    </main>
  );
}
