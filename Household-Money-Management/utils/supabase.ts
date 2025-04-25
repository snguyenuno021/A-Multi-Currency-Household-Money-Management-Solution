import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://glsfxsjbhpwrtfwzdiym.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdsc2Z4c2piaHB3cnRmd3pkaXltIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1NDM0OTMsImV4cCI6MjA2MTExOTQ5M30.FyzIQp-__K8ULGBdNUifnNXLcQ0P6VTWd732yVmxCgs';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
