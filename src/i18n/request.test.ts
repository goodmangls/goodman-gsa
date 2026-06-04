import {readFileSync} from 'node:fs';
import {fileURLToPath} from 'node:url';
import {dirname, resolve} from 'node:path';
import {describe, expect, it} from 'vitest';

describe('next-intl request config', () => {
  it('uses the next-intl v4 requestLocale API instead of stale locale destructuring', () => {
    const here = dirname(fileURLToPath(import.meta.url));
    const source = readFileSync(resolve(here, 'request.ts'), 'utf8');

    expect(source).toContain('requestLocale');
    expect(source).toContain('await requestLocale');
    expect(source).not.toMatch(/getRequestConfig\(async \(\{\s*locale\s*\}\)/);
  });
});
