import { cn } from '@utils/cn';
import type { ComponentProps } from 'react';

export function DrawerBody({ className, ...props }: ComponentProps<'div'>) {
  return (
    <div data-slot="drawer-body" className={cn('flex-1 overflow-y-auto', className)} {...props} />
  );
}
