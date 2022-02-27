import React from 'react';
import { render } from '@testing-library/react';
import { App } from './app.component';

test('renders HELLO word', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/HELLO/i);
  expect(linkElement).toBeInTheDocument();
});

 