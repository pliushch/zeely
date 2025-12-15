import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@utils/cn';
import type { ComponentProps, ReactNode } from 'react';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all' +
    ' disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none' +
    " [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-neutral-950" +
    ' focus-visible:ring-neutral-950/50 focus-visible:ring-[3px] aria-invalid:ring-red-500/20' +
    ' dark:aria-invalid:ring-red-500/40 aria-invalid:border-red-500 dark:focus-visible:border-neutral-300' +
    ' dark:focus-visible:ring-neutral-300/50 dark:aria-invalid:ring-red-900/20 dark:dark:aria-invalid:ring-red-900/40' +
    ' dark:aria-invalid:border-red-900 cursor-pointer font-semibold',
  {
    variants: {
      variant: {
        default:
          'bg-neutral-900 text-neutral-50 hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90',
        secondary:
          'bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80 dark:bg-neutral-800 dark:text-neutral-50 dark:hover:bg-neutral-800/80',
        transparent: 'w-fit text-black',
      },
      size: {
        default: 'px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

type ButtonProps = Partial<{
  prevIcon: ReactNode;
  afterIcon: ReactNode;
  asChild: boolean;
  classes: Partial<{
    prevIcon: string;
    afterIcon: string;
  }>;
}> &
  ComponentProps<'button'> &
  VariantProps<typeof buttonVariants>;

function Button({
  className,
  variant = 'default',
  size = 'default',
  type = 'button',
  asChild = false,
  children,
  classes,
  afterIcon,
  prevIcon,
  ...props
}: ButtonProps) {
  const renderIcon = (icon: ReactNode, iconType: 'prev' | 'after') => {
    if (!icon) return null;

    const iconClasses = cn(
      'shrink-0',
      iconType === 'prev' ? classes?.prevIcon : classes?.afterIcon,
    );

    return (
      <span className={iconClasses} aria-hidden="true">
        {icon}
      </span>
    );
  };

  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      type={type}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {renderIcon(prevIcon, 'prev')}
      {children}
      {renderIcon(afterIcon, 'after')}
    </Comp>
  );
}

export { Button, buttonVariants };
