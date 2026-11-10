import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import IconButton from './IconButton';
import Badge from './Badge';
import useScale from '../hooks/useScale';
import { colors, fonts } from '../theme';

interface HeaderProps {
  title: string;
  notifications: number;
  onBack?: () => void;
  onProfile?: () => void;
}

export default function Header({ title, notifications, onBack, onProfile }: HeaderProps) {
  const s = useScale();
  const insets = useSafeAreaInsets();
  // 42pt in the design; grows on phones with a notch so buttons clear the status bar.
  const paddingTop = Math.max(s(42), insets.top + s(18));

  return (
    <View style={[styles.row, { paddingHorizontal: s(21), paddingTop }]}>
      <IconButton label="Go back" onPress={onBack}>
        <Ionicons name="caret-back" size={s(16)} color={colors.ink} />
      </IconButton>

      <Text style={[styles.title, { fontSize: s(20) }]}>{title}</Text>

      <IconButton
        label="Profile"
        onPress={onProfile}
        badge={
          <Badge
            count={notifications}
            style={{ position: 'absolute', top: -s(7), right: -s(4) }}
          />
        }
      >
        <Ionicons name="person" size={s(19)} color={colors.ink} />
      </IconButton>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  title: { fontFamily: fonts.semibold, color: colors.ink },
});
