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
      <Stack.Screen
        name="index" // This refers to app/index.tsx
        options={{
          title: 'Login', // Set the desired header title here
          // You might also want to hide the header if your component
          // already has a prominent "Login" title in its content:
          headerShown: false,
        }}
      />
      {/* Add configurations for other screens here */}
      {/* e.g., <Stack.Screen name="home" options={{ title: 'Home' }} /> */}
    </Stack>
  );
}