import {useTheme} from 'themes/ThemeContext';
import {useMemo} from 'react';
import {Theme} from '../Themes/Theme.types';

export const useComponentStyles = <T>(func: (theme: Theme, arg?: any) => T) => {
  const {theme} = useTheme();
  return useMemo(() => func(theme), [theme, func]);
};
