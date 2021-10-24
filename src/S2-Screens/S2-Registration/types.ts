import {AuthErrorType} from 'redux/Auth/types';

export type RegistrationViewPropsType = {
  validate: (values: SignUpFormType) => RegisterFormErrorsType;
  error: AuthErrorType | null;
};

export type SignUpFormType = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type RegisterFormErrorsType = {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};
