import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { baseStyle, images, theme, routes } from "../config";
import { Button, Input, ReservationModal } from "../components"
import { useNavigation } from "@react-navigation/native";


export const VenueProfile = () => {

    const [showModal, setShowModal] = useState(false)
    const navigation = useNavigation();

    const openModal = () => {
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

    const forReview=()=>{
        navigation.navigate(routes.REVIEW);
    }


    return (
        <>
            <SafeAreaView edges={["right", "left", "top"]} style={styles.container} >
                <View style={styles.header} >
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image resizeMode="contain" source={images.Back} />
                    </TouchableOpacity>
                    <Text style={styles.headerLabel} > Venue Profile </Text>
                    <TouchableOpacity>
                        <Image source={images.Share} resizeMode="contain" />
                    </TouchableOpacity>
                </View>
                <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
                    <Image source={images.home1} style={styles.img} resizeMode="cover" />
                    <View style={styles.detail} >
                        <Text style={styles.title} >Mann - Cartwright Dine</Text>
                        <View style={styles.flex} >
                            <Text style={styles.small} >Italian</Text>
                            <View style={{ ...styles.flex, marginLeft: baseStyle.marginLeft(30) }} >
                                <Image resizeMode="contain" source={images.star} style={[styles.starIcon]} />
                                <Text style={styles.small}> 4.1 rating</Text>
                            </View>
                        </View>
                        <View style={{ ...styles.flex, marginVertical: baseStyle.marginVertical(7) }} >
                            <Image
                                source={images.clock}
                                resizeMode="contain"
                                style={{ ...styles.icon, tintColor: theme.colors.black }} />
                            <Text style={styles.small}> Open until 3pm </Text>
                        </View>
                        <View style={{ ...styles.flex, marginBottom: baseStyle.marginBottom(30) }}  >
                            <View style={styles.flex} >
                                <Image
                                    source={images.direction}
                                    resizeMode="contain"
                                    style={{ ...styles.icon, tintColor: theme.colors.black }} />
                                <Text style={styles.small} >3.1mi</Text>
                            </View>
                            <View style={{ ...styles.flex, marginLeft: baseStyle.marginLeft(30) }} >
                                <Image
                                    source={images.pin}
                                    resizeMode="contain"
                                    style={{ ...styles.icon, tintColor: theme.colors.black }} />
                                <Text style={styles.small} >2535 Wunsch Stream, London</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.inputContainer} >
                        <Image
                            source={images.badge}
                            style={styles.inputIcon}
                            resizeMode="contain" />
                        <Input style={styles.input} placeholder="Reviews (245)" />

                        <TouchableOpacity onPress={forReview} >
                            <Image
                                source={images.after}
                                resizeMode="contain"
                                style={styles.inputIcon} />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.txtContainer}>
                        <Text style={[styles.small, styles.desc]} >Description</Text>
                        <Text style={styles.small}> Vestibulum sapien ipsum, ornare id erat in, suscipit interdum mauris. Sed quis metus volutpat, faucibus ipsum quis, viverra nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed consequat tempor velit, vitae eleifend turpis pretium laoreet. Donec mollis eros et quam molestie, in porttitor libero porta. Sed in lorem imperdiet, luctus purus sit amet, consectetur quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris bibendum libero vel ultricies dignissim. Proin eleifend feugiat tempus. Morbi a lorem et felis cursus finibus.
                            Vestibulum sapien ipsum, ornare id erat in, suscipit interdum mauris. Sed quis metus volutpat, faucibus ipsum quis, viverra nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed consequat tempor velit, vitae eleifend turpis pretium laoreet. Donec mollis eros et quam molestie, in porttitor libero porta. Sed in lorem imperdiet, luctus purus sit amet, consectetur quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris bibendum libero vel ultricies dignissim. Proin eleifend feugiat tempus. Morbi a lorem et felis cursus finibus.
                            Vestibulum sapien ipsum, ornare id erat in, suscipit interdum mauris. Sed quis metus volutpat, faucibus ipsum quis, viverra nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed consequat tempor velit, vitae eleifend turpis pretium laoreet. Donec mollis eros et quam molestie, in porttitor libero porta. Sed in lorem imperdiet, luctus purus sit amet, consectetur quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris bibendum libero vel ultricies dignissim. Proin eleifend feugiat tempus. Morbi a lorem et felis cursus finibus.
                            Vestibulum sapien ipsum, ornare id erat in, suscipit interdum mauris. Sed quis metus volutpat, faucibus ipsum quis, viverra nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed consequat tempor velit, vitae eleifend turpis pretium laoreet. Donec mollis eros et quam molestie, in porttitor libero porta. Sed in lorem imperdiet, luctus purus sit amet, consectetur quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris bibendum libero vel ultricies dignissim. Proin eleifend feugiat tempus. Morbi a lorem et felis cursus finibus.
                            Vestibulum sapien ipsum, ornare id erat in, suscipit interdum mauris. Sed quis metus volutpat, faucibus ipsum quis, viverra nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed consequat tempor velit, vitae eleifend turpis pretium laoreet. Donec mollis eros et quam molestie, in porttitor libero porta. Sed in lorem imperdiet, luctus purus sit amet, consectetur quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris bibendum libero vel ultricies dignissim. Proin eleifend feugiat tempus. Morbi a lorem et felis cursus finibus.
                        </Text>
                    </View>
                </ScrollView>

                <View style={styles.footer}>
                    <Button
                        style={styles.btn}
                        onPress={openModal}
                    >Place a Reservation</Button>
                </View>
            </SafeAreaView>

            <ReservationModal
                visible={showModal}
                rejectHandler={closeModal}
                successHandler={closeModal} />
        </>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.colors.white,
    },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    headerLabel: {
        fontFamily: theme.font.Bold,
        fontSize: baseStyle.fontSize(16),
        lineHeight: baseStyle.lineHight(19),
        color: theme.colors.black,
    },
    img: {
        height: baseStyle.hight(160),
        width: "100%",
    },
    detail: {
        paddingHorizontal: baseStyle.paddingHorizontal(10),
    },
    title: {
        fontSize: baseStyle.fontSize(16),
        lineHeight: baseStyle.lineHight(17),
        fontFamily: theme.font.Bold,
        color: theme.colors.black,
        marginVertical: baseStyle.marginVertical(15),
    },
    small: {
        fontFamily: theme.font.regular,
        lineHeight: baseStyle.lineHight(17),
        fontSize: baseStyle.fontSize(14),
        color: theme.colors.black,
        opacity: 0.5,
    },
    flex: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        height: baseStyle.hight(12),
        width: baseStyle.width(12),
        marginRight: baseStyle.marginRight(3),
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.colors.lightGrey,
        paddingVertical: baseStyle.paddingVertical(15),
        paddingHorizontal: baseStyle.paddingHorizontal(15),
        marginBottom: baseStyle.marginBottom(20),
        borderRadius: baseStyle.borderRadius(16),
        //  marginHorizontal: baseStyle.marginHorizontal(15),
    },
    input: {
        borderColor: theme.colors.lightGrey,
        flex: 1,
        paddingHorizontal: baseStyle.paddingHorizontal(18),
        paddingVertical: baseStyle.paddingVertical(5),
        fontSize: baseStyle.fontSize(13),
        lineHeight: baseStyle.lineHight(16),
    },
    inputIcon: {
        //alignItems: 'center',
        height: baseStyle.hight(20),
        width: baseStyle.width(20),
    },
    desc: {
        marginBottom: baseStyle.marginBottom(8),
        marginTop: baseStyle.marginTop(30),
        opacity: 1,
    },
    footer: {
        backgroundColor: theme.colors.white,
        borderTopLeftRadius: baseStyle.borderTopLeftRadius(32),
        borderTopRightRadius: baseStyle.borderTopRightRadius(32),
        position: 'absolute',
        opacity: 1,
        bottom: 0,
        width: "100%",
        paddingVertical: baseStyle.paddingVertical(18),
        paddingHorizontal: baseStyle.paddingHorizontal(18),
        elevation: 5,
        shadowColor: theme.colors.black,
        shadowOffset: { height: -5, width: 0 },
        shadowOpacity: 1,
        shadowRadius: 6,
    },
    txtContainer: {
        marginHorizontal: baseStyle.marginHorizontal(15)
    }
});