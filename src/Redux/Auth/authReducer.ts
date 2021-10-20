import {AC} from './enum';
import {AuthActionsType, AuthStateType} from './types';

export const initialState = {
  isLoggedIn: false,
  userData: null,
  error: '',
};

export const authReducer = (
  state = initialState,
  action: AuthActionsType,
): AuthStateType => {
  switch (action.type) {
    case AC.SignInSucceeded: {
      return {...state, userData: action.user, isLoggedIn: true};
    }
    case AC.LogOutSucceeded: {
      return {...state, userData: null, isLoggedIn: false};
    }
    case AC.Failed: {
      return {...state, error: action.error};
    }
    default:
      return state;
  }
};
