import {FormEvent} from 'react';

export type FormErrorsType = {
  firstName?: string;
  lastName?: string;
  email?: string;
};

export type AuthViewPropsType = {
  validate: (values: any) => FormErrorsType;
  signInHandler: (submit: SubmitType) => void;
};

export type SubmitType = (e?: FormEvent<HTMLFormElement>) => void;
