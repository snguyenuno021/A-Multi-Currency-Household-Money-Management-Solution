import AsyncStorage from '@react-native-async-storage/async-storage';

const ACCESS_TOKEN_KEY = 'myAppAccessTokenSecure';

export const storeToken = async (token: string): Promise<void> => {
    try {
      await AsyncStorage.setItem(ACCESS_TOKEN_KEY, token);
      console.log('Token stored successfully!');
    } catch (error) {
      console.error('Failed to store the token:', error);
    }
  };
  
  export const getToken = async (): Promise<string | null> => {
    try {
      const token = await AsyncStorage.getItem(ACCESS_TOKEN_KEY);
      return token;
  
    } catch (error) {
      console.error('Failed to retrieve the token:', error);
      return null;
    }
  };