import type { UserAvatarBackground } from '@user/entities';

export interface UserService {
  getAvatarBackgrounds(): Promise<Array<UserAvatarBackground>>;
}
