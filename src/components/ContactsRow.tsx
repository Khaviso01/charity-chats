import React from 'react';
import { ScrollView } from 'react-native';
import ContactChip from './ContactChip';
import useScale from '../hooks/useScale';
import type { Contact } from '../types';

interface ContactsRowProps {
  contacts: Contact[];
  onPress?: (contact: Contact) => void;
}

export default function ContactsRow({ contacts, onPress }: ContactsRowProps) {
  const s = useScale();
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: s(21),
        paddingTop: s(20),
        paddingBottom: s(19),
      }}
    >
      {contacts.map((c) => (
        <ContactChip key={c.id} contact={c} onPress={onPress} />
      ))}
    </ScrollView>
  );
}
