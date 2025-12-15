import { useCallback, useState } from 'react';
import { LoadingStatus } from '@core/common/entities';
import type { UserAvatarBackground } from '@user/entities';
import { HttpUserService } from '@user/services';
import { delay } from '@utils/delay.ts';
import { SECOND } from '@core/common/constants/time.ts';

export function useUserAvatarBackgrounds() {
  const [loadingStatus, setLoadingStatus] = useState(LoadingStatus.IDLE);
  const [data, setData] = useState<Array<UserAvatarBackground>>([]);

  const fetchUserAvatarBackgrounds = useCallback(async () => {
    setLoadingStatus(LoadingStatus.PENDING);

    const userService = new HttpUserService();

    try {
      const result = await userService.getAvatarBackgrounds();

      await delay(10 * SECOND);

      setData(result);
      setLoadingStatus(LoadingStatus.FULFILLED);
    } catch {
      setLoadingStatus(LoadingStatus.FAILED);
    }
  }, []);

  return {
    data,
    loadingStatus,
    fetchUserAvatarBackgrounds,
  };
}
