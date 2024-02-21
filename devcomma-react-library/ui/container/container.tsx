import type { ReactNode } from 'react';
import styles from './style.module.scss';
import cn from 'classnames';

export type ContainerProps = {
    className?: string;
    children?: ReactNode;
};

export const Container = ({ className, children }: ContainerProps) => {
  return (
      <div className={cn(styles.container, className)}>
        {children}
      </div>
  );
};
