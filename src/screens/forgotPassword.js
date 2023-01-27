import React from "react";
import { SafeAreaView, View, Image, StyleSheet, Platform, StatusBar } from "react-native";
import { images, theme, baseStyle } from "../config";
import { Button, Heading, Input, Paragraph, SuccessModal } from "../components";

export const ForgotPassword = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={images.logo} resizeMode="contain" style={styles.logo} />
            <Image source={images.bubbles} resizeMode="contain" />
            <View style={styles.card}>
                <Heading center>Forgot Password?</Heading>
                <Paragraph center style={styles.para}>
                    Enter the email address associated with your account and we'll send you a password reset link</Paragraph>
                <Input style={styles.input} placeholder=" Email" keyboardType="email-address" />
                <Button>Send Link</Button>

            </View>

            <SuccessModal
                label="Success!"
                description="We have successfully sent your password reset link on your email address. Please open the link from your email to reset your password"
                visible={false} />


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
        marginBottom: baseStyle.marginBottom(40),
    },
    input: {
        marginBottom: baseStyle.marginBottom(40),
    },
    btn: {
        marginTop: baseStyle.marginTop(10)
    },

});
