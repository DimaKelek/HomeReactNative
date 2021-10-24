import React from 'react';
import {ThemeProvider} from 'themes/ThemeContext';
import {LIGHT_THEME} from 'themes/Light.Theme';
import {AppNavigation} from 'nav/Navigation';
import './Common/Languages/i18next';
import {Provider} from 'react-redux';
import {store} from 'redux/store';

export const App = () => {
  return (
    <ThemeProvider initial={LIGHT_THEME}>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </ThemeProvider>
  );
};
