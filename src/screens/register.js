import React from "react";
import { SafeAreaView, View, Image, StyleSheet, Platform, StatusBar } from "react-native";
import { images, theme, baseStyle, routes } from "../config";
import { Button, Checkbox, Heading, Input, Paragraph } from "../components";
import { useNavigation } from "@react-navigation/native";


export const Register = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <Image source={images.logo} resizeMode="cover" style={styles.logo} />
            <Image source={images.bubbles} resizeMode="cover" />
            <View style={styles.card}>
                <Heading center>Create An Account.</Heading>
                <Paragraph center style={styles.para}>
                    Please enter below details to get registered.</Paragraph>
                <View style={styles.splitInputs}>
                    <Input placeholder="First Name" style={{ width: "48%" }} />
                    <Input placeholder="Last Name" style={{ width: "48%" }} />
                </View>
                <Input style={styles.input} placeholder="Date of Birth" />
                <Input style={styles.input} placeholder="Email"/>
                <Input style={styles.input} placeholder="User Name"/>
                <Checkbox  text="Accept Terms & Conditions" style={styles.checkbox}/>
                <Button type="filled"
                onPress={()=>navigation.navigate(routes.SECCURE_ACCOUNT)}
                >Register</Button>
                <View style={styles.line} />
                <Paragraph center>Already have an account?</Paragraph>
                <Button type="outlined" 
                style={styles.btn}
                onPress={()=>navigation.navigate(routes.LOGIN)}
                >
                    Login</Button>
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
        width:baseStyle.width (100),
        height:baseStyle.hight(85),
        marginVertical:baseStyle.marginVertical (10),
    },
    card: {
        backgroundColor: theme.colors.white,
        width: "100%",
        position: 'absolute',
        bottom: 0,
        borderTopRightRadius:baseStyle.borderTopRightRadius(32),
        borderTopLeftRadius:baseStyle.borderTopLeftRadius(32),
        paddingVertical:baseStyle.paddingVertical(10),
        paddingHorizontal: baseStyle.paddingHorizontal(30),
        //padding: 30,


    },
    splitInputs: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom:baseStyle.marginBottom (10),
    },
    para: {
        marginTop:baseStyle.marginTop(5),
        marginBottom:baseStyle.marginBottom(10),
    },
    input: {
        marginBottom:baseStyle.marginBottom (10),
    },
    checkbox:{marginBottom:baseStyle.marginBottom (15),},
    btn:{
        marginTop:baseStyle.marginTop (10),
    },
    line: {
        marginVertical:baseStyle.marginVertical (20),
        borderBottomColor: 'black',
        width: '70%',
        alignSelf: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
});
