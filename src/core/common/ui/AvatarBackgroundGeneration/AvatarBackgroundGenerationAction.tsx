import { Button } from '@ui/Button';
import twoSparkles from '@images/two-sparkles.svg';
import { InputGroupAddon } from '@ui/InputGroup';
import arrow from '@images/arrow.svg';

type AvatarBackgroundGenerationActionProps = {
  onRegenerate: () => void;
  onGetPreviousValue: () => void;
  onGetLastValue: () => void;
};

export const AvatarBackgroundGenerationAction = ({
  onRegenerate,
  onGetLastValue,
  onGetPreviousValue,
}: AvatarBackgroundGenerationActionProps) => {
  return (
    <InputGroupAddon>
      <Button
        prevIcon={<img src={twoSparkles} alt="sparkles" />}
        variant="transparent"
        onClick={onRegenerate}
      >
        Regenerate
      </Button>
      <div>
        <Button variant="transparent" className="p-[10px]" onClick={onGetPreviousValue}>
          <img src={arrow} alt="arrow back" />
        </Button>
        <Button variant="transparent" className="p-[10px]" onClick={onGetLastValue}>
          <img src={arrow} alt="arrow next" className="scale-x-[-1]" />
        </Button>
      </div>
    </InputGroupAddon>
  );
};
