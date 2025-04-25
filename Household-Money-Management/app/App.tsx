import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'
import Auth from './loginsb'
import Account from './account'
import TabLayout from './(app)/_layout'
import { View } from 'react-native'
import { Session } from '@supabase/supabase-js'

export default function App() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <View>
      {session && session.user ? <TabLayout key={session.user.id} session={session} /> : <Auth />}
    </View>
  )
}