import {StyleSheet, TextStyle, ViewStyle} from "react-native";

type ThemeBarType = {
    themeBar: ViewStyle
    title: TextStyle
    themeName: TextStyle
}

export const ThemeBarStyles = StyleSheet.create<ThemeBarType>({
    themeBar: {
        width: "100%",
        height: 50,
        padding: 10,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#2997dc"
    },
    title: {
        fontSize: 16,
        fontWeight: "bold"
    },
    themeName: {
        fontSize: 24,
        fontWeight: "bold"
    }
})