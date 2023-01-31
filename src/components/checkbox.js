import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { baseStyle, theme } from "../config";


export const Checkbox = ({ text, value, ...restProps }) => {
    return (<BouncyCheckbox
        {...restProps}
        size={20}
        fillColor={theme.colors.blue}
        unfillColor={theme.colors.silver}
        text={text}
        //iconStyle={{ borderColor: "red" }}
        //innerIconStyle={{ borderWidth: 2 }}
        textStyle={{
            fontSize: baseStyle.fontSize (12),
            lineHeight:baseStyle.lineHight (15),
            color: theme.colors.black,
            fontFamily: theme.font.regular,
            opacity: 0.6,
            textDecorationLine: 'none',
        }}
        onPress={isChecked => {true}}
      
    />
    );
};