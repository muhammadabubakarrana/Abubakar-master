import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { Footer, Input, Paragraph } from "../components";
import { baseStyle, images, theme } from "../config";

export const CustomTrip = () => {

    const navigation= useNavigation();

    return (
        <SafeAreaView style={styles.container}  edges={['right', 'top', "left"]} >
            <View style={styles.body} >
            <View style={styles.header} >
                <TouchableOpacity onPress={()=>navigation.goBack()} >
                    <Image style={styles.close} source={images.Close} resizeMode="contain" />
                </TouchableOpacity>
                <Text style={styles.heading} >Plan a Custom Trip</Text>
            </View>
            <Input style={styles.input} placeholder="Trip Tittle" />
            <View style={styles.line} />
            <Text style={styles.tripPlan} >Trip Plan</Text>
            <Paragraph style={styles.para} >Please add venues in your plan.</Paragraph>
           
            <TouchableOpacity 
            onPress={()=>navigation.goBack()}
            style={styles.tripbtn} >
                <Image source={images.plus} style={styles.plus} />
                <Text style={styles.venue}>Add a Venue</Text>
            </TouchableOpacity>
            </View>
            {/* This footer component which
            included a button with white outer layer */}
            <Footer>Plan Custom Trip</Footer>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: theme.colors.white,
    },
    body:{
        paddingHorizontal: baseStyle.paddingHorizontal(10),
    },
    header:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    close:{
        marginRight: baseStyle.marginRight(85),
        width: baseStyle.width(36),
        height: baseStyle.hight(36),
    },
    line:{
        borderBottomColor: theme.colors.black,
        marginVertical: baseStyle.marginVertical(23),
        width: "70%",
        alignSelf: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    tripbtn:{
        backgroundColor: theme.colors.lightBlue,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: baseStyle.borderRadius(8),
        height: baseStyle.hight(70),
    },
    plus:{
        width: baseStyle.width(13),
        height: baseStyle.hight(13),
        marginRight: baseStyle.marginRight(10)
    },
    venue:{
        fontFamily: theme.font.Bold,
        fontSize: baseStyle.fontSize(14),
        lineHeight: baseStyle.lineHight(17)
    },
    input:{
        marginTop: baseStyle.marginTop(15),
    },
    heading:{
        fontFamily: theme.font.Bold,
        fontSize: baseStyle.fontSize(16),
        lineHeight: baseStyle.lineHight(19)
    },
    tripPlan:{
        fontFamily: theme.font.Bold,
        fontSize: baseStyle.fontSize(14),
        lineHeight: baseStyle.lineHight(17),
        marginBottom: baseStyle.marginBottom(5),
    },
    para:{
        fontFamily: theme.font.light,
        fontSize: baseStyle.fontSize(12),
        lineHeight: baseStyle.lineHight(15),
        marginBottom: baseStyle.marginBottom(10),
    }
});