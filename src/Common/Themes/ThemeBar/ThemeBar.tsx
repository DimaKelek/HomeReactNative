import React from "react";
import {Switch, Text, View} from "react-native";
import {useTheme} from "../ThemeContext";
import {ThemeBarStyles} from "./styles";
import {LIGHT_THEME} from "../Light.Theme";

export const ThemeBar: React.FC = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <View style={ThemeBarStyles.themeBar}>
            <Text style={ThemeBarStyles.title}>Theme</Text>
            <Text style={ThemeBarStyles.themeName}>
                {theme !== LIGHT_THEME ? "Dark" : "Light"}
            </Text>
            <Switch
                trackColor={{false: "#dfdde5", true: "#81b0ff"}}
                thumbColor={"#0e0e0e"}
                onValueChange={toggleTheme}
                value={theme !== LIGHT_THEME}
            />
        </View>
    );
}