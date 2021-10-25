export enum SagaActions {
  SignIn = 'SAGA/SIGN-IN',
  SignUp = 'SAGA/SIGN-UP',
  LogOut = 'SAGA/LOG-OUT',
  CheckAuth = 'SAGA/CHECK-AUTH',
  GetUserData = 'SAGA/GET-USER-DATA',
}

export enum AuthReducerActions {
  SetUserData = 'SET-USER-DATA',
  Error = 'SOME-ERROR',
  Status = 'SET-STATUS',
}

export enum TodoReducerActions {
  Remove = 'REMOVE-TODO',
  CheckTodo = 'SELECT-TODO',
}

export enum TaskReducerActions {
  Status = 'CHANGE-TASK-STATUS',
}
