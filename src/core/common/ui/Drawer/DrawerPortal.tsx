import { Drawer } from 'vaul';
import type { ComponentProps } from 'react';

export function DrawerPortal({ ...props }: ComponentProps<typeof Drawer.Portal>) {
  return <Drawer.Portal data-slot="drawer-portal" {...props} />;
}
