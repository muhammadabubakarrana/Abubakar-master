import React from "react";
import { SafeAreaView, View, Image, StyleSheet, Platform, StatusBar } from "react-native";
import { baseStyle, images, routes, theme } from "../config";
import { Button, Heading, Paragraph } from "../components";
import { Chip } from "../components/chip";
import { useNavigation } from "@react-navigation/native";

export const About = () => {

    const navigation = useNavigation();

    const submitHandler = () => {
        navigation.navigate(routes.PREFERENCES);
    };



    return (
        <SafeAreaView style={styles.container}>
            <Image source={images.logo} resizeMode="cover" style={styles.logo} />
            <Image source={images.bubbles} resizeMode="cover" />
            <View style={styles.card}>
                <Heading center>Tell us About Yourself</Heading>
                <Paragraph center style={styles.para}>
                    Fill out below details before planning your date</Paragraph>
                <View >
                    <Paragraph>Gender</Paragraph>
                    <View style={styles.chipContainer}>
                        <Chip label="Male" chipStyle={styles.chip} checked />
                        <Chip label="Female" chipStyle={styles.chip} />
                        <Chip label="Others" chipStyle={styles.chip} />
                    </View>
                </View>
                <View style={{ marginTop: baseStyle.marginTop(8) }}>
                    <Paragraph>Occupation</Paragraph>
                    <View style={styles.chipContainer}>
                        <Chip label="Students" chipStyle={styles.chip} />
                        <Chip label="Working" chipStyle={styles.chip} checked />
                        <Chip label="Others" chipStyle={styles.chip} checked />
                    </View>
                </View>
                <Button
                    style={styles.btn}
                    onPress={submitHandler} >
                    Submit (2/3)
                </Button>
            </View>
        </SafeAreaView>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.blue,
        alignItems: "center",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },
    logo: {
        width: baseStyle.width(85),
        height: baseStyle.hight(85),
        marginVertical: baseStyle.marginVertical(40),
    },
    card: {
        backgroundColor: theme.colors.white,
        width: "100%",
        position: 'absolute',
        bottom: 0,
        borderTopRightRadius: baseStyle.borderTopRightRadius(32),
        borderTopLeftRadius: baseStyle.borderTopLeftRadius(32),
        paddingVertical: baseStyle.paddingVertical(30),
        paddingHorizontal: baseStyle.paddingHorizontal(30)
    },

    para: {
        marginTop: baseStyle.marginTop(5),
        marginBottom: baseStyle.marginBottom(20),
    },
    chipContainer: {
        display: "flex",
        flexDirection: 'row'
    },
    chip: {
        marginLeft: baseStyle.marginLeft(5),
        marginTop: baseStyle.marginTop(2)
    },
    btn: {
        marginTop: baseStyle.marginTop(10)
    },

});
