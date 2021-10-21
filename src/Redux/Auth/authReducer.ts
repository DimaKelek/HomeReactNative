import {AuthActionsType, AuthErrorType, AuthStateType, UserType} from './types';
import {AuthReducerActions} from '../enum';

export const initialState = {
  userData: null as UserType | null,
  error: null as AuthErrorType | null,
};

export const authReducer = (
  state = initialState,
  action: AuthActionsType,
): AuthStateType => {
  switch (action.type) {
    case AuthReducerActions.SetUserData: {
      return {...state, userData: action.userData};
    }
    case AuthReducerActions.Error: {
      return {...state, error: {...action.error}};
    }
    default:
      return state;
  }
};
