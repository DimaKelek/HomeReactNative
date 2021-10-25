import React, {FC, useRef} from 'react';
import {Animated, Text, TouchableOpacity, View} from 'react-native';
import {useComponentStyles} from 'hooks/Hooks';
import {todoStyles} from 'homeScreen/Todo/Todo.styles';
import {TodoViewPropsType} from './Todo.types';

export const TodoView: FC<TodoViewPropsType> = props => {
  const {title, longPressTodo, removeTodoHandler, selectTodoHandler} = props;
  const Styles = useComponentStyles(todoStyles);
  const anime = useRef(new Animated.Value(-90)).current;
  return (
    <Animated.View
      style={[Styles.todoWrapper, {transform: [{translateX: anime}]}]}>
      <View style={Styles.icon}>
        <Text style={Styles.button}>⚙</Text>
      </View>
      <TouchableOpacity onPress={removeTodoHandler}>
        <View style={Styles.icon}>
          <Text style={Styles.button}>🗑</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.5}
        onLongPress={() => longPressTodo(anime)}
        onPress={selectTodoHandler}>
        <View style={Styles.todoBlock}>
          <Text style={Styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};
