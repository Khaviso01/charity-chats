import React from 'react';
import { Text } from 'react-native';
import useScale from '../hooks/useScale';
import { colors, fonts } from '../theme';

export default function SectionLabel({ children }) {
  const s = useScale();
  return (
    <Text
      style={{
        fontFamily: fonts.medium,
        fontSize: s(14),
        color: colors.label,
        marginLeft: s(20),
        marginTop: s(22),
        marginBottom: s(6),
      }}
    >
      {children}
    </Text>
  );
}
