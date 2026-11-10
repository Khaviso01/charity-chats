import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Badge from './Badge';
import useScale from '../hooks/useScale';
import { colors, fonts } from '../theme';

/**
 * One conversation row. `leading` is the avatar element so the same row
 * works for both single chats (Avatar) and group chats (GroupAvatar).
 */
export default function ChatItem({ leading, name, preview, time, unread, voice, onPress }) {
  const s = useScale();
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`Open chat ${name}`}
      style={({ pressed, hovered }) => [
        styles.row,
        {
          paddingHorizontal: s(20),
          paddingVertical: s(10),
          backgroundColor: pressed || hovered ? colors.rowPressed : 'transparent',
        },
      ]}
    >
      {leading}

      <View style={[styles.body, { marginLeft: s(16) }]}>
        <Text numberOfLines={1} style={[styles.name, { fontSize: s(20) }]}>
          {name}
        </Text>
        <View style={[styles.previewRow, { marginTop: s(8) }]}>
          {voice && (
            <Ionicons
              name="play-circle"
              size={s(20)}
              color={colors.ink}
              style={{ marginRight: s(6) }}
            />
          )}
          <Text
            numberOfLines={2}
            style={[styles.preview, { fontSize: s(14), lineHeight: s(20) }, voice && { color: colors.ink, fontFamily: fonts.medium }]}
          >
            {preview}
          </Text>
        </View>
      </View>

      <View style={[styles.meta, { marginLeft: s(8) }]}>
        <Text style={[styles.time, { fontSize: s(14) }]}>{time}</Text>
        {unread ? <Badge count={unread} style={{ marginTop: s(10) }} /> : null}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center' },
  body: { flex: 1, justifyContent: 'center' },
  name: { fontFamily: fonts.semibold, color: colors.ink },
  previewRow: { flexDirection: 'row', alignItems: 'center' },
  preview: { fontFamily: fonts.regular, color: colors.muted, flexShrink: 1 },
  meta: { alignItems: 'flex-end', alignSelf: 'stretch', paddingTop: 6 },
  time: { fontFamily: fonts.regular, color: colors.muted },
});
