import { SECOND } from '@core/common/constants/time.ts';

export async function delay(delayAmount = SECOND) {
  return new Promise((resolve) => setTimeout(resolve, delayAmount));
}
