import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Services from '../src/pages/Services';

describe('Services Page', () => {
  it('renders individual and couples therapy descriptions', () => {
    render(
      <BrowserRouter>
        <Services />
      </BrowserRouter>,
    );
    expect(screen.getByText(/individual therapy/i)).toBeInTheDocument();
    expect(screen.getByText(/couples therapy/i)).toBeInTheDocument();
  });
});
