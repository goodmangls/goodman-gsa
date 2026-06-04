import '@testing-library/jest-dom';
import { vi } from 'vitest';
import React from 'react';

// Mock next-intl
vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
  useLocale: () => 'ko',
  NextIntlClientProvider: ({ children }: { children: React.ReactNode }) => children,
}));

// Mock next-intl/server
vi.mock('next-intl/server', () => ({
  getTranslations: async () => (key: string) => key,
  getMessages: async () => ({}),
}));

type MotionProps<T extends HTMLElement> = React.HTMLAttributes<T> & {
  children?: React.ReactNode;
};

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: MotionProps<HTMLDivElement>) => <div {...props}>{children}</div>,
    section: ({ children, ...props }: MotionProps<HTMLElement>) => <section {...props}>{children}</section>,
    span: ({ children, ...props }: MotionProps<HTMLSpanElement>) => <span {...props}>{children}</span>,
    h1: ({ children, ...props }: MotionProps<HTMLHeadingElement>) => <h1 {...props}>{children}</h1>,
    h2: ({ children, ...props }: MotionProps<HTMLHeadingElement>) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: MotionProps<HTMLParagraphElement>) => <p {...props}>{children}</p>,
    button: ({ children, ...props }: MotionProps<HTMLButtonElement>) => <button {...props}>{children}</button>,
    a: ({ children, ...props }: MotionProps<HTMLAnchorElement>) => <a {...props}>{children}</a>,
  },
  AnimatePresence: ({ children }: { children?: React.ReactNode }) => children,
}));
