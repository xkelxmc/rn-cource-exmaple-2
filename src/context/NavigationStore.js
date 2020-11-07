import React, {useState} from 'react';
import {SCREEN} from '../constants';

const NavigationContext = React.createContext({screen: SCREEN.MAIN, setScreen: () => {}});

export const NavigationProvider = ({children}) => {
    const [screen, setScreen] = useState(SCREEN.MAIN);
    return <NavigationContext.Provider value={{screen, setScreen}}>
        {children}
    </NavigationContext.Provider>
}

export const useNavigation = () => {
    const {screen, setScreen} = React.useContext(NavigationContext)
    return {screen, setScreen}
}
