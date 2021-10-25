import React from 'react';
import {ThemeProvider} from './Common/Themes/ThemeContext';
import {LIGHT_THEME} from './Common/Themes/Light.Theme';
import {AppNavigation} from './S4-Navigation/Navigation';
import './Common/Languages/i18next';
import {Provider} from 'react-redux';
import {store} from './S3-Redux/store';

export const App = () => {
  return (
    <ThemeProvider initial={LIGHT_THEME}>
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </ThemeProvider>
  );
};
