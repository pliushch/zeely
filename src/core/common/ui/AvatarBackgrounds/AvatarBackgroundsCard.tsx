import { cn } from '@utils/cn';
import user from '@images/backgrounds/user.png';
import { Typography } from '../Typography';
import type { UserAvatarBackground } from '@user/entities';

type AvatarBackgroundsCardProps = {
  className?: string;
  hasTag?: boolean;
} & UserAvatarBackground;

export function AvatarBackgroundsCard({
  className,
  hasTag,
  ...cardProps
}: AvatarBackgroundsCardProps) {
  const { background } = cardProps;

  return (
    <div className={cn('relative h-full', className)}>
      {hasTag && (
        <Typography 
          as="span" 
          variant="xsBold" 
          className="uppercase z-2 absolute left-2 top-2 py-[6px] px-1 bg-white border-1 rounded-sm color-gray border-[#0000000D]"
        >
          default
        </Typography>
      )}
      <img src={background} alt="user background" className="absolute h-full w-full object-cover" />
      <img src={user} alt="user" className="relative z-1 h-full" />
    </div>
  );
}
