import { createContext } from 'react';

export type ResponsiveContextType = {
    responsive?: {
        breakpoints?: {
            mobile?: number;
            tablet?: number;
            desktop?: number;
        };
        container?: {
            maxWidth: {
                mobile?: number;
                tablet?: number;
                desktop?: number;
            };
        };
    };
};

export const DEFAULT_RESPONSIVE_CONTEXT: ResponsiveContextType = {
    responsive: {
        breakpoints: {
            mobile: 568,
            tablet: 767,
            desktop: 1339,
        },
        container: {
            maxWidth: {
                mobile: 311,
                tablet: 573,
                desktop: 1110,
            },
        },
    },
};

export const ResponsiveContext = createContext<ResponsiveContextType>(DEFAULT_RESPONSIVE_CONTEXT);
