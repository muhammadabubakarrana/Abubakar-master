import React from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Heading, Input, Map } from "../components";
import { baseStyle, theme } from "../config";


export const NearMe = () => {
    return (
        <SafeAreaView style={styles.container} edges={["left", "right", "top"]}>
            <View style={styles.mapcontainer}>
                <Map width="100%" height="100%" />
                <Input placeholder="Search Manually..." style={styles.input} />
            </View>
            <View style={styles.headingContainer}>
                <Heading style={styles.heading}>Things To Do</Heading>
                <TouchableOpacity>
                    <Heading style={[{...styles.heading, color:theme.colors.blue}]}>
                        List View</Heading>
                </TouchableOpacity>
            </View>
             {/* Carousal Component */}
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
      height: (Dimensions.get('screen').height*50)/100,
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
    heading:{
        fontSize: baseStyle.fontSize(14),
        lineHeight: baseStyle.lineHight(17),
        fontFamily: theme.font.Bold,
    },
});