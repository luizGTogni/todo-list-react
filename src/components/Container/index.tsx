import React from 'react';
import { type VariantProps } from 'class-variance-authority';
import { containerVariants } from './variants';

interface ContainerProps
  extends React.ComponentProps<'div'>,
    VariantProps<typeof containerVariants> {
  as?: keyof React.JSX.IntrinsicElements;
}

export default function Container({
  as = 'div',
  className,
  children,
  ...props
}: ContainerProps) {
  return React.createElement(
    as,
    {
      className: containerVariants({ size: 'md', className }),
      ...props,
    },
    children
  );
}
