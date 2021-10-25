import React, {FC, useState} from 'react';
import {TodoView} from 'homeScreen/Todo/TodoView';
import {Animated} from 'react-native';
import {TodoPropsType} from 'homeScreen/Todo/Todo.types';
import {useDispatch} from 'react-redux';
import {checkTodoTasks, removeTodo} from 'redux/Todo/Todolist/Todo.actions';

export const Todo: FC<TodoPropsType> = ({todo, onPressDetails}) => {
  const dispatch = useDispatch();
  const [mode, setMode] = useState<boolean>(false);

  const longPressTodo = (anime: any) => {
    Animated.timing(anime, {
      toValue: mode ? 0 : -90,
      duration: 500,
      useNativeDriver: true,
    }).start();
    setMode(!mode);
  };

  const removeTodoHandler = () => {
    dispatch(removeTodo(todo.id));
  };

  const selectTodoHandler = () => {
    onPressDetails();
    dispatch(checkTodoTasks(todo.id));
  };

  return (
    <TodoView
      title={todo.title}
      longPressTodo={longPressTodo}
      removeTodoHandler={removeTodoHandler}
      selectTodoHandler={selectTodoHandler}
    />
  );
};
