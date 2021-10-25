import {TaskReducerActions} from 'redux/enum';
import {ChangeTaskStatusType} from './Tasks.types';

export const changeTaskStatus: ChangeTaskStatusType = ({
  taskID,
  todolistID,
  value,
}) => {
  return {type: TaskReducerActions.Status, taskID, todolistID, value};
};
