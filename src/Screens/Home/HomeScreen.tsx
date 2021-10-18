import React, {useMemo} from "react";
import {Button, Text, View} from "react-native";
import {useTheme} from "../../Common/Themes/ThemeContext";
import {HomeStyles} from "./styles";
import {Screens} from "../../Navigation/enum";

export const HomeScreen: React.FC<any> = ({navigation}) => {
    const {theme} = useTheme();
    const Styles = useMemo(() => HomeStyles(theme), [theme]);

    const onPressHandler = () => {
        navigation.navigate(Screens.Details)
    }

    return (
        <View style={Styles.home}>
            <Text style={Styles.text}>Home Screen</Text>
            <Button
                title={Screens.Details}
                onPress={onPressHandler}
            />
        </View>
    );
}