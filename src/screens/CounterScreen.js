import React from "react";
import {Button, Text, View} from "react-native";
import {SCREEN} from "../constants";
import {useNavigation} from "../context/NavigationStore";

const CounterScreen = () => {
    const {setScreen} = useNavigation()
    return (
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <Text>CounterScreen</Text>
            <Button title={'Go to main'} onPress={() => {
                setScreen(SCREEN.MAIN);
            }}/>
        </View>
    )
}

export default CounterScreen
