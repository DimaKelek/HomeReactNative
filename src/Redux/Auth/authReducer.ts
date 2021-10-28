import {AuthActionsType, AuthStateType} from './types';
import {AuthReducerActions} from '../enum';

export const initialState: AuthStateType = {
  userData: null,
  error: null,
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
      return {
        ...state,
        error: action.error && {...action.error},
      };
    }
    default:
      return state;
  }
};
