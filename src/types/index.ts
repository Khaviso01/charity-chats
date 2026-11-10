import type { PressableStateCallbackType } from 'react-native';

/** Pressable state + `hovered`, which React Native Web provides but RN's types omit. */
export type PressState = PressableStateCallbackType & { hovered?: boolean };

export type AvatarColor = 'purple' | 'yellow' | 'green' | 'pink';

export interface Contact {
  id: string;
  name: string;
  online: boolean;
  image: string;
  fallback: string;
}

export interface RecentChat {
  id: string;
  name: string;
  preview: string;
  time: string;
  unread?: number;
  online?: boolean;
  voice?: boolean;
  bg: AvatarColor;
  image: string;
  fallback: string;
}

export interface GroupChat {
  id: string;
  name: string;
  preview: string;
  time: string;
  unread?: number;
  extra: number;
  /** Exactly four member avatars: top-left, top-right, bottom-left, centre. */
  members: [string, string, string, string];
}
