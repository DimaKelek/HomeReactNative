export enum SagaActions {
  SignIn = 'SAGA/SIGN-IN',
  SignUp = 'SAGA/SIGN-UP',
  LogOut = 'SAGA/LOG-OUT',
  GetUserData = 'SAGA/GET-USER-DATA',
}

export enum AuthReducerActions {
  SetUserData = 'SET-USER-DATA',
  Error = 'SOME-ERROR',
}
