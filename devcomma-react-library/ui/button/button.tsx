import type { ReactNode, HTMLAttributes } from 'react';

export type ButtonProps = {
  children?: ReactNode;
} & HTMLAttributes<HTMLButtonElement>

export function Button({ children, ...props }: ButtonProps) {
  return (
      <button type="submit"
              {...props}
      >
        {children}
      </button>
  );
}
