import React, {FC, useMemo} from "react";
import {Text, View} from "react-native";
import {detailsStyles} from "./styles";
import {useTheme} from "../../Common/Themes/ThemeContext";

export const DetailsScreen: FC<any> = () => {
    const {theme} = useTheme();
    const Styles = useMemo(() => detailsStyles(theme), [theme]);

    return (
        <View style={Styles.details}>
            <Text style={Styles.text}>Details Screen</Text>
        </View>
    );
}