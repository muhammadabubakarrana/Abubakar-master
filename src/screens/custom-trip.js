import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Input, Paragraph } from "../components";
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
            <View style={styles.footer} >
                <Button type="filled" >Plan Custom Trip</Button>
            </View>
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
    heading:{
        fontFamily: theme.font.Bold,
        fontSize: baseStyle.fontSize(16),
        lineHeight: baseStyle.lineHight(19)
    },
});