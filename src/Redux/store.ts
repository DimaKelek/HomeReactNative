import {combineReducers, createStore} from 'redux';

const rootReducer = combineReducers({
  settings: () => {},
});

export const store = createStore(rootReducer);
