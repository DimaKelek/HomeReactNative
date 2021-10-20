import {AC} from './enum';

export const signInSucceeded = (user: any) => {
  return {type: AC.SignInSucceeded, user} as const;
};

export const logOutSucceeded = () => {
  return {type: AC.LogOutSucceeded} as const;
};

export const failed = (error: string) => {
  return {type: AC.Failed, error} as const;
};
