import React from "react";
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { baseStyle, theme, images } from "../config";
import { Heading, Paragraph } from "../components";

export const List = ({ data, style, showTime, onPress, ...restProps }) => {
    return (
        <FlatList
            {...restProps}
            data={data}
            style={[style]}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={onPress}>
                    <View style={styles.container}>
                        <Image source={item.img} resizeMode="cover" style={styles.img} />
                        <View style={styles.description}>

                            {
                                showTime && (
                                    <Heading style={[{ ...styles.remainingTime, color: theme.colors.green }]} >{item.remainingTime}</Heading>
                                )
                            }

                            <Heading style={!showTime ? styles.heading : { ...styles.remainingTime, color: theme.colors.black }} >{item.name}</Heading>



                            {
                                !showTime && (
                                    <View
                                        style={{
                                            ...styles.flex,
                                            marginVertical: baseStyle.marginVertical(5)
                                        }}>
                                        <Paragraph style={styles.para}>{item.country}</Paragraph>
                                        <View style={styles.flex}>
                                            <Image source={images.star} style={styles.icon} resizeMode="contain" />
                                            <Paragraph style={styles.para}>{item.rating}</Paragraph>
                                        </View>
                                    </View>
                                )
                            }


                            <View style={styles.flex}>
                                <View style={styles.flex}>
                                    <Image source={images.pin}
                                        style={{ ...styles.icon, tintColor: theme.colors.black }}
                                        resizeMode="contain" />
                                    <Paragraph style={styles.para}>{item.location}</Paragraph>
                                </View>
                                <View style={styles.flex}>
                                    <Image source={images.clock}
                                        style={{ ...styles.icon, tintColor: theme.colors.black }}
                                        resizeMode="contain" />
                                    <Paragraph style={styles.para}>{item.time}</Paragraph>
                                </View>
                            </View>






                        </View>
                    </View>
                </TouchableOpacity>
            )}
        />
    )
};

const styles = StyleSheet.create({
    container: {
        marginTop: baseStyle.marginTop(10),
        //marginVertical: baseStyle.marginVertical(10),
        height: baseStyle.hight(70),
        borderRadius: baseStyle.borderRadius(8),
        backgroundColor: theme.colors.lightGrey,
        flexDirection: "row",
    },
    img: {
        // marginTop: baseStyle.marginTop(10),
        borderRadius: baseStyle.borderRadius(8),
        height: "100%",
        flex: 1,
    },
    remainingTime:{
        fontSize: baseStyle.fontSize(12),
        lineHeight: baseStyle.lineHight(15),
        marginBottom: baseStyle.marginBottom(5),
    },
    description: {
        paddingVertical: baseStyle.paddingVertical(10),
        paddingLeft: baseStyle.paddingLeft(15),
        paddingRight: baseStyle.paddingRight(30),
        flex: 3,
    },
    heading: {
        color: theme.colors.black,
        fontSize: baseStyle.fontSize(14),
        lineHeight: baseStyle.lineHight(17),
        fontFamily: theme.font.Bold,
        opacity: 1,
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    para: {
        color: theme.colors.black,
        fontSize: baseStyle.fontSize(10),
        lineHeight: baseStyle.lineHight(12),
        opacity: 1,
        fontFamily: theme.font.light,
    },
    icon: {
        marginRight: baseStyle.marginRight(3)
    }
});