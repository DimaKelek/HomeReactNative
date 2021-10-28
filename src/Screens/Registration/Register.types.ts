export type RegistrationViewPropsType = {
  validate: (values: SignUpFormType) => RegisterFormErrorsType;
  signUpHandler: (values: SignUpFormType) => void;
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
