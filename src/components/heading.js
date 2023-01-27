import React from "react";
import { StyleSheet, Text } from "react-native";
import { baseStyle, theme } from "../config"

export const Heading = ({ style, center, children, ...restprops }) => {
    return (<Text {...restprops}
        style={[{
            ...styles.heading,
            textAlign: center ? "center" : "auto"
        }, style]}>
        {children}
    </Text>);
};

const styles = StyleSheet.create({
    heading: {
        fontSize:baseStyle.fontSize(24),
        lineHeight:baseStyle.lineHight (29),
        fontFamily: theme.font.regular,
        color: theme.colors.black,
    },
});

