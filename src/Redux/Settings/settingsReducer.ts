import {AC} from './enum';
import {SettingsActionsType, SettingsStateType} from './types';

export const initialState = {
  avatar: null as string | null,
};

export const settingsReducer = (
  state = initialState,
  action: SettingsActionsType,
): SettingsStateType => {
  switch (action.type) {
    case AC.NewAvatar: {
      return {...state, avatar: action.newAvatar};
    }
    default:
      return state;
  }
};
