import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useScale from '../hooks/useScale';
import { colors, fonts } from '../theme';

/** Lime counter pill with dark outline (unread / notification count). */
export default function Badge({ count, size = 22, style }) {
  const s = useScale();
  const px = s(size);
  return (
    <View
      style={[
        styles.badge,
        { minWidth: px, height: px, borderRadius: px / 2, paddingHorizontal: s(4) },
        style,
      ]}
    >
      <Text style={[styles.text, { fontSize: s(12) }]}>{count}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    backgroundColor: colors.lime,
    borderWidth: 1.5,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { fontFamily: fonts.medium, color: colors.ink },
});
