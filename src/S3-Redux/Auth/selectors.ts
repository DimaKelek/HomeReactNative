import {AppStateType} from '../store';

export const selectUserData = (state: AppStateType) => state.auth.userData;
export const selectError = (state: AppStateType) => state.auth.error;
export const selectStatus = (state: AppStateType) => state.auth.status;
