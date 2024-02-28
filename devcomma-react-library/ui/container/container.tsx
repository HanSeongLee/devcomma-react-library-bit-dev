import type { ReactNode } from 'react';
import cn from 'classnames';
import styles from './style.module.scss';

export type ContainerProps = {
    disable?: {
        mobile?: boolean;
        tablet?: boolean;
        desktop?: boolean;
    };
    maxWidth?: {
        mobile?: number;
        tablet?: number;
        desktop?: number;
    };
    className?: string;
    children?: ReactNode;
};

export const Container = ({ disable, maxWidth, className, children }: ContainerProps) => {
    return (
        <div className={cn(styles.container, {
            [styles.disableMobile]: disable?.mobile,
            [styles.disableTablet]: disable?.tablet,
            [styles.disableDesktop]: disable?.desktop,
        }, className)}
             style={{
                 '--max-width-mobile': maxWidth?.mobile ? `${maxWidth.mobile}px` : undefined,
                 '--max-width-tablet': maxWidth?.tablet ? `${maxWidth.tablet}px` : undefined,
                 '--max-width-desktop': maxWidth?.desktop ? `${maxWidth.desktop}px` : undefined,
             } as React.CSSProperties}
        >
            {children}
        </div>
    );
};
