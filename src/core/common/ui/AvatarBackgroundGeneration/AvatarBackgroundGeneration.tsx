import { Button } from '@ui/Button';
import { DrawerContent, DrawerBody } from '@ui/Drawer';
import { Typography } from '@ui/Typography';
import { type ChangeEvent, useState } from 'react';
import sparkles from '@images/three-sparkles.svg';
import { AvatarBackgroundsList } from '@ui/AvatarBackgrounds';
import { useUserAvatarBackgrounds } from '@user/hooks';
import { InputGroup, InputGroupTextarea } from '@ui/InputGroup';
import { AvatarBackgroundGenerationHeader } from './AvatarBackgroundGenerationHeader.tsx';
import { AvatarBackgroundGenerationAction } from './AvatarBackgroundGenerationAction.tsx';

export const AvatarBackgroundGeneration = () => {
  const { fetchUserAvatarBackgrounds, loadingStatus, data } = useUserAvatarBackgrounds();

  const [value, setValue] = useState('');

  const onRegenerate = () => {
    setValue(
      'Animate glowing rays pulsating from behind the bottle, leaves gently swaying, and golden sparkles floating upward for a natural, radiant effect.',
    );
  };

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
  };

  const getPreviousValue = () => {};

  const getLastValue = () => {};

  if (1 > 0) {
    return <div>1234562225</div>
  }

  if (2< 3) {
    return <div>112</div>
  }

  return (
    <div>
    <div>
    <div>
    <div>
    <DrawerContent className="max-w-[400px]">
      <AvatarBackgroundGenerationHeader />
      <DrawerBody>
        <div className="mb-10">
          <Typography variant="smallSemibold" className="mb-3">
            Background idea
          </Typography>
          <form>
            <InputGroup className="mb-6">
              <InputGroupTextarea
                value={value}
                onChange={handleChange}
                placeholder="Enter your message"
              />
              <AvatarBackgroundGenerationAction
                onGetLastValue={getLastValue}
                onGetPreviousValue={getPreviousValue}
                onRegenerate={onRegenerate}
              />
            </InputGroup>
            <Button
              prevIcon={<img src={sparkles} alt="sparkles" />}
              className="w-full rounded-4xl pt-3.5 pb-3.5"
              onClick={fetchUserAvatarBackgrounds}
            >
              Generate BG for 1 credit
            </Button>
          </form>
        </div>
        <div>
          <Typography variant="smallSemibold" className="mb-2.5">
            Your backgrounds
          </Typography>
          <AvatarBackgroundsList list={data} loadingStatus={loadingStatus} />
        </div>
      </DrawerBody>
    </DrawerContent>
    </div>
    </div>
    </div>
    </div>
  );
};
