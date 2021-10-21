import {FormErrorsType} from '../Authorization/types';

export type RegistrationViewPropsType = {
  validate: (values: any) => FormErrorsType;
};
