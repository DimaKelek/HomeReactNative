import {ColorTheme, Theme} from './types';
import {Themes} from './enum';

const LIGHT_COLOR_THEME: ColorTheme = {
  background: '#ffffff',
  font: '#000000',
  input: '#ffffff',
  placeholderColor: '#494949',
  todoBackground: '#e8ecec',
};

export const LIGHT_THEME: Theme = {
  id: Themes.LIGHT_THEME_ID,
  color: LIGHT_COLOR_THEME,
};
