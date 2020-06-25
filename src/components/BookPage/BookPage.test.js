import React from 'react';
import { render } from '@testing-library/react';
import BookPage from './BookPage';

test('renders learn react link', () => {
  const { getByText } = render(<BookPage />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
