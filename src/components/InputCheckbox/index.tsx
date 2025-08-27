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

interface InputCheckboxProps
  extends Omit<React.ComponentProps<'input'>, 'size' | 'disabled'>,
    VariantProps<typeof inputCheckboxVariants> {}

export default function InputCheckbox({
  size,
  disabled,
  className,
  ...props
}: InputCheckboxProps) {
  return (
    <label className={inputCheckboxWrapperVariants({ className })}>
      <input
        type="checkbox"
        className={cx(
          inputCheckboxVariants({ size, disabled }),
          textVariants(),
          className
        )}
        {...props}
      />
      <Icon className={inputCheckboxIconVariants({ size })} svg={CheckIcon} />
    </label>
  );
}
