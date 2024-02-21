import type { ReactNode } from 'react';
import cn from 'classnames';
import styles from './style.module.scss';

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
