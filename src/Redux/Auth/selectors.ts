import {AppStateType} from '../store';

export const selectIsLoggedIn = (state: AppStateType) => state.auth.isLoggedIn;
