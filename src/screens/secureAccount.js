import React from "react";
import { SafeAreaView, View, Image, StyleSheet, Platform, StatusBar } from "react-native";
import { images, theme, baseStyle, routes } from "../config";
import { Button, Heading, Input, Paragraph } from "../components";
import { useNavigation } from "@react-navigation/native";

export const SecureAccount = () => {

const navigation = useNavigation();


const submitHandler=()=>{
    navigation.navigate(routes.ABOUT);
};





    return (
        <SafeAreaView style={styles.container}>
            <Image source={images.logo} resizeMode="cover" style={styles.logo} />
            <Image source={images.bubbles} resizeMode="cover"/>
            <View style={styles.card}>
                <Heading center>Secure Your Account</Heading>
                <Paragraph center style={styles.para}>
                Enter and confirm a password for your account</Paragraph>
            
                <Input style={styles.input} placeholder="Password" secureTextEntry/>
                <Input style={styles.input} placeholder="Confirm Password" secureTextEntry/>
                <Button 
                onPress={submitHandler} >
                    Next (1/3)
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
        width:baseStyle.width(85),
        height: baseStyle.hight(85),
        marginVertical:baseStyle.marginVertical(40),
    },
    card: {
        backgroundColor: theme.colors.white,
        width: "100%",
        position: 'absolute',
        bottom: 0,
        borderTopRightRadius:baseStyle.borderTopRightRadius(32) ,
        borderTopLeftRadius:baseStyle.borderTopLeftRadius(32),
        paddingVertical:baseStyle.paddingVertical(30) ,
        paddingHorizontal:baseStyle.paddingHorizontal(30)
    },

    para: {
        marginTop:baseStyle.marginTop(5)  ,
        marginBottom:baseStyle.marginBottom(20)  ,
    },
    input: {
        marginBottom:baseStyle.marginBottom(20) ,
    },
    btn:{
        marginTop:baseStyle.marginTop(10) 
    },

});
