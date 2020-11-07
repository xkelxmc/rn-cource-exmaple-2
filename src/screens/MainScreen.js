import React from "react";
import {Button, Switch, Text, View} from "react-native";
import {useNavigation} from "../context/NavigationStore";
import {SCREEN} from "../constants";
import {useTheme} from "../context/ThemeStore";
import TextC from "../text/TextC";

const MainScreen = () => {
    const {setScreen} = useNavigation();
    const {isLight, setLight, setDark, THEME_COLOR} = useTheme();
    const toggleSwitch = (value) => {
        if(value) {
           setLight();
        } else {
            setDark();
        }
    }
    return (
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <TextC type={'header2'}>MainScreen</TextC>
            <TextC type={'text2'}>MainScreen</TextC>
            <TextC type={'text3'}>MainScreen</TextC>
            <TextC type={'label'}>MainScreen</TextC>
            <Button title={'Go to counter'} onPress={() => {
                setScreen(SCREEN.COUNTER);
            }}/>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isLight ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isLight}
            />

        </View>
    )
}

export default MainScreen
