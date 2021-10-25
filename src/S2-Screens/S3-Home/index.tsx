import React from 'react';
import {Screens} from 'nav/enum';
import {HomeProps} from 'nav/types';
import {HomeView} from './HomeView';
import {useSelector} from 'react-redux';
import {selectTodos} from 'redux/Todo/Todolist/Todo.selectors';

export const HomeScreen: React.FC<HomeProps> = ({navigation}) => {
  const todos = useSelector(selectTodos);

  const onPressDetails = () => {
    navigation.navigate(Screens.Details);
  };

  const onPressMap = () => {
    navigation.navigate(Screens.Map);
  };

  return (
    <HomeView
      onPressDetails={onPressDetails}
      onPressMap={onPressMap}
      todos={todos}
    />
  );
};
