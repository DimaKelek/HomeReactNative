import {TodoReducerActions} from 'redux/enum';
import {CheckTodoTaskType, RemoveTodoType} from './Todo.types';

export const removeTodo: RemoveTodoType = todoID => {
  return {type: TodoReducerActions.Remove, todoID};
};

export const checkTodoTasks: CheckTodoTaskType = todoID => {
  return {type: TodoReducerActions.CheckTodo, todoID};
};
