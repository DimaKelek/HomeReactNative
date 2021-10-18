import {ColorTheme, Theme} from "./types";
import {Themes} from "./enum";

const DARK_COLOR_THEME: ColorTheme = {
    background: "#282727",
    font: "#ffffff"
};

export const DARK_THEME: Theme = {
    id: Themes.DARK_THEME_ID,
    color: DARK_COLOR_THEME
};