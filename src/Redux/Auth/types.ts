import {setError, setUserData} from './actions';
import {initialState} from './authReducer';

export type AuthStateType = typeof initialState;
export type AuthActionsType =
  | ReturnType<typeof setUserData>
  | ReturnType<typeof setError>;

export type UserType = {
  firstName: string;
  lastName: string;
  email: string;
};

export type AuthErrorType = {
  code: string;
  message: string;
};
