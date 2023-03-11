import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
import { baseStyle, theme } from "../config";

export const Button = ({ children, type, style,danger, ...restProps }) => {
    return (
        <TouchableOpacity {...restProps}
            style=
            {[type === 'outlined'
                ? { ...styles.btn, ...styles.btnOutlined, borderColor:danger?"red": theme.colors.blue }
                : { ...styles.btn, ...styles.btnFilled }, style]}>

            <Text style={
                type === 'outlined'
                    ? { ...styles.text, ...styles.textOutlined ,
                        Color : danger ? 'red' : theme.colors.blue }
                    : { ...styles.text, ...styles.textFilled}
            }>{children}</Text>
        </TouchableOpacity>
    );
};



const styles = StyleSheet.create({
    btn: {
        paddingVertical: baseStyle.paddingVertical (12),
        // paddingHorizontal: 142,
        borderRadius:baseStyle.borderRadius (23),
        shadowColor: theme.colors.silver,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 6,
        shadowOpacity: 1,
        alignItems: "center"
    },
    btnFilled: {
        backgroundColor: theme.colors.blue,
        color: theme.colors.white,
    },
    btnOutlined: {
        backgroundColor: theme.colors.white,
        borderColor: theme.colors.blue,
        borderWidth:baseStyle.borderWidth (1),
    },
    text: {
        fontSize:baseStyle.fontSize(12),
        fontFamily: theme.font.regular,
        lineHeight: baseStyle.lineHight (18),
    },
    textOutlined: {
        color: theme.colors.blue,
    },
    textFilled: {
        color: theme.colors.white,
    }
});


