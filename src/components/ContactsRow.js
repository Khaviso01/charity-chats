import React from 'react';
import { ScrollView } from 'react-native';
import ContactChip from './ContactChip';
import useScale from '../hooks/useScale';

export default function ContactsRow({ contacts, onPress }) {
  const s = useScale();
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: s(20),
        paddingTop: s(18),
        paddingBottom: s(20),
      }}
    >
      {contacts.map((c) => (
        <ContactChip key={c.id} contact={c} onPress={onPress} />
      ))}
    </ScrollView>
  );
}
