import React, { ReactNode } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import useScale from '../hooks/useScale';
import { colors } from '../theme';

interface CardProps {
  variant?: 'header' | 'light';
  children?: ReactNode;
  style?: StyleProp<ViewStyle>;
}

/**
 * Big rounded, dark-outlined container used for each section of the screen.
 * - "header": grey gradient
 * - "light": white fading to pale grey-green on the right
 */
export default function Card({ variant = 'light', children, style }: CardProps) {
  const s = useScale();
  const isHeader = variant === 'header';
  const gradient: readonly [string, string, ...string[]] = isHeader
    ? [colors.headerTop, colors.headerMid, colors.headerBottom]
    : [colors.white, colors.white, colors.mintFade];

  return (
    <View
      style={[
        styles.shell,
        {
          borderRadius: s(32),
          borderWidth: isHeader ? 2 : 1.5,
          borderColor: colors.border,
        },
        style,
      ]}
    >
      <LinearGradient
        colors={gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  shell: { overflow: 'hidden', backgroundColor: colors.white },
});
