import React from "react";
import {Text} from "react-native";
import {useTheme} from "../context/ThemeStore";
import {textColors, textStyles} from "./styles";

const TextC = ({children, type, style, ...otherProps}) => {
    const {THEME_COLOR} = useTheme();
    return <Text style={[{color: textColors(THEME_COLOR)[type].text}, textStyles[type], style]} {...otherProps}>{children}</Text>
}

export default TextC;
