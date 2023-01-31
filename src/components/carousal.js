import React from "react";
import { FlatList, Image, ImageBackground, View } from "react-native";
import { baseStyle } from "../config";
import { Heading, Paragraph } from "../components";


export const Carousal = ({ data }) => {
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
                            <Image source={images.starIcon} style={styles.img} />
                            <Paragraph style={styles.para}>{item.rating}</Paragraph>
                        </View>
                    </View>

                </ImageBackground>
            )}
        />
    );
}