import React from 'react';

export type ColorTheme = {
  background: string;
  font: string;
  input: string;
  placeholderColor: string;
  todoBackground: string;
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
