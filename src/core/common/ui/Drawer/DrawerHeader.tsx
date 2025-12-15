import { cn } from '@utils/cn';
import type { ComponentProps } from 'react';

export function DrawerHeader({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div
      data-slot="drawer-header"
      className={cn(
        'flex gap-1 items-center justify-between group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center' +
          ' group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left',
        className,
      )}
      {...props}
    />
  );
}
