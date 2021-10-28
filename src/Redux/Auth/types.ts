import {AuthReducerActions} from '../enum';

export type AuthActionsType =
  | ReturnType<SetUserDataType>
  | ReturnType<SetErrorType>;

export type AuthStateType = {
  userData: UserType | null;
  error: AuthErrorType | null;
};

export type SetUserDataType = (userData: UserType | null) => {
  type: AuthReducerActions.SetUserData;
  userData: UserType | null;
};

export type SetErrorType = (error: AuthErrorType | null) => {
  type: AuthReducerActions.Error;
  error: AuthErrorType | null;
};

export type UserType = {
  firstName: string;
  lastName: string;
  email: string;
};

export type AuthErrorType = {
  code: string;
  message: string;
};
