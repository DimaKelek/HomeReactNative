import React, {FC} from 'react';
import {RegistrationProps} from '../../Navigation/types';
import {RegistrationView} from './RegistrationView';
import {FormErrorsType} from '../Authorization/types';

export const RegistrationScreen: FC<RegistrationProps> = () => {
  const validate = (values: any) => {
    const errors: FormErrorsType = {};
    if (!values.email) {
      errors.email = 'Email is required!!';
    }
    return errors;
  };
  return <RegistrationView validate={validate} />;
};
