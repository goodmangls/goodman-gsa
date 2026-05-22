export const INTERCOM_APP_ID =
  process.env.NEXT_PUBLIC_INTERCOM_APP_ID ?? 'k5z51xs2';

/** Distance from viewport edges (Intercom minimum: 20). */
export const INTERCOM_LAUNCHER_PADDING = 24;

/** User fields for Intercom when the visitor is logged in. */
export type IntercomUser = {
  id: string | number;
  name?: string;
  email?: string;
  /** Unix timestamp in seconds (e.g. 1704067200). */
  createdAt?: number;
};

export type IntercomBootSettings = {
  app_id: string;
  alignment?: 'left' | 'right';
  horizontal_padding?: number;
  vertical_padding?: number;
  user_id?: string;
  name?: string;
  email?: string;
  created_at?: number;
};

export function buildIntercomSettings(
  user?: IntercomUser | null,
): IntercomBootSettings {
  const settings: IntercomBootSettings = {
    app_id: INTERCOM_APP_ID,
    alignment: 'right',
    horizontal_padding: INTERCOM_LAUNCHER_PADDING,
    vertical_padding: INTERCOM_LAUNCHER_PADDING,
  };

  if (user?.id != null && user.id !== '') {
    settings.user_id = String(user.id);
    if (user.name) settings.name = user.name;
    if (user.email) settings.email = user.email;
    if (user.createdAt != null) settings.created_at = user.createdAt;
  }

  return settings;
}
