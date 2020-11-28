import React, {useEffect, useState} from 'react'
import {View, Text, Button} from "react-native";

const ExampleComponent = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log('onMount')
        setCount(10)
        return () => {
            console.log('onUnMount')
        }
    }, [])

    useEffect(() => {
        console.log({count})
        return () => {
            console.log('r:', {count})
        }
    }, [count])


    const handlePress = () => {
        setCount(prev => prev + 1)
    }

    return <View style={{backgroundColor: 'yellow', alignItems: 'center'}}>
        <Text>{count}</Text>
        <Button title={'+'} onPress={handlePress}/>
    </View>;
}

export default ExampleComponent