import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { getToken } from '../../utils/auth';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Stack, useRouter, SplashScreen } from 'expo-router';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const router = useRouter();
  // go back to /login if the user is not logged in
  const checkLogin = async () => {
      // TODO: Replace with actual API call for authentication
      console.log('Attempting login...');
      // Simulate successful login and getting a token
      let fakeApiToken = await getToken();
      if (fakeApiToken) { // Replace with actual token check
        console.log('Login successful!');
        // Navigate to the main app screen
        // Replace with actual navigation logic
      } else {
        console.log('Invalid token. Please log in again.');
        // Navigate to the login screen
        router.navigate('/login');
      }
    };
  // Check login status when the component mounts
  React.useEffect(() => {
    const handleLogin = async () => {
      await checkLogin();
    };
    handleLogin();
  }, []);
  return (
    <Tabs
      screenOptions={{
        //tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="accounts"
        options={{
          title: 'Accounts',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
