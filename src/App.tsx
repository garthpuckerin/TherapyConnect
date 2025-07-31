import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import ThemeToggle from './components/ThemeToggle';
import { ThemeProvider } from './context/ThemeContext';
import About from './pages/About';
import Book from './pages/Book';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Services from './pages/Services';

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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/book" element={<Book />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
      <ThemeToggle />
    </ThemeProvider>
  );
}

export default App;
