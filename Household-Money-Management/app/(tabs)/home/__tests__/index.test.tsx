import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import SettingsPage from '../account';
import GraphScreen from '../index';
import { supabase } from '@/utils/supabase';

jest.mock('@/utils/supabase', () => ({
  supabase: {
    auth: {
      signOut: jest.fn().mockResolvedValue({ error: null }),
      getUser: jest.fn().mockResolvedValue({ data: { user: { id: '123' } } }),
    },
  },
}));

jest.mock('@/utils/data', () => ({
  isUpdated: jest.fn(() => false),
  getData: jest.fn(() => Promise.resolve()),
  getstoreddata: jest.fn(() => ({
    food: 10,
    rent: 20,
    entertainment: 30,
    travel: 40,
    health: 50,
    other1: 60,
    other2: 70,
    other3: 80,
    extra: 90,
  })),
}));

jest.mock('react-native/Libraries/Alert/Alert', () => ({
  alert: jest.fn(),
}));

describe('SettingsPage (account.tsx)', () => {
  it('calls supabase.auth.signOut on logout', async () => {
    const { getByText } = render(<SettingsPage />);
    const logoutButton = await waitFor(() => getByText('logout'));
    fireEvent.press(logoutButton);
    expect(supabase.auth.signOut).toHaveBeenCalled();
  });
});

describe('GraphScreen (index.tsx)', () => {
  it('shows loading screen initially', () => {
    const { getByText } = render(<GraphScreen />);
    expect(getByText('Loading...')).toBeTruthy();
  });

  it('renders chart titles after loading', async () => {
    const { findByText } = render(<GraphScreen />);
    expect(await findByText('Chart Examples')).toBeTruthy();
    expect(await findByText('Line Chart')).toBeTruthy();
  });
});
