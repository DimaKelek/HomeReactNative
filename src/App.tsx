import React, {useEffect} from 'react';
import {ThemeProvider} from './Common/Themes/ThemeContext';
import {LIGHT_THEME} from './Common/Themes/Light.Theme';
import {AppNavigation} from './Navigation/Navigation';
import './Common/Languages/i18next';
import {Provider} from 'react-redux';
import {store} from './Redux/store';
import firestore from '@react-native-firebase/firestore';
import database from '@react-native-firebase/database';

export const App = () => {
  const qwer = async () => {
    const users = await firestore()
      .collection('users')
      .doc('KK6nEkgfrnJM5uQVREbk')
      .get();
    console.log(users.data());
  };

  const zxc = async () => {
    const reference = await database().ref('/qwer');
    console.log(reference);
    const value = await reference.once('value')
    console.log(value.val());
  };

  useEffect(() => {
    zxc();
    qwer();
  }, []);

  return (
    <ThemeProvider initial={LIGHT_THEME}>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </ThemeProvider>
  );
};
