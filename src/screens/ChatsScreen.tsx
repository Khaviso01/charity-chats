import React from 'react';
import { Alert, Platform, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Card from '../components/Card';
import Header from '../components/Header';
import ContactsRow from '../components/ContactsRow';
import SectionLabel from '../components/SectionLabel';
import ChatItem from '../components/ChatItem';
import Avatar from '../components/Avatar';
import GroupAvatar from '../components/GroupAvatar';
import useScale from '../hooks/useScale';
import { colors, MAX_CONTENT_WIDTH } from '../theme';
import { contacts, groupChats, recentChats } from '../data/chats';

const notify = (message: string): void => {
  if (Platform.OS === 'web') window.alert(message);
  else Alert.alert('Chats', message);
};

const NOTIFICATIONS = 6;

export default function ChatsScreen() {
  const s = useScale();
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.page}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          width: '100%',
          maxWidth: MAX_CONTENT_WIDTH,
          alignSelf: 'center',
          paddingHorizontal: s(7),
          paddingTop: s(5),
          paddingBottom: insets.bottom + s(16),
        }}
      >
        {/* Header + quick contacts */}
        <Card variant="header">
          <Header
            title="Chats"
            notifications={NOTIFICATIONS}
            onBack={() => notify('Back')}
            onProfile={() => notify('Profile')}
          />
          <ContactsRow contacts={contacts} onPress={(c) => notify(`Chat with ${c.name}`)} />
        </Card>

        {/* Recent chats */}
        <Card style={{ marginTop: s(7) }}>
          <SectionLabel>Recent Chat</SectionLabel>
          <View style={{ paddingBottom: s(17) }}>
            {recentChats.map((c) => (
              <ChatItem
                key={c.id}
                name={c.name}
                preview={c.preview}
                time={c.time}
                unread={c.unread}
                voice={c.voice}
                onPress={() => notify(`Open ${c.name}`)}
                leading={
                  <Avatar
                    uri={c.image}
                    fallback={c.fallback}
                    size={80}
                    bg={colors.avatar[c.bg]}
                    online={c.online}
                  />
                }
              />
            ))}
          </View>
        </Card>

        {/* Group chats */}
        <Card style={{ marginTop: s(7) }}>
          <SectionLabel>Group Chat</SectionLabel>
          <View style={{ paddingTop: s(5), paddingBottom: s(20) }}>
            {groupChats.map((g) => (
              <ChatItem
                key={g.id}
                name={g.name}
                preview={g.preview}
                time={g.time}
                unread={g.unread}
                onPress={() => notify(`Open ${g.name}`)}
                leading={<GroupAvatar members={g.members} extra={g.extra} size={80} />}
              />
            ))}
          </View>
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.background },
});
