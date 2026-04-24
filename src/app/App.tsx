import { Drawer, DrawerTrigger } from '@ui/Drawer';
import { AvatarBackgroundGeneration } from '@ui/AvatarBackgroundGeneration';

console.log(123)

export const App = () => {
  return (
    <Drawer direction="right">
      <DrawerTrigger>Open</DrawerTrigger>
      <AvatarBackgroundGeneration />
    </Drawer>
  );
};
