'use client'; 
import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from './lib/store';

// StoreProvider component that will wrap your entire app
const StoreProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
