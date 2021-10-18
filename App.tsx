import React from 'react';
import {ThemeProvider} from './src/Common/Themes/ThemeContext';
import {LIGHT_THEME} from './src/Common/Themes/Light.Theme';
import {AppNavigation} from './src/Navigation/Navigation';

export const App = () => {
  return (
    <ThemeProvider initial={LIGHT_THEME}>
      <AppNavigation />
    </ThemeProvider>
  );
};
