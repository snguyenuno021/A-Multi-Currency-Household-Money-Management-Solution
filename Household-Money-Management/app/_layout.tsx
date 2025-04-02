import { Stack } from 'expo-router';
import React from 'react';

export const unstable_settings = {
  // Ensure any route can link back to `/`
  initialRouteName: 'screens/index',
};

export default function RootLayout() {
  return (
    <Stack>
      {/* Configure the 'index' screen (your login page) */}
      <Stack.Screen name="(app)" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)/(auth)/index" options={{ headerShown: false }} />
      {/* Add configurations for other screens here */}
      {/* e.g., <Stack.Screen name="home" options={{ title: 'Home' }} /> */}
    </Stack>
  );
}