import React from 'react';
import { cx, type VariantProps } from 'class-variance-authority';
import { textVariants } from '../Text/variants';
import { inputTextVariants } from './variants';

interface InputTextProps
  extends Omit<React.ComponentProps<'input'>, 'size' | 'disabled'>,
    VariantProps<typeof inputTextVariants> {}

export default function InputText({
  size,
  disabled,
  className,
  ...props
}: InputTextProps) {
  return (
    <input
      type="text"
      className={cx(
        inputTextVariants({ size, disabled }),
        textVariants(),
        className
      )}
      {...props}
    />
  );
}
