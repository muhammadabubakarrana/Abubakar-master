import React from "react";
import { StyleSheet, SafeAreaView, Image, View, Platform, StatusBar } from "react-native";
import { baseStyle, images, routes, theme, } from "../config";
import { Button, Heading } from "../components";
import { useNavigation } from "@react-navigation/native";


export const Welcome = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Image source={images.logo} resizeMode="contain" style={styles.logo} />
            <Image source={images.bubbles} resizeMode="contain" />
            <View style={styles.card}>
                <Heading style={styles.heading} center>How would you like to proceed?</Heading>
                <Button type='filled' onPress={() => navigation.navigate(routes.REGISTER)}>
                    Register</Button>


                <Button
                    type='outlined'
                    style={styles.btn}
                    onPress={() => navigation.navigate(routes.LOGIN)}>

                    Login</Button>
            </View>
        </SafeAreaView>
    );

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0AC2CC',
        alignItems: 'center',
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    logo: { marginVertical: baseStyle.marginVertical(10) },
    paragraph: {
        marginTop: baseStyle.marginTop(5),
        marginBottom: baseStyle.marginBottom(15),
    },
    card: {
        backgroundColor: theme.colors.white,
        borderTopLeftRadius: baseStyle.borderTopLeftRadius(32),
        borderTopRightRadius: baseStyle.borderTopRightRadius(32),
        position: 'absolute',
        //   paddingHorizontal: 30,
        //  paddingTop: 30,
        //   paddingBottom: 60, 
        paddingVertical: baseStyle.paddingVertical(30),
        paddingHorizontal: baseStyle.paddingHorizontal(30),
        width: '100%',
        bottom: 0,
    },
    btn: { marginTop: baseStyle.marginTop(20) },
    heading:{
        marginBottom: baseStyle.marginBottom(40),
        lineHeight: baseStyle.lineHight(24)
    }
});
