import { ReactNode, HTMLAttributes, createElement, CSSProperties } from 'react';

export type TitleProps = {
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'div' | 'span';
  color?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & HTMLAttributes<HTMLHeadingElement>

export function Title({ as, color, style, children, ...props }: TitleProps) {
  return createElement(as, {
    ...props,
    style: {
      color,
      ...style,
    },
  }, children);
}
