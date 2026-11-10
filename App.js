import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  useFonts,
  Outfit_400Regular,
  Outfit_500Medium,
  Outfit_600SemiBold,
} from '@expo-google-fonts/outfit';
import ChatsScreen from './src/screens/ChatsScreen';

export default function App() {
  const [loaded] = useFonts({ Outfit_400Regular, Outfit_500Medium, Outfit_600SemiBold });
  if (!loaded) return null;

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <ChatsScreen />
    </SafeAreaProvider>
  );
}
