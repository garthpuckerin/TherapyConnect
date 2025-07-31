import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const path = location.pathname;
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const needsScrollbar = (path === '/services' || path === '/contact') && isLargeScreen;

  useEffect(() => {
    // Check screen size on mount and on resize
    const checkScreenSize = () => {
      // 27" screen at 96 DPI is approximately 2560px width
      setIsLargeScreen(window.innerWidth >= 2560);
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);

    // Clean up event listener
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col ${needsScrollbar ? 'lg:overflow-y-scroll' : ''}`}>
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
