import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input, TripList } from "../components";
import { baseStyle, images, routes, theme } from "../config";


export const PlanTrip = () => {

    const navigation=useNavigation();

    const data = [
        {
            name: "Eveniet Assumenda Trip",
            country: "Italian",
            rating: "4.1",
            venues: "5",
            img: images.humanone,
        },
        {
            name: "Provident Ea Trip",
            country: "Italian",
            rating: "4.1",
            venues: "2",
            img: images.humantwo,
        },
        {
            name: "Mann - Cartwright Dine",
            country: "Italian",
            rating: "4.1",
            venues: "3",
            img: images.humanone,
        },
        {
            name: "Provident Ea Trip",
            country: "Italian",
            rating: "4.1",
            venues: "2",
            img: images.humantwo,
        },
        {
            name: "Mann - Cartwright Dine",
            country: "Italian",
            rating: "4.1",
            venues: "3",
            img: images.humanone,
        },
        {
            name: "Provident Ea Trip",
            country: "Italian",
            rating: "4.1",
            venues: "2",
            img: images.humantwo,
        },

    ];

    return (
        <SafeAreaView style={styles.container} edges={['right', 'top', "left"]} >
            <Input placeholder="Search Manually..." style={styles.input} />
            <TouchableOpacity 
            onPress={()=>navigation.navigate(routes.CUSTOM_TRIP)}
            style={styles.tripbtn} >
                <Image source={images.plus} style={styles.plus} />
                <Text style={styles.heading}>Plan a Custom Trip</Text>
            </TouchableOpacity>
            <View style={styles.line} />
            <View style={{ ...styles.locationContainer, ...styles.flex }} >
                <View style={styles.flex}>
                    <Image source={images.pin} style={styles.pin} />
                    <View >
                        <Text style={styles.result} >Showing Results For:</Text>
                        <Text style={styles.location} >Current Location</Text>
                    </View>
                </View>
                <TouchableOpacity onPress={()=>navigation.navigate(routes.TRIP_LOCATION)} >
                    <Image source={images.pencil} style={styles.pencil} />
                </TouchableOpacity>
            </View>
            <Text style={styles.heading} >Trips Available</Text>
                <TripList data={data} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
        paddingHorizontal: baseStyle.paddingHorizontal(10),
        paddingTop: baseStyle.paddingTop(20),
    },
    input:{
        paddingLeft: baseStyle.paddingLeft(15),
        backgroundColor: theme.colors.white,
        marginBottom: baseStyle.marginBottom(20),
        width: "100%"
    },
    tripbtn:{
        backgroundColor: theme.colors.lightBlue,
        borderRadius: baseStyle.borderRadius(8),
        height: baseStyle.hight(70),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        //paddingVertical: baseStyle.paddingVertical(25),
    },
    plus:{
        width: baseStyle.width(13),
        height: baseStyle.hight(13),
        marginRight: baseStyle.marginRight(10)
    },
    heading:{
        fontFamily: theme.font.Bold,
        fontSize: baseStyle.fontSize(14),
        lineHeight: baseStyle.lineHight(17)
    },
    line:{
        borderBottomColor: theme.colors.black,
        width: "70%",
        alignSelf: 'center',
        marginVertical: baseStyle.marginVertical(21),
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    flex: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    locationContainer:{
        backgroundColor: theme.colors.lightGrey,
        paddingLeft: baseStyle.paddingLeft(15),
        paddingVertical: baseStyle.paddingVertical(8),
        paddingRight: baseStyle.paddingRight(8),
        borderRadius: baseStyle.borderRadius(16),
        marginBottom: baseStyle.marginBottom(20),
    },
    pin:{
        width: baseStyle.width(14),
        height: baseStyle.hight(20),
        tintColor: theme.colors.blue,
        marginRight: baseStyle.marginRight(15)
    },
    result:{
        fontSize: baseStyle.fontSize(10),
        lineHeight: baseStyle.lineHight(12),
        fontFamily: theme.font.Bold,
        marginBottom: baseStyle.marginBottom(7),
        color: theme.colors.black,
        opacity: 0.7
    },
    location:{
        fontSize: baseStyle.fontSize(14),
        lineHeight: baseStyle.lineHight(17),
        fontFamily: theme.font.regular,
        color: theme.colors.black,
        opacity: 0.7
    },
    pencil:{
        width: baseStyle.width(36),
        height: baseStyle.hight(36),
    }
});