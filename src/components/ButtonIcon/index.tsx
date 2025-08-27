import { type VariantProps } from 'class-variance-authority';
import React from 'react';
import Icon from '../Icon';
import { buttonIconIconVariants, buttonIconVariants } from './variants';

interface ButtonIconProps
  extends Omit<React.ComponentProps<'button'>, 'size' | 'disabled'>,
    VariantProps<typeof buttonIconVariants> {
  icon: React.ComponentProps<typeof Icon>['svg'];
}

export default function ButtonIcon({
  variant,
  size,
  disabled,
  className,
  icon,
  ...props
}: ButtonIconProps) {
  return (
    <button
      className={buttonIconVariants({ variant, size, disabled, className })}
      {...props}
    >
      <Icon svg={icon} className={buttonIconIconVariants({ variant, size })} />
    </button>
  );
}
