import type { CSSProperties, ReactNode } from 'react';
import { DEFAULT_RESPONSIVE_CONTEXT, ResponsiveContext, ResponsiveContextType, } from './responsive-context';
import { useResponsive } from './use-responsive';

export type ResponsiveProviderProps = {
    children: ReactNode;
} & ResponsiveContextType;

const ResponsiveContainer = ({ children }: { children: ReactNode }) => {
    const { responsive } = useResponsive();
    return (
        <div id='responsive-container'
             data-testid='responsive-container'
             data-mobile-breakpoint={responsive?.breakpoints?.mobile}
             data-tablet-breakpoint={responsive?.breakpoints?.tablet}
             data-desktop-breakpoint={responsive?.breakpoints?.desktop}
             style={{
                 '--max-width-mobile': `${responsive?.container?.maxWidth?.mobile}px`,
                 '--max-width-tablet': `${responsive?.container?.maxWidth?.tablet}px`,
                 '--max-width-desktop': `${responsive?.container?.maxWidth?.desktop}px`,
             } as CSSProperties}
        >
            {children}
        </div>
    );
};

export function ResponsiveProvider({
                                       responsive,
                                       children,
                                   }: ResponsiveProviderProps) {
    return (
        <ResponsiveContext.Provider value={{
            responsive: {
                ...DEFAULT_RESPONSIVE_CONTEXT.responsive,
                ...responsive,
            },
        }}>
            <ResponsiveContainer>
                {children}
            </ResponsiveContainer>
        </ResponsiveContext.Provider>
    );
}
