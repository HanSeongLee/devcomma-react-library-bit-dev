import React from 'react';
import { render, screen } from '@testing-library/react';
import { DEFAULT_RESPONSIVE_CONTEXT } from './responsive-context';
import { ResponsiveProvider } from './responsive-context-provider';

describe('ResponsiveProvider and ResponsiveContainer', () => {
  it('provides default responsive context when none is specified', () => {
    render(
        <ResponsiveProvider>
          <div>Test Child</div>
        </ResponsiveProvider>
    );

    const container = screen.getByTestId('responsive-container');
    expect(container).toHaveStyle(`--max-width-mobile: ${DEFAULT_RESPONSIVE_CONTEXT?.responsive?.container?.maxWidth.mobile}px`);
    expect(container).toHaveStyle(`--max-width-tablet: ${DEFAULT_RESPONSIVE_CONTEXT?.responsive?.container?.maxWidth.tablet}px`);
    expect(container).toHaveStyle(`--max-width-desktop: ${DEFAULT_RESPONSIVE_CONTEXT?.responsive?.container?.maxWidth.desktop}px`);
  });

  it('overrides default responsive context when custom values are provided', () => {
    const customResponsiveContext = {
      responsive: {
        breakpoints: {
          mobile: 480,
          tablet: 800,
          desktop: 1200,
        },
        container: {
          maxWidth: {
            mobile: 300,
            tablet: 500,
            desktop: 1100,
          },
        },
      },
    };

    render(
        <ResponsiveProvider responsive={customResponsiveContext.responsive}>
          <div>Test Child</div>
        </ResponsiveProvider>
    );

    const container = screen.getByTestId('responsive-container');
    expect(container).toHaveAttribute('data-mobile-breakpoint', '480');
    expect(container).toHaveAttribute('data-tablet-breakpoint', '800');
    expect(container).toHaveAttribute('data-desktop-breakpoint', '1200');
    expect(container).toHaveStyle(`--max-width-mobile: 300px`);
    expect(container).toHaveStyle(`--max-width-tablet: 500px`);
    expect(container).toHaveStyle(`--max-width-desktop: 1100px`);
  });
});
