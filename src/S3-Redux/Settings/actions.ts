import {AC} from './enum';

export const changeAvatar = (newAvatar: string) => {
  return {type: AC.NewAvatar, newAvatar};
};
