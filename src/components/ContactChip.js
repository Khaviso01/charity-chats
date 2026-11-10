import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Avatar from './Avatar';
import useScale from '../hooks/useScale';
import { colors, fonts } from '../theme';

/** Rounded tile used in the horizontal "quick contacts" row. */
export default function ContactChip({ contact, onPress }) {
  const s = useScale();
  return (
    <Pressable
      onPress={() => onPress?.(contact)}
      accessibilityRole="button"
      accessibilityLabel={`Open chat with ${contact.name}`}
      style={({ pressed, hovered }) => [
        styles.chip,
        {
          width: s(90),
          height: s(104),
          borderRadius: s(26),
          marginRight: s(10),
          backgroundColor: pressed || hovered ? colors.chipBgPressed : colors.chipBg,
        },
      ]}
    >
      <Avatar
        uri={contact.image}
        fallback={contact.fallback}
        size={44}
        bg="transparent"
        online={contact.online}
      />
      <Text style={[styles.name, { fontSize: s(15), marginTop: s(8) }]}>{contact.name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: { alignItems: 'center', justifyContent: 'center' },
  name: { fontFamily: fonts.medium, color: colors.ink },
});
