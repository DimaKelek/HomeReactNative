import {ColorTheme, Theme} from './types';
import {Themes} from './enum';

const DARK_COLOR_THEME: ColorTheme = {
  background: '#0e0e0e',
  font: '#ffffff',
  input: '#0e0e0e',
  placeholderColor: '#282727',
};

export const DARK_THEME: Theme = {
  id: Themes.DARK_THEME_ID,
  color: DARK_COLOR_THEME,
};
