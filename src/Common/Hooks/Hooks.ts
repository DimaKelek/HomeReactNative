import {useTheme} from 'themes/ThemeContext';
import {useMemo} from 'react';
import {Theme} from 'themes/types';

export const useComponentStyles = <T>(func: (theme: Theme) => T) => {
  const {theme} = useTheme();
  return useMemo(() => func(theme), [theme, func]);
};
