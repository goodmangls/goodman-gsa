'use client';

import { useEffect, useRef } from 'react';
import Intercom, { shutdown } from '@intercom/messenger-js-sdk';
import { buildIntercomSettings, INTERCOM_APP_ID, type IntercomUser } from '@/lib/intercom';

type IntercomMessengerProps = {
  /** Pass when the visitor is authenticated; omit for anonymous visitors. */
  user?: IntercomUser | null;
};

/**
 * Boots Intercom Messenger on the client. Re-identifies when `user` changes;
 * clears the session when `user` becomes null (e.g. logout).
 */
export default function IntercomMessenger({ user }: IntercomMessengerProps) {
  const previousUserIdRef = useRef<string | null>(null);

  useEffect(() => {
    if (!INTERCOM_APP_ID) return;

    const nextUserId = user?.id != null && user.id !== '' ? String(user.id) : null;
    const hadUser = previousUserIdRef.current != null;
    const hasUser = nextUserId != null;

    if (hadUser && !hasUser) {
      shutdown();
    }

    Intercom(buildIntercomSettings(user ?? null));
    previousUserIdRef.current = nextUserId;
  }, [user]);

  return null;
}
