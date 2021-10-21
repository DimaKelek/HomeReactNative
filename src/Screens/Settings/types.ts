import {UserType} from '../../Redux/Auth/types';

export type SettingsViewType = {
  changeAvatarHandler: () => void;
  avatar: string | null;
  userData: UserType | null;
};
