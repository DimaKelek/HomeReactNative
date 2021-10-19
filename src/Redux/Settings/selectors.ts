import {AppStateType} from '../store';

export const selectAvatar = (state: AppStateType) => state.settings.avatar;
