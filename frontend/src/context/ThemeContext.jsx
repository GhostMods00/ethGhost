'use client';

import React, { createContext, useContext } from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

// Create context
export const ThemeContext = createContext({});

/**
 * ThemeProvider component for managing application theme
 */
export function ThemeProvider({ children }) {
  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      {children}
    </NextThemesProvider>
  );
}

// Custom hook to access theme context
export const useThemeContext = () => useContext(ThemeContext);