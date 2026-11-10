import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import Avatar from './Avatar';
import useScale from '../hooks/useScale';
import { colors, fonts } from '../theme';
import type { Contact, PressState } from '../types';

interface ContactChipProps {
  contact: Contact;
  onPress?: (contact: Contact) => void;
}

/** Rounded tile used in the horizontal "quick contacts" row. */
export default function ContactChip({ contact, onPress }: ContactChipProps) {
  const s = useScale();
  return (
    <Pressable
      onPress={() => onPress?.(contact)}
      accessibilityRole="button"
      accessibilityLabel={`Open chat with ${contact.name}`}
      style={({ pressed, hovered }: PressState) => [
        styles.chip,
        {
          width: s(84),
          height: s(96),
          borderRadius: s(28),
          marginRight: s(8),
          backgroundColor: pressed || hovered ? colors.chipBgPressed : colors.chipBg,
        },
      ]}
    >
      <Avatar
        uri={contact.image}
        fallback={contact.fallback}
        size={40}
        bg="transparent"
        online={contact.online}
      />
      <Text style={[styles.name, { fontSize: s(15), marginTop: s(10) }]}>{contact.name}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  chip: { alignItems: 'center', justifyContent: 'center' },
  name: { fontFamily: fonts.medium, color: colors.ink },
});
