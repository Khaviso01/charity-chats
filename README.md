# Charity Chats – React Native UI

Pixel-faithful React Native (Expo) implementation of the **"Charity App" chat screen** by Bogdan Nikitin for Nixtio (Dribbble). Built for Curriculum Task 1 (React Native Lesson 2: layout, styling, responsiveness).

**Download the build (APK):** `<ADD YOUR GOOGLE DRIVE LINK HERE>`

## Features
- Header with back button, title and profile button with lime notification badge
- Horizontally scrollable quick-contacts row with online indicators
- "Recent Chat" list: typing state, voice-message state, unread badges, timestamps
- "Group Chat" card with composite group avatar and `+6` counter
- Press / hover feedback on every button, chip and chat row
- Responsive: sizes scale from the 400pt design width via `useScale()`, content is capped at 480pt and centred on tablets / web

## Tech
Expo SDK 51 · React Native 0.74 · **TypeScript (strict)** · `expo-linear-gradient` · `@expo/vector-icons` · Outfit font (`@expo-google-fonts/outfit`, closest match to the design's Google Sans) · avatars from DiceBear (emoji fallback if offline)

## Project structure
```
App.tsx                 entry, loads fonts
src/theme/              colours, fonts, design constants
src/types/              shared TS types (Contact, RecentChat, GroupChat, PressState)
src/hooks/useScale.ts   responsive scaling helper
src/data/chats.ts       typed mock data
src/components/         Avatar, Badge, Card, IconButton, Header,
                        ContactChip, ContactsRow, SectionLabel,
                        ChatItem, GroupAvatar   (all reusable)
src/screens/ChatsScreen.tsx
```
Run `npm run typecheck` to verify types.

## Run it
**Prerequisites:** [Node.js 18+](https://nodejs.org), Git, and the **Expo Go** app on your phone (or an Android emulator / iOS simulator).

```bash
git clone <YOUR_REPO_URL>
cd charity-chat-app
npm install
npx expo start
```
- **Phone:** scan the QR code with Expo Go (same Wi-Fi network).
- **Android emulator:** press `a` · **iOS simulator (macOS):** press `i`
- **Browser:** press `w` (or `npm run web`)

## Build the APK
```bash
npm install -g eas-cli
eas login
eas build -p android --profile preview
```
Download the `.apk` from the link EAS prints, upload it to Google Drive, set sharing to "Anyone with the link", and paste the link at the top of this README.

## Notes
- Avatars are stand-ins for the 3D illustrations in the design; replace `image` URLs in `src/data/chats.js` with local assets to match exactly.
- If Expo Go warns about version mismatch, run `npx expo install --fix`.

## Troubleshooting
- **EAS build fails with `splashscreen_background not found`:** make sure `expo-splash-screen` is installed (`npx expo install expo-splash-screen`) and `app.json` has the `splash.backgroundColor` entry (already included).
