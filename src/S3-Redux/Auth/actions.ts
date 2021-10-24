import {AuthErrorType, AuthStatusType, UserType} from './types';
import {AuthReducerActions} from '../enum';

export const setUserData = (userData: UserType | null) => {
  return {type: AuthReducerActions.SetUserData, userData};
};

export const setError = (error: AuthErrorType | null) => {
  return {type: AuthReducerActions.Error, error};
};

export const setAppStatus = (status: AuthStatusType) => {
  return {type: AuthReducerActions.Status, status};
};
