/**
 * Cross-links to the sister integrated-logistics site (goodman-gls).
 *
 * Goodman runs two sites for one company: this GSSA site and the integrated
 * logistics site. The logistics site lives on its own domain, which is not
 * connected yet — so the cross-link stays dormant until
 * `NEXT_PUBLIC_LOGISTICS_SITE_URL` is set, at which point every consumer below
 * renders the link automatically (no code change required).
 *
 * NEXT_PUBLIC_* vars are inlined at build time, so this is safe in both server
 * and client components.
 */
const RAW_LOGISTICS_SITE_URL = process.env.NEXT_PUBLIC_LOGISTICS_SITE_URL ?? '';

/**
 * Returns the configured logistics site URL, or `null` when unset/blank.
 * Consumers should hide the clickable link when this is `null`.
 */
export function getLogisticsSiteUrl(): string | null {
  const url = RAW_LOGISTICS_SITE_URL.trim();
  return url.length > 0 ? url : null;
}

/** Convenience flag for conditional rendering. */
export const isLogisticsSiteLinked = getLogisticsSiteUrl() !== null;
