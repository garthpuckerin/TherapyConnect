import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';

// Lazy load route components
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Book = lazy(() => import('./pages/Book'));
const Contact = lazy(() => import('./pages/Contact'));

const NotFound: React.FC = () => (
  <div className="section-padding text-center">
    <h1 className="text-4xl font-bold mb-4">404 – Page Not Found</h1>
    <p className="text-lg text-gray-600">
      Sorry, we couldn&apos;t find the page you were looking for.
    </p>
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Layout>
        <Suspense
          fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="animate-pulse text-xl">Loading...</div>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/book" element={<Book />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <ThemeToggle />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
