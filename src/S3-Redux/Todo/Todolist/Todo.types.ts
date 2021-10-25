import {TodoReducerActions} from 'redux/enum';

export type RemoveTodoType = (todoID: string) => {
  type: TodoReducerActions.Remove;
  todoID: string;
};

export type CheckTodoTaskType = (todoID: string) => {
  type: TodoReducerActions.CheckTodo;
  todoID: string;
};

export type TodoStateType = {
  todos: TodolistType[];
  selectedTodoID: string;
};

export type TodoActionsType =
  | ReturnType<RemoveTodoType>
  | ReturnType<CheckTodoTaskType>;

export type TodolistType = {
  id: string;
  title: string;
};
