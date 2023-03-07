import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Carousal, Heading, Input, List, Map } from "../components";
import { baseStyle, images, routes, theme } from "../config";


export const NearMe = () => {

    const data = [
        {
            name: "Mann - Cartwright Dine",
            country: "Italian",
            rating: "4.1 rating",
            location: '2535 Wunsch Stream',
            time: 'Open until 3pm',
            img: images.home1,
        },
        {
            name: "Mann - Cartwright Dine",
            country: "Italian",
            rating: "4.1 rating",
            location: '2535 Wunsch Stream',
            time: 'Open until 3pm',
            img: images.home2,
        },
        {
            name: "Mann - Cartwright Dine",
            country: "Italian",
            rating: "4.1 rating",
            location: '2535 Wunsch Stream',
            time: 'Open until 3pm',
            img: images.home1,
        },

    ];

    const [carousalView, setCarousalView] = useState(true)
    const navigation = useNavigation()

    const toogleVeiw = () => {
        setCarousalView(!carousalView)
    }

    const navigationHandler=()=>{
        navigation.navigate(routes.Venue_Profile)
    }

    return (
        <SafeAreaView style={styles.container} edges={["left", "right", "top"]}>
            <View style={styles.mapcontainer}>
                <Map width="100%" height="100%" />
                <Input placeholder="Search Manually..." style={styles.input} />
            </View>
            <View style={styles.headingContainer}>
                <Heading style={styles.heading}>Things To Do</Heading>
                <TouchableOpacity onPress={toogleVeiw}>
                    <Heading
                        style={{ ...styles.heading, color: theme.colors.blue }}>
                        {carousalView ? "List View" : "CarousalView"}
                    </Heading>
                </TouchableOpacity>
            </View>
            {carousalView ? <Carousal data={data} onPress={navigationHandler} />
                : <List data={data} onPress={navigationHandler} />}

        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: baseStyle.paddingHorizontal(10),
    },
    mapcontainer: {
        width: '100%',
        height: (Dimensions.get('screen').height * 50) / 100,
    },
    input: {
        position: 'absolute',
        top: 20,
        width: '100%',
        alignSelf: 'center',
        paddingLeft: baseStyle.paddingLeft(15),
        backgroundColor: theme.colors.white,
    },
    headingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: baseStyle.marginTop(20),
    },
    heading: {
        fontSize: baseStyle.fontSize(14),
        lineHeight: baseStyle.lineHight(17),
        fontFamily: theme.font.Bold,
    },
});