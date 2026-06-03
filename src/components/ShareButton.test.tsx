import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ShareButton from './ShareButton';
import React from 'react';

// Mock translations
vi.mock('next-intl', async () => {
  const actual = await vi.importActual('next-intl');
  return {
    ...actual,
    useTranslations: () => (key: string) => {
      const messages: Record<string, string> = {
        share: 'Share',
        shareTitle: 'GOODMAN GLS',
        shareText: 'Premium Cargo GSSA in Korea',
        copyLink: 'Copy Link',
        shareSuccess: 'Link copied',
      };
      return messages[key] || key;
    },
  };
});

describe('ShareButton', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Reset navigator share
    Object.defineProperty(navigator, 'share', {
      writable: true,
      value: undefined,
    });
    // Reset navigator clipboard
    Object.defineProperty(navigator, 'clipboard', {
      writable: true,
      value: {
        writeText: vi.fn().mockResolvedValue(undefined),
      },
    });
  });

  it('renders the share button', () => {
    render(<ShareButton />);
    expect(screen.getByTitle('Share')).toBeDefined();
  });

  it('calls navigator.share if available', async () => {
    const shareMock = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'share', {
      writable: true,
      value: shareMock,
    });

    render(<ShareButton />);
    const button = screen.getByTitle('Share');
    fireEvent.click(button);

    expect(shareMock).toHaveBeenCalled();
  });

  it('opens fallback dropdown if navigator.share is not available', async () => {
    render(<ShareButton />);
    const button = screen.getByTitle('Share');
    fireEvent.click(button);

    expect(screen.getByText('Copy Link')).toBeDefined();
  });

  it('copies to clipboard when fallback link is clicked', async () => {
    const writeTextMock = vi.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, 'clipboard', {
      writable: true,
      value: { writeText: writeTextMock },
    });

    render(<ShareButton />);
    const button = screen.getByTitle('Share');
    fireEvent.click(button);

    const copyBtn = screen.getByText('Copy Link');
    fireEvent.click(copyBtn);

    expect(writeTextMock).toHaveBeenCalled();
    
    await waitFor(() => {
      expect(screen.getByText('Link copied')).toBeDefined();
    });
  });
});
