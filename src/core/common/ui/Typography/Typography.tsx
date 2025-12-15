import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@utils/cn';
import { createElement } from 'react';
import type { ComponentProps, ElementType } from 'react';

const typographyVariants = cva('text-neutral-950 dark:text-neutral-50', {
  variants: {
    variant: {
      h1: 'text-4xl font-bold',
      h2: 'text-3xl font-bold',
      h3: 'text-2xl font-semibold',
      h4: 'text-xl font-semibold',
      h5: 'text-lg font-semibold',
      h6: 'text-base font-semibold',
      body: 'text-base font-normal',
      bodyMedium: 'text-base font-medium',
      bodySemibold: 'text-base font-semibold',
      small: 'text-sm font-normal',
      smallMedium: 'text-sm font-medium',
      smallSemibold: 'text-sm font-semibold',
      xs: 'text-xs font-normal',
      xsMedium: 'text-xs font-medium',
      xsSemibold: 'text-xs font-semibold',
      xsBold: 'text-xs font-bold',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});

type TypographyProps<T extends ElementType = 'p'> = {
  as?: T;
} & ComponentProps<T> &
  VariantProps<typeof typographyVariants>;

export function Typography<T extends ElementType = 'p'>({
  as,
  className,
  variant,
  ...props
}: TypographyProps<T>) {
  const elementType = as || getDefaultElement(variant);

  return createElement(elementType, {
    className: cn(typographyVariants({ variant }), className),
    ...props,
  });
}

function getDefaultElement(variant: TypographyProps['variant']): ElementType {
  switch (variant) {
    case 'h1':
      return 'h1';
    case 'h2':
      return 'h2';
    case 'h3':
      return 'h3';
    case 'h4':
      return 'h4';
    case 'h5':
      return 'h5';
    case 'h6':
      return 'h6';
    default:
      return 'p';
  }
}
