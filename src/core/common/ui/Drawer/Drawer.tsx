import { Drawer as DrawerBase } from 'vaul';

export function Drawer({ ...props }: React.ComponentProps<typeof DrawerBase.Root>) {
  return <DrawerBase.Root data-slot="drawer" {...props} />;
}
