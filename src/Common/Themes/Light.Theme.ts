import {ColorTheme, Theme} from './types';
import {Themes} from './enum';

const LIGHT_COLOR_THEME: ColorTheme = {
  background: '#ffffff',
  font: '#000000',
  input: '#d0cfcf',
};

export const LIGHT_THEME: Theme = {
  id: Themes.LIGHT_THEME_ID,
  color: LIGHT_COLOR_THEME,
};
