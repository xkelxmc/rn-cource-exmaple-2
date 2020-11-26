import React, {useEffect} from "react";
import {Text, View} from "react-native";
import { useNavigation} from "../context/NavigationStore";
import MainScreen from "../screens/MainScreen";
import CounterScreen from "../screens/CounterScreen";
import {SCREEN} from "../constants";
import {useTheme} from "../context/ThemeStore";
import PostsList from "../screens/PostsList";

const Navigation = () => {
    const {screen, setScreen} = useNavigation()
    const {theme, setDark, setLight, isLight, THEME_COLOR} = useTheme();
    let renderScreen;
    switch (screen) {
        case SCREEN.POSTS:
            renderScreen = <PostsList/>
            break;
        case SCREEN.MAIN:
            renderScreen = <MainScreen/>
            break;
        case SCREEN.COUNTER:
            renderScreen = <CounterScreen/>
            break;
    }
    return <View style={{flex: 1, backgroundColor: THEME_COLOR.MAIN_BG}}>{renderScreen}</View>
}

export default Navigation;
