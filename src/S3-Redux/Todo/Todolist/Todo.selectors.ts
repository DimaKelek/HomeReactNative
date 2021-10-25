import {AppStateType} from 'redux/store';

export const selectTodos = (state: AppStateType) => state.todo.todos;
export const selectTodoID = (state: AppStateType) => state.todo.selectedTodoID;
