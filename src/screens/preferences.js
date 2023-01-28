import React from "react";
import { SafeAreaView, View, Image, StyleSheet, Platform, StatusBar } from "react-native";
import { baseStyle, images, theme } from "../config";
import { Button, Heading, Paragraph, Chip, SuccessModal } from "../components";


export const Preferences = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Image source={images.logo} resizeMode="cover" style={styles.logo} />
            <Image source={images.bubbles} resizeMode="cover" />
            <View style={styles.card}>
                <Heading center>Your Prefercences</Heading>
                <Paragraph center style={styles.para}>
                    Let us know your preference so you can have a best date</Paragraph>
                <View >
                    <Paragraph>Outdoor Activities</Paragraph>
                    <View style={styles.chipContainer}>
                        <Chip label="Select All"
                            chipStyle={{ ...styles.chip, backgroundColor: theme.colors.lightGrey }}
                            labelStyle={styles.labelStyle} checked />


                        <Chip label="Hiking" chipStyle={styles.chip} />
                        <Chip label="Cycling" chipStyle={styles.chip} checked />
                        <Chip label="Rock Climbing" chipStyle={styles.chip} />
                        <Chip label="Fishing" chipStyle={styles.chip} />
                        <Chip label="Outdoor Golf" chipStyle={styles.chip} />
                        <Chip label="Outdoor ice Skating" chipStyle={styles.chip} />
                        <Chip label="Amusement Park" chipStyle={styles.chip} />
                        <Chip label="Picnic" chipStyle={styles.chip} />
                        <Chip label="Winery" chipStyle={styles.chip} checked />
                        <Chip label="See More"
                            chipStyle={{ ...styles.chip, ...styles.outlineChip }} labelStyle={styles.labelStyle} />


                    </View>
                </View>
                <View style={{ marginTop: baseStyle.marginTop(8) }}>
                    <Paragraph>Indoor Activities</Paragraph>
                    <View style={styles.chipContainer}>
                        <Chip label="Select All"
                            chipStyle={{ ...styles.chip, backgroundColor: theme.colors.lightGrey }}
                            labelStyle={styles.labelStyle} />



                        <Chip label="Cinema" chipStyle={styles.chip} checked />
                        <Chip label="Theatre" chipStyle={styles.chip} />
                        <Chip label="indoor Golf" chipStyle={styles.chip} />
                        <Chip label="Swimming" chipStyle={styles.chip} checked />
                        <Chip label="Gym" chipStyle={styles.chip} />
                        <Chip label="Spa" chipStyle={styles.chip} />
                        <Chip label="Indoor Golf" chipStyle={styles.chip} />
                        <Chip label="Darts" chipStyle={styles.chip} />
                        <Chip label="Arcade" chipStyle={styles.chip} />
                        <Chip label="Ping Pong" chipStyle={styles.chip} checked />
                        <Chip label="Shuffle Board" chipStyle={styles.chip} />
                        <Chip label="See More"
                            chipStyle={{ ...styles.chip, ...styles.outlineChip }}
                            labelStyle={styles.labelStyle} />

                    </View>
                </View>
                <View style={{ marginTop: baseStyle.marginTop(8) }}>
                    <Paragraph>Restaurant Types</Paragraph>
                    <View style={styles.chipContainer}>
                        <Chip label="Select All"
                            chipStyle={{ ...styles.chip, backgroundColor: theme.colors.lightGrey }}
                            labelStyle={styles.labelStyle} />


                        <Chip label="Chinese" chipStyle={styles.chip} checked />
                        <Chip label="Greek" chipStyle={styles.chip} />
                        <Chip label="African" chipStyle={styles.chip} />
                        <Chip label="British" chipStyle={styles.chip} checked />
                        <Chip label="Mexico" chipStyle={styles.chip} />
                        <Chip label="Swedish" chipStyle={styles.chip} />
                        <Chip label="Latenian" chipStyle={styles.chip} />
                        <Chip label="Italian" chipStyle={styles.chip} />
                        <Chip label="Thai" chipStyle={styles.chip} />
                        <Chip label="Russia" chipStyle={styles.chip} checked />
                        <Chip label="Jewish" chipStyle={styles.chip} />
                        <Chip label="Polish" chipStyle={styles.chip} />
                        <Chip label="French" chipStyle={styles.chip} />
                        <Chip label="SeeMore"
                            chipStyle={{ ...styles.chip, ...styles.outlineChip }}
                            labelStyle={styles.labelStyle} />
                    </View>
                </View>
                <Button style={styles.btn}>Submit (3/3)</Button>
            </View>
            <SuccessModal 
            label="All Done!"
            description="Your account has been successfully registered. You can now proceed a trip or a reservation for your date."
            visible={false} 
            
            />
           
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
        width: baseStyle.width(90),
        height: baseStyle.hight(85),
        marginVertical: baseStyle.marginVertical(5),
    },
    card: {
        backgroundColor: theme.colors.white,
        width: "100%",
        position: 'absolute',
        bottom: 0,
        borderTopRightRadius: baseStyle.borderTopRightRadius(32),
        borderTopLeftRadius: baseStyle.borderTopLeftRadius(32),
        paddingVertical: baseStyle.paddingVertical(10),
        paddingHorizontal: baseStyle.paddingHorizontal(20)
    },

    para: {
        marginTop: baseStyle.marginTop(5),
        marginBottom: baseStyle.marginBottom(10),
    },
    chipContainer: {
        display: "flex",
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    chip: {
        marginLeft: baseStyle.marginLeft(5),
        marginTop: baseStyle.marginTop(2),
    },
    labelStyle: {
        color: theme.colors.blue,
    },
    outlineChip: {
        borderWidth: baseStyle.borderWidth(1),
        backgroundColor: theme.colors.white,
        borderColor: theme.colors.blue,
    },
    btn: {
        marginTop: baseStyle.marginTop(10)
    },

});
