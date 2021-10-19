import {AC} from './enum';
import {SettingsActionsType, SettingsStateType} from './types';

export const initialState = {
  avatar: 'https://goo.su/8HKj',
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
