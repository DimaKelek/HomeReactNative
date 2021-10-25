import {TaskType} from 'redux/Todo/Tasks/Tasks.types';

export type TaskProps = {
  task: TaskType;
  todolistID: string;
};

export type TaskViewProps = {
  task: TaskType;
  changeStatus: (value: boolean) => void;
};
