import React, {useEffect} from "react";
import {Text, View} from "react-native";
import { useNavigation} from "../context/NavigationStore";
import MainScreen from "../screens/MainScreen";
import CounterScreen from "../screens/CounterScreen";
import {SCREEN} from "../constants";
import {useTheme} from "../context/ThemeStore";

const Navigation = () => {
    const {screen, setScreen} = useNavigation()
    const {theme, setDark, setLight, isLight} = useTheme();
    let renderScreen;
    switch (screen) {
        case SCREEN.MAIN:
            renderScreen = <MainScreen/>
            break;
        case SCREEN.COUNTER:
            renderScreen = <CounterScreen/>
            break;
    }
    return <View style={{flex: 1, backgroundColor: isLight ? '#fff' : '#424242'}}>{renderScreen}</View>
}

export default Navigation;
