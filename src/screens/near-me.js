import React from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Heading, Input } from "../components";
import { baseStyle } from "../config";


export const NearMe=()=>{
    return(
        <SafeAreaView style={styles.container} edges={["left", "right", "top"]}>
<View style={StyleSheet.mapContainer}>
{/* map component */}
<Input placeholder="Search Manually..."  style={styles.input}/>
</View>
<View style={styles.headingContainer}>
<Heading style={styles.heading}>Things To Do</Heading>
<TouchableOpacity>
    <Heading style={styles.heading}>List View</Heading>
</TouchableOpacity>
{/* Carousal Component */}
</View>
        </SafeAreaView>
    );
};


const styles=StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal: baseStyle.paddingHorizontal(10),
    },

});