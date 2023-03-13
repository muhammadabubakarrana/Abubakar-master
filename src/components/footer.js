import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Button } from "../components";
import { baseStyle, theme } from "../config";


export const Footer = ({ children, onPress, label, labelone, labeltwo, style, showOneButton, ...restProps }) => {
    return (
        // { ...restProps }
        // <View style={styles.footer} >
        //     <Button type="filled" onPress={onPress} >{children}</Button>
        // </View>

        // }
        <View style={styles.footer} >
            {showOneButton 
            ? (
                <Button onPress={onPress} >
                    {label}
                </Button>
            ) 
            : (
                <>
                    <View style={styles.flex}>
                        <Button onPress={onPress} style={styles.btn} danger type="outlined">
                            {labelone}
                        </Button>
                        <Button onPress={onPress} style={styles.btn}>
                            {labeltwo}
                        </Button>
                    </View>
                </>
            )}
        </View>
    );
};


const styles = StyleSheet.create({
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
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    btn: {
        width: "47%"
    }
});