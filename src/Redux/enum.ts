export enum SagaActions {
  SignIn = 'SAGA/SIGN-IN',
  SignUp = 'SAGA/SIGN-UP',
  LogOut = 'SAGA/LOG-OUT',
  GetUserData = 'SAGA/GET-USER-DATA',
  GetAir = 'SAGA/GET-AIRPORTS',
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

export enum AirportsReducerActions {
  SetAir = 'SET-AIRPORTS',
  SelectedAir = 'SELECT-AIR',
}
