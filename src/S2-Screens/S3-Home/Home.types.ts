import {TodolistType} from 'redux/Todo/Todolist/todoReducer';

export type HomeViewPropsType = {
  onPressDetails: () => void;
  onPressMap: () => void;
  todos: TodolistType[];
};
