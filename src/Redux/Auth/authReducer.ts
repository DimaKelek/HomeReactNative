import {AC} from './enum';
import {AuthActionsType, AuthStateType} from './types';

export const initialState = {
  isLoggedIn: false,
};

export const authReducer = (
  state = initialState,
  action: AuthActionsType,
): AuthStateType => {
  switch (action.type) {
    case AC.isLoggedIn: {
      return {...state, isLoggedIn: action.value};
    }
    default:
      return state;
  }
};
