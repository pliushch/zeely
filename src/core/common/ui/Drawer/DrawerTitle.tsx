import { Drawer } from 'vaul';
import { cn } from '@utils/cn';
import type { ComponentProps } from 'react';

export function DrawerTitle({ className, ...props }: ComponentProps<typeof Drawer.Title>) {
  return (
    <Drawer.Title
      data-slot="drawer-title"
      className={cn('text-[22px] font-bold', className)}
      {...props}
    />
  );
}
