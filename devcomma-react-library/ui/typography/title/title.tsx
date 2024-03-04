import { ReactNode, HTMLAttributes, createElement } from 'react';

export type TitleProps = {
  children?: ReactNode;
} & HTMLAttributes<HTMLHeadingElement>

export function Title({ children, ...props }: TitleProps) {
  return createElement('h1', props, children);
}
