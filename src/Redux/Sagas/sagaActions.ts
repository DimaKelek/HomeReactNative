import {SagaActions} from '../enum';
import {SignUpFormType} from '../../Screens/Registration/RegistrationView';

export const signInUser = (email: string, password: string) => {
  return {type: SagaActions.SignIn, email, password};
};

export const logOutUser = () => {
  return {type: SagaActions.LogOut};
};

export const getUserData = (userID: string) => {
  return {type: SagaActions.GetUserData, userID};
};

export const signUpFirebase = (values: SignUpFormType) => {
  return {type: SagaActions.SignUp, values};
};
