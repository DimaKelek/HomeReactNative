import {TodolistType} from 'redux/Todo/Todolist/Todo.types';

export type TodoViewPropsType = {
  title: string;
  longPressTodo: (anime: any) => void;
  removeTodoHandler: () => void;
  selectTodoHandler: () => void;
};

export type TodoPropsType = {
  todo: TodolistType;
  onPressDetails: () => void;
};
