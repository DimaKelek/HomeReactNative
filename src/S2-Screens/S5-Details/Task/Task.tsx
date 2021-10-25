import React, {FC} from 'react';
import {Text, View} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {TaskViewProps} from 'detailsScreen/Task/Task.types';
import {useComponentStyles} from 'hooks/Hooks';
import {taskStyles} from 'detailsScreen/Task/Task.styles';

export const TaskView: FC<TaskViewProps> = ({task, changeStatus}) => {
  const Styles = useComponentStyles(taskStyles);
  return (
    <View style={Styles.task}>
      <View style={Styles.container}>
        <CheckBox value={task.isDone} onValueChange={changeStatus} />
        <Text style={Styles.taskText}>{task.title}</Text>
      </View>
    </View>
  );
};
