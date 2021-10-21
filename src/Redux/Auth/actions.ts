import {AuthErrorType, UserType} from './types';
import {AuthReducerActions} from '../enum';

export const setUserData = (userData: UserType | null) => {
  return {type: AuthReducerActions.SetUserData, userData} as const;
};

export const setError = (error: AuthErrorType | null) => {
  return {type: AuthReducerActions.Error, error} as const;
};
