import {UserType} from 'redux/Auth/types';

export type SettingsViewType = {
  changeAvatarHandler: () => void;
  avatar: string | null;
  userData: UserType | null;
  exitHandler: () => void;
};
