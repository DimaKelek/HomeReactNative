import {FormEvent} from 'react';
import {AuthErrorType} from '../../Redux/Auth/types';

export type FormErrorsType = {
  email?: string;
  password?: string;
};

export type AuthViewPropsType = {
  validate: (values: any) => FormErrorsType;
  signInHandler: (submit: SubmitType, email: string, password: string) => void;
  error: AuthErrorType | null;
  signUpHandler: () => void;
};

export type SubmitType = (e?: FormEvent<HTMLFormElement>) => void;
