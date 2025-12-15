import { cn } from '@utils/cn';
import type { UserAvatarBackground } from '@user/entities';
import { LoadingStatus } from '@core/common/entities';
import { AvatarBackgroundsLoader } from './AvatarBackgroundsLoader.tsx';
import { AvatarBackgroundsCard } from './AvatarBackgroundsCard.tsx';

type AvatarBackgroundsListProps = {
  className?: string;
  list: Array<UserAvatarBackground>;
  loadingStatus: LoadingStatus;
};

export function AvatarBackgroundsList({
  className,
  list,
  loadingStatus,
}: AvatarBackgroundsListProps) {
  const isLoading = loadingStatus === LoadingStatus.PENDING;

  if (isLoading) {
    return <AvatarBackgroundsLoader />;
  }

  return (
    <ul className={cn('grid grid-cols-3 gap-4', className)}>
      {list.map((item, index) => {
        const hasTag = index === 0;

        return (
          <li
            role="button"
            key={item.id}
            className={cn(
              'rounded-xl overflow-hidden cursor-pointer',
              hasTag && 'border-2 border-[#000]',
            )}
          >
            <AvatarBackgroundsCard {...item} hasTag={hasTag} />
          </li>
        );
      })}
    </ul>
  );
}
