import React, {FC} from 'react';
import {useDispatch} from 'react-redux';
import {TaskView} from 'detailsScreen/Task/Task';
import {TaskProps} from './Task.types';
import {changeTaskStatus} from 'redux/Todo/Tasks/Tasks.actions';

export const Task: FC<TaskProps> = ({task, todolistID}) => {
  const dispatch = useDispatch();

  const changeStatus = (value: boolean) => {
    dispatch(changeTaskStatus({taskID: task.id, todolistID, value}));
  };

  return <TaskView changeStatus={changeStatus} task={task} />;
};
