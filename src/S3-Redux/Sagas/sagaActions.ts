import {SagaActions} from '../enum';
import {
  CheckAuthType,
  GetUserDataSagaAction,
  LogOutUserSagaAction,
  SignInUserSagaAction,
  SignUpFirebaseSagaAction,
} from './Sagas.types';

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

export const checkAuth: CheckAuthType = () => {
  return {type: SagaActions.CheckAuth};
};
