import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Home from '../src/pages/Home';

describe('Home Page', () => {
  it('renders hero section and CTA', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>,
    );
    expect(screen.getByRole('heading', { name: /your journey to healing/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /book a session/i })).toBeInTheDocument();
  });
});
