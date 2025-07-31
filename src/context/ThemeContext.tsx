import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextType {
  inverted: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Key for localStorage
const THEME_STORAGE_KEY = 'therapy-connect-theme';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Initialize state with the value from localStorage if it exists, or default to false (light theme)
  const [inverted, setInverted] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
      return savedTheme === 'true';
    }
    return false;
  });

  // Update the theme class on the body and save to localStorage when theme changes
  useEffect(() => {
    document.body.setAttribute('data-theme', inverted ? 'inverted' : '');
    // Save the theme preference to localStorage
    localStorage.setItem(THEME_STORAGE_KEY, String(inverted));
  }, [inverted]);

  const toggleTheme = () => setInverted((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ inverted, toggleTheme }}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within ThemeProvider');
  return context;
};
