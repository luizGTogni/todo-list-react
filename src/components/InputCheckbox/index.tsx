import React from 'react';
import { cx, type VariantProps } from 'class-variance-authority';
import { textVariants } from '../Text/variants';
import {
  inputCheckboxIconVariants,
  inputCheckboxVariants,
  inputCheckboxWrapperVariants,
} from './variants';
import Icon from '../Icon';
import CheckIcon from '../../assets/icons/check.svg?react';
import Skeleton from '../Skeleton';

interface InputCheckboxProps
  extends Omit<React.ComponentProps<'input'>, 'size' | 'disabled'>,
    VariantProps<typeof inputCheckboxVariants> {
  loading?: boolean;
}

export default function InputCheckbox({
  loading,
  variant,
  size,
  disabled,
  className,
  ...props
}: InputCheckboxProps) {
  if (loading) {
    <Skeleton
      rounded="sm"
      className={inputCheckboxVariants({ variant: 'none', size })}
    />;
  }

  return (
    <label className={inputCheckboxWrapperVariants({ className })}>
      <input
        type="checkbox"
        className={cx(
          inputCheckboxVariants({ variant, size, disabled }),
          textVariants(),
          className
        )}
        {...props}
      />
      <Icon className={inputCheckboxIconVariants({ size })} svg={CheckIcon} />
    </label>
  );
}
