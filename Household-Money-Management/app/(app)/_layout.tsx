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
import { Session } from '@supabase/supabase-js'
import { supabase } from '../../utils/supabase'
import { useState, useEffect } from 'react'
import { StyleSheet, View, Alert } from 'react-native'

export default function TabLayout({ session }: { session: Session }) {
  const [loading, setLoading] = useState(true)
  const [username, setUsername] = useState('')
  const [website, setWebsite] = useState('')
  const [avatarUrl, setAvatarUrl] = useState('')
  

  //useEffect(() => {
  //  if (session) getProfile()
  //}, [session])
//
  //async function getProfile() {
  //  try {
  //    setLoading(true)
  //    if (!session?.user) throw new Error('No user on the session!')
//
  //    const { data, error, status } = await supabase
  //      .from('profiles')
  //      .select(`username, website`)
  //      .eq('id', session?.user.id)
  //      .single()
  //    if (error && status !== 406) {
  //      throw error
  //    }
//
  //    if (data) {
  //      setUsername(data.username)
  //      setWebsite(data.website)
  //    }
  //  } catch (error) {
  //    if (error instanceof Error) {
  //      Alert.alert(error.message)
  //      console.log(error.message)
  //    }
  //  } finally {
  //    setLoading(false)
  //  }
  //}
//
  //async function updateProfile({
  //  username,
  //  website,
  //  avatar_url,
  //}: {
  //  username: string
  //  website: string
  //  avatar_url: string
  //}) {
  //  try {
  //    setLoading(true)
  //    if (!session?.user) throw new Error('No user on the session!')
//
  //    const updates = {
  //      id: session?.user.id,
  //      username,
  //      website,
  //      avatar_url,
  //      updated_at: new Date(),
  //    }
//
  //    const { error } = await supabase.from('profiles').upsert(updates)
//
  //    if (error) {
  //      throw error
  //    }
  //  } catch (error) {
  //    if (error instanceof Error) {
  //      Alert.alert(error.message)
  //    }
  //  } finally {
  //    setLoading(false)
  //  }
  //}
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
