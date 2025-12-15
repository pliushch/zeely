import { Drawer } from 'vaul';
import type { ComponentProps } from 'react';

export function DrawerClose({ ...props }: ComponentProps<typeof Drawer.Close>) {
  return <Drawer.Close data-slot="drawer-close" {...props} />;
}
