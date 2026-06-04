import { describe, expect, it } from 'vitest';
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const read = (relativePath: string) => fs.readFileSync(path.join(root, relativePath), 'utf8');

describe('site operational quality', () => {
  it('routes primary CTAs to the home contact section from every locale page', () => {
    const navigation = read('src/components/Navigation.tsx');
    expect(navigation).not.toContain('href="#contact"');
    expect(navigation).toContain('href="/#contact"');
  });

  it('does not ship inert legal footer links', () => {
    const footer = read('src/components/Footer.tsx');
    expect(footer).not.toContain("{ key: 'privacy', href: '#' }");
    expect(footer).not.toContain("{ key: 'terms', href: '#' }");
    expect(footer).toContain("href: '/privacy'");
    expect(footer).toContain("href: '/terms'");
  });

  it('does not hardcode a public Intercom app id fallback', () => {
    const intercom = read('src/lib/intercom.ts');
    expect(intercom).not.toContain("?? 'k5z51xs2'");
    expect(intercom).toContain('string | null');
  });

  it('keeps locale-specific page copy in message catalogs instead of page components', () => {
    const companyPage = read('src/app/[locale]/company/page.tsx');
    const networkPage = read('src/app/[locale]/network/page.tsx');

    expect(companyPage).not.toContain('Welcome to GOODMAN GLS');
    expect(companyPage).not.toContain('Our Core Values');
    expect(companyPage).not.toContain('View Profile');
    expect(networkPage).not.toContain('Worldwide standards for airline representation');
    expect(networkPage).not.toContain('Korea’s GSSA landscape');
  });
});
