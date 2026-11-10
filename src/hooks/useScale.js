import { useWindowDimensions } from 'react-native';
import { DESIGN_WIDTH, MAX_CONTENT_WIDTH } from '../theme';

/**
 * Returns a function that scales a design-space size (400pt wide artboard)
 * to the current screen width, capped so it stays tidy on tablets / web.
 */
export default function useScale() {
  const { width } = useWindowDimensions();
  const contentWidth = Math.min(width, MAX_CONTENT_WIDTH);
  const factor = contentWidth / DESIGN_WIDTH;
  const s = (n) => Math.round(n * factor * 10) / 10;
  s.factor = factor;
  s.contentWidth = contentWidth;
  return s;
}
