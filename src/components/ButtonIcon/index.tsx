import { type VariantProps } from 'class-variance-authority';
import React from 'react';
import Icon from '../Icon';
import { buttonIconIconVariants, buttonIconVariants } from './variants';
import Skeleton from '../Skeleton';

interface ButtonIconProps
  extends Omit<React.ComponentProps<'button'>, 'size' | 'disabled'>,
    VariantProps<typeof buttonIconVariants> {
  icon: React.ComponentProps<typeof Icon>['svg'];
  loading?: boolean;
}

export default function ButtonIcon({
  loading,
  variant,
  size,
  disabled,
  className,
  icon,
  ...props
}: ButtonIconProps) {
  if (loading) {
    return (
      <Skeleton
        rounded="sm"
        className={buttonIconVariants({ variant: 'none', size, className })}
      />
    );
  }

  return (
    <button
      className={buttonIconVariants({ variant, size, disabled, className })}
      {...props}
    >
      <Icon svg={icon} className={buttonIconIconVariants({ variant, size })} />
    </button>
  );
}
