import React, {FC} from 'react';
import {useComponentStyles} from 'hooks/Hooks';
import {detailsStyles} from './DetailsView.styles';
import {useTranslation} from 'react-i18next';
import {FlatList, View} from 'react-native';
import {DetailsViewPropsType} from './Details.types';
import {useSelector} from 'react-redux';
import {selectTasks} from 'redux/Todo/Tasks/Task.selectors';
import {selectTodoID} from 'redux/Todo/Todolist/Todo.selectors';
import {Task} from 'detailsScreen/Task';

export const DetailsView: FC<DetailsViewPropsType> = () => {
  const Styles = useComponentStyles(detailsStyles);
  const {t} = useTranslation();

  const tasks = useSelector(selectTasks);
  const selectedTodoID = useSelector(selectTodoID);
  return (
    <View style={Styles.taskScreen}>
      <FlatList
        style={Styles.tasks}
        data={tasks[selectedTodoID]}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Task task={item} todolistID={selectedTodoID} />
        )}
      />
    </View>
  );
};
