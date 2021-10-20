import {failed, logOutSucceeded, signInSucceeded} from './actions';
import {initialState} from './authReducer';

export type AuthStateType = typeof initialState;
export type AuthActionsType =
  | ReturnType<typeof signInSucceeded>
  | ReturnType<typeof logOutSucceeded>
  | ReturnType<typeof failed>;

export type UserType = {
  firstName: string;
  lastName: string;
  email: string;
};
