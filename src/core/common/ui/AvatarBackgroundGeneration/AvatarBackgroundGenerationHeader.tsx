import { DrawerClose, DrawerHeader, DrawerTitle } from '@ui/Drawer';
import close from '@images/cross.svg';

export const AvatarBackgroundGenerationHeader = () => {
  return (
    <DrawerHeader className="items-center justify-between mb-6">
      <DrawerTitle>Change background</DrawerTitle>
      <DrawerClose>
        <img src={close} alt="cross" width={24} height={24} />
      </DrawerClose>
    </DrawerHeader>
  );
};
