import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Contact from '../src/pages/Contact';

describe('Contact Page', () => {
  it('renders contact form fields', () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>,
    );
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });
});
