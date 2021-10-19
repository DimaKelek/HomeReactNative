import React from 'react';
import {ThemeProvider} from './src/Common/Themes/ThemeContext';
import {LIGHT_THEME} from './src/Common/Themes/Light.Theme';
import {AppNavigation} from './src/Navigation/Navigation';
import './src/Common/Languages/i18next';
import {Provider} from 'react-redux';
import {store} from './src/Redux/store';

export const App = () => {
  return (
    <ThemeProvider initial={LIGHT_THEME}>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </ThemeProvider>
  );
};
