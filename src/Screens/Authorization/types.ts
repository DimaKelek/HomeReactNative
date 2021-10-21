import {FormEvent} from 'react';

export type FormErrorsType = {
  email?: string;
  password?: string;
};

export type AuthViewPropsType = {
  validate: (values: any) => FormErrorsType;
  signInHandler: (submit: SubmitType) => void;
};

export type SubmitType = (e?: FormEvent<HTMLFormElement>) => void;
