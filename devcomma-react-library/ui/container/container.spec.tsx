import React from 'react';
import { render } from '@testing-library/react';
import { BasicContainer } from './container.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicContainer />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
