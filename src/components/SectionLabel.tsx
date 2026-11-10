import React, { ReactNode } from 'react';
import { Text } from 'react-native';
import useScale from '../hooks/useScale';
import { colors, fonts } from '../theme';

export default function SectionLabel({ children }: { children: ReactNode }) {
  const s = useScale();
  return (
    <Text
      style={{
        fontFamily: fonts.medium,
        fontSize: s(13.5),
        lineHeight: s(18),
        color: colors.label,
        marginLeft: s(21),
        marginTop: s(27),
        marginBottom: s(6),
      }}
    >
      {children}
    </Text>
  );
}
