import {SagaActions} from '../enum';
import {SignUpFormType} from '../../Screens/Registration/types';

export type SignInUserSagaAction = (
  email: string,
  password: string,
) => {
  type: string;
  email: string;
  password: string;
};

export type LogOutUserSagaAction = () => {
  type: string;
};

export type GetUserDataSagaAction = (userID: string) => {
  type: string;
  userID: string;
};

export type SignUpFirebaseSagaAction = (values: SignUpFormType) => {
  type: SagaActions.SignUp;
  values: SignUpFormType;
};