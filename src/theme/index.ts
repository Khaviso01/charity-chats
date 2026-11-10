import type { AvatarColor } from '../types';

export const colors = {
  background: '#EEF1EE',
  white: '#FFFFFF',
  ink: '#0E0E0E',
  muted: '#6B6B6B',
  label: '#555555',
  border: '#111111',
  lime: '#E3F56A',
  online: '#8BE06B',
  headerTop: '#D8D8D8',
  headerMid: '#D3D8D3',
  headerBottom: '#C6CCC6',
  chipBg: '#F2F6F1',
  chipBgPressed: '#E2EADF',
  rowPressed: '#EEF3EC',
  mintFade: '#D2DAD2',
  groupBg: '#CDEAF6',
  avatar: {
    purple: '#D8B9F7',
    yellow: '#FFD95C',
    green: '#8CE4A0',
    pink: '#E88FCB',
  } satisfies Record<AvatarColor, string>,
} as const;

export const fonts = {
  regular: 'Outfit_400Regular',
  medium: 'Outfit_500Medium',
  semibold: 'Outfit_600SemiBold',
} as const;

/** The design artboard is 400pt wide. */
export const DESIGN_WIDTH = 400;
export const MAX_CONTENT_WIDTH = 480;
