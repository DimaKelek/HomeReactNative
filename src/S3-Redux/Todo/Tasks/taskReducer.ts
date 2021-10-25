import {TaskActionsType, TaskStateType} from './Tasks.types';
import {TaskReducerActions} from 'redux/enum';

export const initialState: TaskStateType = {
  tasks: {
    ['1']: [
      {id: '0q', title: 'React', isDone: false},
      {id: '1q', title: 'Redux', isDone: false},
      {id: '2q', title: 'JS', isDone: false},
      {id: '3q', title: 'TS', isDone: false},
      {id: '4q', title: 'React Native', isDone: false},
    ],
    ['2']: [
      {id: '0q', title: 'Apple', isDone: false},
      {id: '1q', title: 'Android', isDone: false},
      {id: '2q', title: 'Mac', isDone: false},
      {id: '3q', title: 'Cat', isDone: false},
      {id: '4q', title: 'Dog', isDone: false},
    ],
  },
};

export const taskReducer = (
  state = initialState,
  action: TaskActionsType,
): TaskStateType => {
  switch (action.type) {
    case TaskReducerActions.Status: {
      return {
        ...state,
        tasks: {
          ...state.tasks,
          [action.todolistID]: [...state.tasks[action.todolistID]].map(t =>
            t.id === action.taskID ? {...t, isDone: action.value} : t,
          ),
        },
      };
    }
    default:
      return state;
  }
};
