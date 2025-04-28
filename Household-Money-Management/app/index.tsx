import { useState, useEffect } from 'react'
import { supabase } from '../utils/supabase'
import { router } from 'expo-router'

export default function Index() {
    useEffect(() => { 
        supabase.auth.getSession().then(({ data: { session } }) => {            if (session) router.replace("./(tabs)/home");
    })

    supabase.auth.onAuthStateChange(async (event, session) => {
        if (event === 'PASSWORD_RECOVERY') {
            router.replace("./(auth)/forgotpassword")
        }
        if (session) {
            router.replace("/home")
        }
        else {
            router.replace("/loginsb")
        }

    });

    }, []);
}