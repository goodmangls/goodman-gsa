'use client';

import React, { useState } from 'react';
import { Share2, Link, Check } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';

export default function ShareButton() {
  const t = useTranslations('common');
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareData = {
    title: t('shareTitle'),
    text: t('shareText'),
    url: typeof window !== 'undefined' ? window.location.href : '',
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if ((err as Error).name !== 'AbortError') {
          console.error('Error sharing:', err);
        }
      }
    } else {
      setIsOpen(!isOpen);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareData.url);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setIsOpen(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={handleShare}
        className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/10 flex items-center justify-center group"
        title={t('share')}
      >
        <Share2 className="w-5 h-5 text-ink group-hover:scale-110 transition-transform" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full right-0 mt-3 w-48 bg-[#1A1A1A] border border-white/10 rounded-xl shadow-2xl p-2 z-50 overflow-hidden"
          >
            <button
              onClick={copyToClipboard}
              className="w-full flex items-center gap-3 p-3 hover:bg-white/5 rounded-lg transition-colors text-left group"
            >
              {copied ? (
                <Check className="w-4 h-4 text-orange-500" />
              ) : (
                <Link className="w-4 h-4 text-canvas-white/65 group-hover:text-canvas-white transition-colors" />
              )}
              <span className={`text-sm font-medium ${copied ? 'text-orange-500' : 'text-canvas-white/80 group-hover:text-canvas-white'}`}>
                {copied ? t('shareSuccess') : t('copyLink')}
              </span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
