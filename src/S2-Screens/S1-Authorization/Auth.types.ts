import {FormEvent} from 'react';
import {AuthErrorType} from 'redux/Auth/types';

export type FormErrorsType = {
  email?: string;
  password?: string;
};

export type SignInFormType = {
  email: string;
  password: string;
};

export type AuthViewPropsType = {
  validate: (values: SignInFormType) => FormErrorsType;
  signInHandler: (values: SignInFormType) => void;
  error: AuthErrorType | null;
  signUpHandler: () => void;
};

export type SubmitType = (e?: FormEvent<HTMLFormElement>) => void;
