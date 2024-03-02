import React from 'react';
import { Container } from '@jkhanseong/devcomma-react-library.ui.container';
import { ResponsiveProvider } from './responsive-context-provider';

export const BasicUsage = () => {
    return (
        <ResponsiveProvider responsive={{
            container: {
                maxWidth: {
                    mobile: 320,
                    tablet: 600,
                    desktop: 1110,
                },
            },
        }}>
            <Container>
                Hello World!
            </Container>
        </ResponsiveProvider>
    );
};
