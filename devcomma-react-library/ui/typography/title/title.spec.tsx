import React from 'react';
import { render } from '@testing-library/react';
import { BasicTitle } from './title.composition';

it('renders with the correct text', () => {
  const { getByText } = render(<BasicTitle />);
  const rendered = getByText('hello world!');
  expect(rendered).toBeTruthy();
});
