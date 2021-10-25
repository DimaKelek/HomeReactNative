import {applyMiddleware, combineReducers, createStore} from 'redux';
import {authReducer} from './Auth/authReducer';
import {settingsReducer} from './Settings/settingsReducer';
import createSagaMiddleware from 'redux-saga';
import {watcherSaga} from 'sagas/watcherSaga';
import {todoReducer} from 'redux/Todo/Todolist/todoReducer';
import {taskReducer} from 'redux/Todo/Tasks/taskReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  settings: settingsReducer,
  todo: todoReducer,
  tasks: taskReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watcherSaga);

export type AppStateType = ReturnType<typeof rootReducer>;
