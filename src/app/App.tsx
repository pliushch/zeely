import { Drawer, DrawerTrigger } from '@ui/Drawer';
import { AvatarBackgroundGeneration } from '@ui/AvatarBackgroundGeneration';

export const App = () => {
  return (
    <Drawer direction="right">
      <DrawerTrigger>Open</DrawerTrigger>
      <AvatarBackgroundGeneration />
    </Drawer>
  );
};
