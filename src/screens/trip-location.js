import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Input, Map } from "../components";
import { baseStyle, images, theme } from "../config";


export const TripLocation = () => {

    const navigation = useNavigation();

    return (
        <SafeAreaView edges={['right', 'left', 'top']} style={styles.container} >
            <View style={styles.header} >
                <TouchableOpacity onPress={() => navigation.goBack()} >
                    <Image style={styles.backIcon} source={images.Back} resizeMode="contain" />
                </TouchableOpacity>
                <Text style={styles.heading}  >Select Trip Location</Text>
            </View>
            <View style={styles.mapContainer} >
                <Map width="100%" height="100%" />
                <Input placeholder="Search A Location" style={styles.input} />
            </View>

            <View style={styles.footer}>
                <Button onPress={()=>navigation.goBack()} style={styles.btn} type="outlined">Go Back</Button>
                <Button onPress={()=>navigation.goBack()} style={styles.btn} type="filled">Update</Button>
            </View>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
    },
    mapcontainer: {
        width: '100%',
        height: "100%",
        borderRadius: baseStyle.borderRadius(24),
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginBottom: baseStyle.marginBottom(20),
        marginTop: baseStyle.marginTop(10)
    },
    heading: {
        marginLeft: baseStyle.marginLeft(80),
        fontFamily: theme.font.Bold,
        fontSize: baseStyle.fontSize(16),
        lineHeight: baseStyle.lineHight(19)
    },
    footer: {
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: theme.colors.white,
    },
    btn: {
        width: '47%',
        //borderColor: theme.colors.blue
    },
    backIcon: {
        width: baseStyle.width(36),
        height: baseStyle.hight(36),
    },
    input:{
        position:"absolute",
        width:"100%",
        alignSelf: 'center',
        backgroundColor: theme.colors.white,
    }
});