import { Drawer } from 'vaul';
import type { ComponentProps } from 'react';

export function DrawerTrigger({ ...props }: ComponentProps<typeof Drawer.Trigger>) {
  return <Drawer.Trigger data-slot="drawer-trigger" {...props} />;
}
