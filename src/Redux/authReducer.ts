import {AC} from './enum';

const initialState = {
  isLoggedIn: false,
};

export const authReducer = (
  state = initialState,
  action: AuthActionsType,
): initialStateType => {
  switch (action.type) {
    case AC.isLoggedIn: {
      return {...state, isLoggedIn: action.value};
    }
    default:
      return state;
  }
};

export const changeIsLoggedIn = (value: boolean) => {
  return {type: AC.isLoggedIn, value};
};

type AuthActionsType = ReturnType<typeof changeIsLoggedIn>;

type initialStateType = typeof initialState;
