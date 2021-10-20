import {SagaActions} from './enum';

export const signInUser = () => {
  return {type: SagaActions.SignIn};
};

export const logOutUser = () => {
  return {type: SagaActions.LogOut};
};
