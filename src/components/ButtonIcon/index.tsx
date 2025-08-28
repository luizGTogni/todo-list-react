import { type VariantProps } from 'class-variance-authority';
import React from 'react';
import SpinnerIcon from '../../assets/icons/spinner.svg?react';
import Icon from '../Icon';
import Skeleton from '../Skeleton';
import { buttonIconIconVariants, buttonIconVariants } from './variants';

interface ButtonIconProps
  extends Omit<React.ComponentProps<'button'>, 'size' | 'disabled'>,
    VariantProps<typeof buttonIconVariants> {
  icon: React.ComponentProps<typeof Icon>['svg'];
  loading?: boolean;
  handling?: boolean;
}

export default function ButtonIcon({
  loading,
  handling,
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
        className={buttonIconVariants({
          variant: 'none',
          size,
          className,
          handling,
        })}
      />
    );
  }

  return (
    <button
      className={buttonIconVariants({ variant, size, disabled, className })}
      {...props}
    >
      <Icon
        svg={handling ? SpinnerIcon : icon}
        animate={handling}
        className={buttonIconIconVariants({ variant, size })}
      />
    </button>
  );
}
