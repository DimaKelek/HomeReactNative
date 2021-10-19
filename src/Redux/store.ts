import {combineReducers, createStore} from 'redux';
import {authReducer} from './Auth/authReducer';
import {settingsReducer} from './Settings/settingsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  settings: settingsReducer,
});

export const store = createStore(rootReducer);

export type AppStateType = ReturnType<typeof rootReducer>;
