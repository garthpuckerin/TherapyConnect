import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { inverted, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 bg-primary-600 text-white rounded-full shadow-lg p-3 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-400 transition-colors"
      aria-label={inverted ? 'Switch to Default Theme' : 'Switch to Inverted Theme'}
      title={inverted ? 'Switch to Default Theme' : 'Switch to Inverted Theme'}
      type="button"
    >
      {inverted ? (
        // Sun icon
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 7.07l-1.41-1.41M6.34 6.34L4.93 4.93m12.02 0l-1.41 1.41M6.34 17.66l-1.41 1.41" />
        </svg>
      ) : (
        // Moon icon
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
