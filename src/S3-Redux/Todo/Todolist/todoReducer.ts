import {TodoReducerActions} from 'redux/enum';
import {TodoActionsType, TodoStateType} from './Todo.types';

export const initialState: TodoStateType = {
  todos: [
    {id: '1', title: 'What to learn?'},
    {id: '2', title: 'What to buy?'},
    {id: '3', title: 'What to buy?'},
    {id: '4', title: 'What to buy?'},
    {id: '5', title: 'What to buy?'},
    {id: '6', title: 'What to buy?'},
    {id: '7', title: 'What to buy?'},
    {id: '8', title: 'What to buy?'},
    {id: '9', title: 'What to buy?'},
  ],
  selectedTodoID: '',
};

export const todoReducer = (
  state = initialState,
  action: TodoActionsType,
): TodoStateType => {
  switch (action.type) {
    case TodoReducerActions.Remove: {
      return {...state, todos: state.todos.filter(t => t.id !== action.todoID)};
    }
    case TodoReducerActions.CheckTodo: {
      return {...state, selectedTodoID: action.todoID};
    }
    default:
      return state;
  }
};
