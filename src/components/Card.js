import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import useScale from '../hooks/useScale';
import { colors } from '../theme';

/**
 * Big rounded container used for each section of the screen.
 * - variant "header": dark outline + grey gradient
 * - variant "light": white to pale-mint gradient with soft border
 */
export default function Card({ variant = 'light', children, style }) {
  const s = useScale();
  const isHeader = variant === 'header';
  const gradient = isHeader
    ? [colors.headerTop, '#D5D9D5', colors.headerBottom]
    : [colors.white, colors.white, colors.mintFade];

  return (
    <View
      style={[
        styles.shell,
        {
          borderRadius: s(34),
          borderWidth: isHeader ? 2 : 1,
          borderColor: isHeader ? colors.border : '#D8DDD8',
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
