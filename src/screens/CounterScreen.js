import React from "react";
import {Button, Pressable, Text, View, Alert} from "react-native";
import {SCREEN} from "../constants";
import {useNavigation} from "../context/NavigationStore";
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const CounterScreen = () => {
    const {setScreen} = useNavigation()
    const handlePressAvatar = () => {
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
                {
                    text: 'Ask me later',
                    onPress: () => console.log('Ask me later pressed')
                },
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                { text: 'OK', onPress: () => console.log('OK Pressed'), style: 'destructive' }
            ],
            { cancelable: false }
        );
    }
    return (
        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
            <Text>CounterScreen</Text>
            <Pressable onPress={handlePressAvatar}>
                <MaterialCommunityIcon name={'account'} size={32} color={'red'}/>
            </Pressable>
            <MaterialIcon name={'android'} size={32}/>
            <Button title={'Go to main'} onPress={() => {
                setScreen(SCREEN.MAIN);
            }}/>
        </View>
    )
}

export default CounterScreen
