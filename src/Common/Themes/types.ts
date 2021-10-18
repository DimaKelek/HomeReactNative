import React from 'react';

export type ColorTheme = {
  background: string;
  font: string;
};

export type Theme = {
  id: string;
  color: ColorTheme;
};

export type ProvidedValue = {
  theme: Theme;
  toggleTheme: () => void;
};

export type ThemeProviderProps = {
  initial: Theme;
  children?: React.ReactNode;
};
