import React from 'react';
import {ThemeProvider} from './src/Common/Themes/ThemeContext';
import {LIGHT_THEME} from './src/Common/Themes/Light.Theme';
import {AppNavigation} from './src/Navigation/Navigation';
import './src/Common/Languages/i18next';
import {langDetector} from './src/Common/Languages/langDetector';

export const App = () => {
  console.log(langDetector());
  return (
    <ThemeProvider initial={LIGHT_THEME}>
      <AppNavigation />
    </ThemeProvider>
  );
};
