import React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { cardVariants } from './variants';

interface CardProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof cardVariants> {
  as?: keyof React.JSX.IntrinsicElements;
}

export default function Card({
  as = 'div',
  size,
  className,
  children,
  ...props
}: CardProps) {
  return React.createElement(
    as,
    {
      className: cardVariants({ size, className }),
      ...props,
    },
    children
  );
}
