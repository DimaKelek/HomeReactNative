import React, {FC} from 'react';
import {FlatList, Text, View} from 'react-native';
import {homeStyles} from './HomeView.styles';
import {Screens} from 'nav/enum';
import {useComponentStyles} from 'hooks/Hooks';
import {useTranslation} from 'react-i18next';
import {HomeViewPropsType} from './Home.types';
import {MyButton} from 'components/MyButton/MyButton';
import {Todo} from './Todo';

export const HomeView: FC<HomeViewPropsType> = props => {
  const {onPressDetails, onPressMap, todos} = props;
  const Styles = useComponentStyles(homeStyles);
  const {t} = useTranslation();
  return (
    <View style={Styles.home}>
      <MyButton
        title={t(Screens.Map)}
        onPress={onPressMap}
        style={Styles.mapButton}
      />
      <View style={Styles.flatContainer}>
        <FlatList
          style={Styles.todolists}
          data={todos}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Todo todo={item} onPressDetails={onPressDetails} />
          )}
        />
      </View>
    </View>
  );
};

// <MyButton title={t(Screens.Details)} onPress={onPressDetails} />
//       <Slider
//         style={Styles.slider}
//         value={value}
//         onValueChange={setValue}
//         step={100}
//         minimumValue={0}
//         maximumValue={1000}
//         minimumTrackTintColor={'#57bd8a'}
//         maximumTrackTintColor={'#123'}
//       />
//       <Text>{value}</Text>
