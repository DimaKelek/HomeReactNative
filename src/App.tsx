import React, {useEffect} from 'react';
import {ThemeProvider} from './Common/Themes/ThemeContext';
import {LIGHT_THEME} from './Common/Themes/Light.Theme';
import {AppNavigation} from './Navigation/Navigation';
import './Common/Languages/i18next';
import {Provider} from 'react-redux';
import {store} from './Redux/store';
import SplashScreen from 'react-native-splash-screen';

//<ImageView android:layout_width="match_parent" android:layout_height="match_parent" android:src="@drawable/launch_screen" android:scaleType="centerCrop" />

export const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ThemeProvider initial={LIGHT_THEME}>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </ThemeProvider>
  );
};
