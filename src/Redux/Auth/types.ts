import {changeIsLoggedIn} from './actions';
import {initialState} from './authReducer';

export type AuthActionsType = ReturnType<typeof changeIsLoggedIn>;
export type AuthStateType = typeof initialState;
