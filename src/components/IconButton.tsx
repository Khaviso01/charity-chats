import React, { ReactNode } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import useScale from '../hooks/useScale';
import type { PressState } from '../types';

interface IconButtonProps {
  children: ReactNode;
  onPress?: () => void;
  badge?: ReactNode;
  size?: number;
  label?: string;
}

/** Round translucent button; darkens when pressed / hovered (web). */
export default function IconButton({ children, onPress, badge, size = 40, label }: IconButtonProps) {
  const s = useScale();
  const px = s(size);
  return (
    <View style={{ width: px, height: px }}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={label}
        onPress={onPress}
        style={({ pressed, hovered }: PressState) => [
          styles.btn,
          {
            width: px,
            height: px,
            borderRadius: px / 2,
            backgroundColor: pressed
              ? 'rgba(0,0,0,0.24)'
              : hovered
              ? 'rgba(0,0,0,0.18)'
              : 'rgba(0,0,0,0.11)',
          },
        ]}
      >
        {children}
      </Pressable>
      {badge}
    </View>
  );
}

const styles = StyleSheet.create({
  btn: { alignItems: 'center', justifyContent: 'center' },
});
