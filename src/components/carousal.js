import React from "react";
import { FlatList, Image, ImageBackground, View, StyleSheet } from "react-native";
import { baseStyle, images, theme } from "../config";
import { Heading, Paragraph } from "../components";


export const Carousal = ({ data, style }) => {
    return (
        <FlatList
            horizontal
            style={[style]}
            data={data}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
                <ImageBackground source={item.img}
                    style={styles.flatList}
                    resizeMode='contain'>

                    <Heading style={styles.heading}>{item.name}</Heading>
                    <View
                        style={{
                            ...styles.flex,
                            marginVertical: baseStyle.marginVertical(5)
                        }}>
                        <Paragraph style={styles.para}>{item.country}</Paragraph>
                        <View style={styles.flex}>
                            <Image source={images.star} style={styles.img} />
                            <Paragraph style={styles.para}>{item.rating}</Paragraph>
                        </View>
                    </View>
{/* 2nd */}
                    <View
                        style={{
                            ...styles.flex,
                            marginVertical: baseStyle.marginVertical(5)
                        }}>
                        <View style={styles.flex}>
                            <Image source={images.pin} style={styles.img} />
                            <Paragraph style={styles.para}>{item.location}</Paragraph>
                        </View>
                        <View style={styles.flex}>
                            <Image source={images.clock} style={styles.img} />
                            <Paragraph style={styles.para}>{item.time}</Paragraph>
                        </View>
                    </View>



                </ImageBackground>
            )}
        />
    );
};


const styles= StyleSheet.create({
flatList:{
    paddingTop: baseStyle.paddingTop(84),
    paddingLeft: baseStyle.paddingLeft(15),
    paddingBottom: baseStyle.paddingBottom(15),
    paddingRight: baseStyle.paddingRight(44),
    marginVertical: baseStyle.marginVertical(10),
    marginRight: baseStyle.marginRight(10),
    width: baseStyle.width(315)
},
heading:{
    color: theme.colors.white,
    fontSize: baseStyle.fontSize(14),
    lineHeight: baseStyle.lineHight(17),
    fontFamily: theme.font.Bold,
    opacity:1,
},
flex:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
},
para:{
    color: theme.colors.white,
    fontSize: baseStyle.fontSize(10),
    lineHeight: baseStyle.lineHight(12),
    opacity:1,
    fontFamily: theme.font.light,
},
img:{
        marginRight: baseStyle.marginRight(3),
},

});