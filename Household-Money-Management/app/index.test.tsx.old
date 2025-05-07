// app/index.test.tsx
import { render } from '@testing-library/react-native';
import Index from './index';
import { supabase } from '../utils/supabase';

jest.mock('../utils/supabase', () => ({
  supabase: {
    auth: {
      getSession: jest.fn(() =>
        Promise.resolve({ data: { session: null } })
      ),
      onAuthStateChange: jest.fn(),
    },
  },
}));

jest.mock('expo-router', () => ({
  router: {
    replace: jest.fn(),
  },
}));

describe('Index component', () => {
  it('renders without crashing', async () => {
    render(<Index />);
    expect(supabase.auth.getSession).toHaveBeenCalled();
  });
});

