import React, {FC} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AuthView} from './AuthView';
import {FormErrorsType, SubmitType} from './types';
import {signInUser} from '../../Redux/Sagas/sagaActions';
import {selectError} from '../../Redux/Auth/selectors';
import {AuthProps} from '../../Navigation/types';

export const AuthScreen: FC<AuthProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  const validate = (values: any) => {
    const errors: FormErrorsType = {};
    if (!values.email) {
      errors.email = 'Email is required!!';
    }
    return errors;
  };

  const signInHandler = (
    submit: SubmitType,
    email: string,
    password: string,
  ) => {
    submit();
    dispatch(signInUser(email, password));
  };

  const signUpHandler = () => {
    navigation.navigate('Register');
  };

  return (
    <AuthView
      signInHandler={signInHandler}
      validate={validate}
      error={error}
      signUpHandler={signUpHandler}
    />
  );
};
