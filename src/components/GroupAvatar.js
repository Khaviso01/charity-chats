import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Avatar from './Avatar';
import useScale from '../hooks/useScale';
import { colors, fonts } from '../theme';

/** Rounded-square group avatar: member faces around a "+N" counter. */
export default function GroupAvatar({ members, extra, size = 80 }) {
  const s = useScale();
  const px = s(size);
  const small = size * 0.4;
  const [a, b, c, d] = members;

  return (
    <View style={{ width: px, height: px }}>
      <View
        style={[
          styles.square,
          { width: px * 0.86, height: px * 0.86, borderRadius: s(22), top: px * 0.14, left: px * 0.07 },
        ]}
      />
      <View style={{ position: 'absolute', top: 0, left: 0 }}>
        <Avatar uri={a} size={small} bg={colors.chipBg} />
      </View>
      <View style={{ position: 'absolute', top: 0, right: 0 }}>
        <Avatar uri={b} size={small} bg={colors.avatar.purple} />
      </View>
      <View style={{ position: 'absolute', bottom: 0, left: 0 }}>
        <Avatar uri={c} size={small} bg="#3C3C3C" />
      </View>
      <View style={{ position: 'absolute', top: px * 0.3, left: px * 0.3 }}>
        <Avatar uri={d} size={small * 1.1} bg="transparent" />
      </View>
      <Text
        style={[
          styles.extra,
          { fontSize: s(15), bottom: px * 0.14, right: px * 0.2 },
        ]}
      >
        +{extra}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  square: { position: 'absolute', backgroundColor: colors.groupBg },
  extra: { position: 'absolute', fontFamily: fonts.semibold, color: colors.ink },
});
