import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import About from '../src/pages/About';

describe('About Page', () => {
  it('renders therapist bio and credentials', () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>,
    );
    expect(screen.getByRole('heading', { name: /meet dr. sarah johnson/i })).toBeInTheDocument();
    expect(screen.getAllByText(/licensed professional counselor/i)).toHaveLength(2);
  });
});
