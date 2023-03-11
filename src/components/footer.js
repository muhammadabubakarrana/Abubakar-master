import React from "react";
import { StyleSheet,View, } from "react-native";
import { Button } from "../components";
import { baseStyle, theme } from "../config";


export const Footer = ({children,onPress}) => {
    return (
        <View style={styles.footer} >
            <Button type="filled" onPress={onPress} >{children}</Button>
        </View>
    );
};


const styles=StyleSheet.create({
    footer: {
        backgroundColor: theme.colors.white,
        borderTopLeftRadius: baseStyle.borderTopLeftRadius(32),
        borderTopRightRadius: baseStyle.borderTopRightRadius(32),
        position: 'absolute',
        opacity: 1,
        bottom: 0,
        width: "100%",
        paddingVertical: baseStyle.paddingVertical(18),
        paddingHorizontal: baseStyle.paddingHorizontal(18),
        elevation: 15,
        shadowColor: theme.colors.black,
        shadowOffset: { height: -5, width: 0 },
        shadowOpacity: 1,
        shadowRadius: 6,
    },
});