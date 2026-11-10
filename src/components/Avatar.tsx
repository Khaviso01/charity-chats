import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import useScale from '../hooks/useScale';
import { colors } from '../theme';

interface AvatarProps {
  uri?: string;
  fallback?: string;
  size?: number;
  bg?: string;
  online?: boolean;
}

/** Round avatar with optional coloured backdrop and online dot (sits on the circle's 45° edge). */
export default function Avatar({
  uri,
  fallback = '🙂',
  size = 52,
  bg = colors.chipBg,
  online = false,
}: AvatarProps) {
  const s = useScale();
  const [failed, setFailed] = useState(false);
  const px = s(size);
  const dot = s(Math.max(12, size * 0.16));
  const edgeOffset = (px / 2) * (1 - Math.SQRT1_2) - dot / 2;

  return (
    <View style={{ width: px, height: px }}>
      <View
        style={[
          styles.circle,
          { width: px, height: px, borderRadius: px / 2, backgroundColor: bg },
        ]}
      >
        {failed || !uri ? (
          <Text style={{ fontSize: px * 0.5 }}>{fallback}</Text>
        ) : (
          <Image
            source={{ uri }}
            style={{ width: px * 0.92, height: px * 0.92, marginTop: px * 0.06 }}
            onError={() => setFailed(true)}
            resizeMode="contain"
          />
        )}
      </View>
      {online && (
        <View
          style={[
            styles.dot,
            { width: dot, height: dot, borderRadius: dot / 2, top: edgeOffset, right: edgeOffset },
          ]}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  circle: { alignItems: 'center', justifyContent: 'center', overflow: 'hidden' },
  dot: {
    position: 'absolute',
    backgroundColor: colors.online,
    borderWidth: 1.5,
    borderColor: colors.border,
  },
});
