import { Stack } from 'expo-router';
import { Gesture, GestureHandlerRootView } from 'react-native-gesture-handler';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
