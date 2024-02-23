import type { ReactNode } from 'react';
import cn from 'classnames';
import styles from './style.module.scss';

export type ContainerProps = {
    disable?: {
        mobile?: boolean;
        tablet?: boolean;
        desktop?: boolean;
    };
    className?: string;
    children?: ReactNode;
};

export const Container = ({ disable, className, children }: ContainerProps) => {
  return (
      <div className={cn(styles.container, {
          [styles.disableMobile]: disable?.mobile,
          [styles.disableTablet]: disable?.tablet,
          [styles.disableDesktop]: disable?.desktop,
      }, className)}>
        {children}
      </div>
  );
};
