import {LIGHT_THEME} from './Light.Theme';
import {ProvidedValue, Theme, ThemeProviderProps} from './types';
import React, {
  createContext,
  memo,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import {DARK_THEME} from './Dark.theme';
import {Themes} from './enum';

const Context = createContext<ProvidedValue>({
  theme: LIGHT_THEME,
  toggleTheme: () => console.log('ThemeProvider is not rendered!'),
});

export const ThemeProvider = memo<ThemeProviderProps>(({initial, children}) => {
  const [theme, setTheme] = useState<Theme>(initial);

  const ToggleThemeCallback = useCallback(() => {
    setTheme(currentTheme => {
      if (currentTheme.id === Themes.LIGHT_THEME_ID) {
        return DARK_THEME;
      }
      if (currentTheme.id === Themes.DARK_THEME_ID) {
        return LIGHT_THEME;
      }
      return currentTheme;
    });
  }, []);

  const MemoizedValue = useMemo(() => {
    const value: ProvidedValue = {
      theme,
      toggleTheme: ToggleThemeCallback,
    };
    return value;
  }, [theme, ToggleThemeCallback]);

  return <Context.Provider value={MemoizedValue}>{children}</Context.Provider>;
});

export const useTheme = () => useContext(Context);
