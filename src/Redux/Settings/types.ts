import {initialState} from './settingsReducer';
import {changeAvatar} from './actions';

export type SettingsActionsType = ReturnType<typeof changeAvatar>;
export type SettingsStateType = typeof initialState;
