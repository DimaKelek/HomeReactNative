import {applyMiddleware, combineReducers, createStore} from 'redux';
import {authReducer} from './Auth/authReducer';
import {settingsReducer} from './Settings/settingsReducer';
import createSagaMiddleware from 'redux-saga';
import {watcherSaga} from './Sagas/watcherSaga';

const rootReducer = combineReducers({
  auth: authReducer,
  settings: settingsReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watcherSaga);

export type AppStateType = ReturnType<typeof rootReducer>;
