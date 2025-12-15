import { Drawer } from 'vaul';
import { cn } from '@utils/cn';
import type { ComponentProps } from 'react';
import { DrawerOverlay } from './DrawerOverlay';
import { DrawerPortal } from './DrawerPortal';

export function DrawerContent({
  className,
  children,
  ...props
}: ComponentProps<typeof Drawer.Content>) {
  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <Drawer.Content
        data-slot="drawer-content"
        className={cn(
          'group/drawer-content bg-white fixed z-50 flex flex-col dark:bg-neutral-950',
          'data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0' +
            ' data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l' +
            ' data-[vaul-drawer-direction=right]:sm:max-w-[400px]' +
            ' data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0' +
            ' data-[vaul-drawer-direction=bottom]:max-h-[96vh] data-[vaul-drawer-direction=bottom]:rounded-t-[10px]' +
            ' px-5 py-8',
          className,
        )}
        {...props}
      >
        <div className="bg-neutral-100 mx-auto mt-4 h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block group-data-[vaul-drawer-direction=right]/drawer-content:hidden dark:bg-neutral-800" />
        {children}
      </Drawer.Content>
    </DrawerPortal>
  );
}
