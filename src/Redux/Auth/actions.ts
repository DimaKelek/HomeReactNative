import {AC} from './enum';

export const changeIsLoggedIn = (value: boolean) => {
  return {type: AC.isLoggedIn, value};
};
