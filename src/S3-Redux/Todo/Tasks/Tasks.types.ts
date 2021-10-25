import {TaskReducerActions} from 'redux/enum';

export type TaskStateType = {
  tasks: {
    [key: string]: TaskType[];
  };
};
export type TaskActionsType = ReturnType<ChangeTaskStatusType>;

export type TaskType = {
  id: string;
  title: string;
  isDone: boolean;
};

export type ChangeTaskStatusType = (data: {
  taskID: string;
  todolistID: string;
  value: boolean;
}) => {
  type: TaskReducerActions.Status;
  taskID: string;
  todolistID: string;
  value: boolean;
};
