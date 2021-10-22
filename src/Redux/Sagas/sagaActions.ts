import {SagaActions} from '../enum';
import {
  GetUserDataSagaAction,
  LogOutUserSagaAction,
  SignInUserSagaAction,
  SignUpFirebaseSagaAction,
} from './types';

export const signInUser: SignInUserSagaAction = (email, password) => {
  return {type: SagaActions.SignIn, email, password};
};

export const logOutUser: LogOutUserSagaAction = () => {
  return {type: SagaActions.LogOut};
};

export const getUserData: GetUserDataSagaAction = userID => {
  return {type: SagaActions.GetUserData, userID};
};

export const signUpUser: SignUpFirebaseSagaAction = values => {
  return {type: SagaActions.SignUp, values};
};