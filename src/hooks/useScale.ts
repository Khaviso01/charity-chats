import { useWindowDimensions } from 'react-native';
import { DESIGN_WIDTH, MAX_CONTENT_WIDTH } from '../theme';

export type Scale = ((n: number) => number) & { factor: number; contentWidth: number };

/**
 * Returns a function that scales a design-space size (400pt artboard)
 * to the current screen width, capped so it stays tidy on tablets / web.
 */
export default function useScale(): Scale {
  const { width } = useWindowDimensions();
  const contentWidth = Math.min(width, MAX_CONTENT_WIDTH);
  const factor = contentWidth / DESIGN_WIDTH;
  const scale = (n: number) => Math.round(n * factor * 10) / 10;
  return Object.assign(scale, { factor, contentWidth });
}
