import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Book a Session', href: '/book' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <nav className="container-custom" aria-label="Main navigation">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-md p-1"
            aria-label="TherapyConnect Home"
          >
            <div
              className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center"
              aria-hidden="true"
            >
              <span className="text-white font-bold text-lg">T</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">TherapyConnect</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-8">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className={`font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-md px-2 py-1 ${
                      isActive(item.href)
                        ? 'text-primary-600 font-semibold'
                        : 'text-gray-700 hover:text-primary-600'
                    }`}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <button
              onClick={useTheme().toggleTheme}
              className="ml-4 px-3 py-1 rounded-full bg-gray-100 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              aria-label={`Switch to ${useTheme().inverted ? 'light' : 'dark'} theme`}
              title={`Switch to ${useTheme().inverted ? 'light' : 'dark'} theme`}
            >
              {useTheme().inverted ? (
                <span aria-hidden="true">☀️ Light Theme</span>
              ) : (
                <span aria-hidden="true">🌙 Dark Theme</span>
              )}
              <span className="sr-only">
                {useTheme().inverted ? 'Switch to light theme' : 'Switch to dark theme'}
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-haspopup="true"
            aria-label={isMenuOpen ? 'Close main menu' : 'Open main menu'}
          >
            <span className="sr-only">{isMenuOpen ? 'Close main menu' : 'Open main menu'}</span>
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="mobile-menu-button"
        >
          <div className="px-2 pt-2 pb-3">
            <ul className="space-y-1">
              {navigation.map((item) => (
                <li key={item.name} role="none">
                  <Link
                    to={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                      isActive(item.href)
                        ? 'bg-primary-50 text-primary-700 font-semibold'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                    role="menuitem"
                    tabIndex={isMenuOpen ? 0 : -1}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-200">
              <button
                onClick={() => {
                  useTheme().toggleTheme();
                  setIsMenuOpen(false);
                }}
                className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                role="menuitem"
                tabIndex={isMenuOpen ? 0 : -1}
              >
                <span>Theme</span>
                <span className="ml-2">{useTheme().inverted ? '☀️ Light' : '🌙 Dark'}</span>
                <span className="sr-only">
                  {useTheme().inverted ? 'Switch to light theme' : 'Switch to dark theme'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
