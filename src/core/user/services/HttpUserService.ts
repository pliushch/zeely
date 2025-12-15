import type { UserService } from './UserService';
import cort from '@images/backgrounds/cort.png';
import { generateUuid } from '@utils/generateUuid.ts';
import home from '@images/backgrounds/home.png';
import garden from '@images/backgrounds/garden.png';
import room from '@images/backgrounds/room.png';

export class HttpUserService implements UserService {
  async getAvatarBackgrounds() {
    return [
      { background: cort, id: generateUuid() },
      { background: home, id: generateUuid() },
      { background: garden, id: generateUuid() },
      { background: room, id: generateUuid() },
    ];
  }
}
