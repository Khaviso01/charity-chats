import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import IconButton from './IconButton';
import Badge from './Badge';
import useScale from '../hooks/useScale';
import { colors, fonts } from '../theme';

export default function Header({ title, notifications, onBack, onProfile }) {
  const s = useScale();
  return (
    <View style={[styles.row, { paddingHorizontal: s(20), paddingTop: s(20) }]}>
      <IconButton label="Go back" onPress={onBack}>
        <Ionicons name="caret-back" size={s(18)} color={colors.ink} />
      </IconButton>

      <Text style={[styles.title, { fontSize: s(22) }]}>{title}</Text>

      <IconButton
        label="Profile"
        onPress={onProfile}
        badge={
          <Badge
            count={notifications}
            size={22}
            style={{ position: 'absolute', top: -s(8), right: -s(6) }}
          />
        }
      >
        <Ionicons name="person" size={s(20)} color={colors.ink} />
      </IconButton>
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  title: { fontFamily: fonts.semibold, color: colors.ink },
});
