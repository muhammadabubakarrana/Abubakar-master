import React from "react";
import { FlatList, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { baseStyle, theme, images } from "../config";
import { Heading, Paragraph } from "../components";

export const TripList = ({ data, style, onPress, showTime, ...restProps }) => {
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

                            {/* 1st line after Heading */}
                            <View style={showTime ? { flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" } : { flexDirection: 'column' }} >
                                <View
                                    style={{
                                        ...styles.flex,
                                        marginVertical: baseStyle.marginVertical(5)
                                    }}>
                                    <Image source={images.shop} style={styles.icon} resizeMode="contain" />
                                    <Paragraph style={styles.para}>{`${item.venues} Venues`}</Paragraph>
                                </View>

                                {/* 2nd line after Heading */}


                                <View
                                    style={{
                                        ...styles.flex,
                                        marginBottom: baseStyle.marginBottom(5)
                                    }}>
                                    <Image source={images.star} style={styles.icon} resizeMode="contain" />
                                    <Paragraph style={styles.para}>{`${item.rating} rating `}</Paragraph>
                                </View>

                            </View>




                        </View>
                    </View>
                </TouchableOpacity>
            )
            }
        />
    );
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
        flex: 2,
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
        //justifyContent: 'space-between',
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