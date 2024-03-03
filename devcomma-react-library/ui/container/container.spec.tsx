import React from 'react';
import { render } from '@testing-library/react';
import { Container } from './container';

describe('Container', () => {
  it('renders children correctly', () => {
    const { getByText } = render(
        <Container>
          <span>Test Child</span>
        </Container>
    );
    expect(getByText('Test Child')).toBeInTheDocument();
  });

  it('applies disable class based on props', () => {
    const { container } = render(
        <Container disable={{ mobile: true, tablet: true, desktop: false }}>
          <span>Test Content</span>
        </Container>
    );
    expect(container.firstChild).toHaveClass('disableMobile');
    expect(container.firstChild).toHaveClass('disableTablet');
    expect(container.firstChild).not.toHaveClass('disableDesktop');
  });

  it('applies custom class names', () => {
    const customClass = 'myCustomClass';
    const { container } = render(
        <Container className={customClass}>
          <span>Test Content</span>
        </Container>
    );
    expect(container.firstChild).toHaveClass(customClass);
  });

  it('sets max width styles correctly', () => {
    const { container } = render(
        <Container maxWidth={{ mobile: 320, tablet: 768, desktop: 1280 }}>
          <span>Test Content</span>
        </Container>
    );
    const firstChild = container.firstChild as HTMLElement;
    const style = window.getComputedStyle(firstChild);
    expect(style.getPropertyValue('--max-width-mobile')).toBe('320px');
    expect(style.getPropertyValue('--max-width-tablet')).toBe('768px');
    expect(style.getPropertyValue('--max-width-desktop')).toBe('1280px');
  });

  it('merges custom styles with max width styles', () => {
    const customStyles = { color: 'red' };
    const { container } = render(
        <Container style={customStyles} maxWidth={{ mobile: 320 }}>
          <span>Test Content</span>
        </Container>
    );
    const firstChild = container.firstChild as HTMLElement;
    const style = window.getComputedStyle(firstChild);
    expect(style.getPropertyValue('--max-width-mobile')).toBe('320px');
    expect(style.color).toBe('red');
  });
});
