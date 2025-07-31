import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Book from '../src/pages/Book';

describe('Book Page', () => {
  it('renders Calendly iframe', () => {
    render(
      <BrowserRouter>
        <Book />
      </BrowserRouter>,
    );
    expect(screen.getByTitle(/book a therapy session/i)).toBeInTheDocument();
  });
});
