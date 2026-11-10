import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import useScale from '../hooks/useScale';

/** Round translucent button; darkens when pressed / hovered (web). */
export default function IconButton({ children, onPress, badge, size = 44, label }) {
  const s = useScale();
  const px = s(size);
  return (
    <View style={{ width: px, height: px }}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={label}
        onPress={onPress}
        style={({ pressed, hovered }) => [
          styles.btn,
          {
            width: px,
            height: px,
            borderRadius: px / 2,
            backgroundColor: pressed
              ? 'rgba(0,0,0,0.22)'
              : hovered
              ? 'rgba(0,0,0,0.16)'
              : 'rgba(0,0,0,0.09)',
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
