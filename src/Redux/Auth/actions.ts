import {SetErrorType, SetUserDataType} from './types';
import {AuthReducerActions} from '../enum';

export const setUserData: SetUserDataType = userData => {
  return {type: AuthReducerActions.SetUserData, userData};
};

export const setError: SetErrorType = error => {
  return {type: AuthReducerActions.Error, error};
};
