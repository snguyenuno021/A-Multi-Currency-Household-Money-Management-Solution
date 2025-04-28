import { supabase } from '@/utils/supabase';

let saveddata = {};

async function getuserdata(user: any) {
      if (user?.email === undefined) return "";
      const data = await supabase.from('userdata').select('data').eq('id', user?.id)
      const data2 = await data.data
      return data2?.at(0)?.data
    }

export async function getData(user: any) {
    await getuserdata(user).then(result => {saveddata = result; return result})
}

export function getstoreddata() {
    return saveddata
}

export function isUpdated() {
    return Object.keys(saveddata).length !== 0;
}