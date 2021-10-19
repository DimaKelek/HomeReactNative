import {useTheme} from '../Themes/ThemeContext';
import {useMemo} from 'react';
import {Theme} from '../Themes/types';

export const useComponentStyles = <T>(func: (theme: Theme) => T) => {
  const {theme} = useTheme();
  return useMemo(() => func(theme), [theme, func]);
};
