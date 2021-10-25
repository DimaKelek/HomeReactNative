import {AppStateType} from 'redux/store';

export const selectTasks = (state: AppStateType) => state.tasks.tasks;
