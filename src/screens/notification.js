import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Wrapper } from "../components";
import { baseStyle, images, theme } from "../config";


export const Notification = () => {

    const navigation= useNavigation();

    return (
        <Wrapper style={styles.container} >
            <View style={styles.header} >
                <TouchableOpacity onPress={()=>navigation.goBack()} >
                <Image source={images.Back} />
                </TouchableOpacity>
                <Text style={styles.headingtxt} >Notifications</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false} >
                <Text style={styles.heading} > New</Text>
                {/* 1st box */}
                <View style={styles.notification} >
                    <Text style={styles.notificationTitle}>Aut esse pariatur harum similique odio et.</Text>
                    <Text style={styles.notificationDesc}>Repudiandae dicta esse error sed tenetur. Eaque unde quo</Text>
                    <Text style={styles.notificationDate}>a month ago</Text>
                </View>
                {/* 2 box */}
                <View style={styles.notification} >
                    <Text style={styles.notificationTitle}>Aut esse pariatur harum similique odio et.</Text>
                    <Text style={styles.notificationDesc}>Repudiandae dicta esse error sed tenetur. Eaque unde quo</Text>
                    <Text style={styles.notificationDate}>a month ago</Text>
                </View>
                {/* 3 box */}
                <View style={styles.notification} >
                    <Text style={styles.notificationTitle}>Aut esse pariatur harum similique odio et.</Text>
                    <Text style={styles.notificationDesc}>Repudiandae dicta esse error sed tenetur. Eaque unde quo</Text>
                    <Text style={styles.notificationDate}>a month ago</Text>
                </View>
                {/* 4 box */}
                <View style={styles.notification} >
                    <Text style={styles.notificationTitle}>Aut esse pariatur harum similique odio et.</Text>
                    <Text style={styles.notificationDesc}>Repudiandae dicta esse error sed tenetur. Eaque unde quo</Text>
                    <Text style={styles.notificationDate}>a month ago</Text>
                </View>
                {/* Line */}
                <View style={styles.line} />
                {/* Old section */}
                <Text style={styles.heading} > Old</Text>
                {/* 1st box */}
                <View style={styles.notification} >
                    <Text style={styles.notificationTitle}>Aut esse pariatur harum similique odio et.</Text>
                    <Text style={styles.notificationDesc}>Repudiandae dicta esse error sed tenetur. Eaque unde quo</Text>
                    <Text style={styles.notificationDate}>a month ago</Text>
                </View>
                {/* 2 box */}
                <View style={styles.notification} >
                    <Text style={styles.notificationTitle}>Aut esse pariatur harum similique odio et.</Text>
                    <Text style={styles.notificationDesc}>Repudiandae dicta esse error sed tenetur. Eaque unde quo</Text>
                    <Text style={styles.notificationDate}>a month ago</Text>
                </View>
                {/* 3 box */}
                <View style={styles.notification} >
                    <Text style={styles.notificationTitle}>Aut esse pariatur harum similique odio et.</Text>
                    <Text style={styles.notificationDesc}>Repudiandae dicta esse error sed tenetur. Eaque unde quo</Text>
                    <Text style={styles.notificationDate}>a month ago</Text>
                </View>
                {/* 4 box */}
                <View style={styles.notification} >
                    <Text style={styles.notificationTitle}>Aut esse pariatur harum similique odio et.</Text>
                    <Text style={styles.notificationDesc}>Repudiandae dicta esse error sed tenetur. Eaque unde quo</Text>
                    <Text style={styles.notificationDate}>a month ago</Text>
                </View>
            </ScrollView>
        </Wrapper>
    );
};


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: baseStyle.paddingHorizontal(15)
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: baseStyle.marginBottom(10),
    },
    headingtxt: {
        marginLeft: baseStyle.marginLeft(100),
        fontSize: baseStyle.fontSize(16),
        lineHeight: baseStyle.lineHight(19),
        fontFamily: theme.font.Bold,
    },
    line: {
        marginVertical: baseStyle.marginVertical(25),
        borderBottomColor: theme.colors.black,
        width: '70%',
        opacity: 0.6,
        alignSelf: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    Back:{
        width: baseStyle.width(36),
        height: baseStyle.hight(36),
    },
    heading:{
        fontSize: baseStyle.fontSize(16),
        lineHeight: baseStyle.lineHight(19),
        fontFamily: theme.font.Bold, 
    },
    notification:{
        backgroundColor: theme.colors.lightGrey,
        marginTop: baseStyle.marginTop(10),
        borderRadius: baseStyle.borderRadius(8),
        paddingHorizontal: baseStyle.paddingHorizontal(15),
        paddingVertical: baseStyle.paddingVertical(15)
    },
    notificationTitle:{
        fontSize: baseStyle.fontSize(12),
        lineHeight: baseStyle.lineHight(15),
        fontFamily: theme.font.Bold, 
    },
    notificationDesc:{
        fontSize: baseStyle.fontSize(12),
        lineHeight: baseStyle.lineHight(15),
        fontFamily: theme.font.regular,
        opacity: 0.6  
    },
    notificationDate:{
        fontSize: baseStyle.fontSize(10),
        lineHeight: baseStyle.lineHight(15),
        fontFamily: theme.font.regular,
        opacity: 0.6,
        marginTop: baseStyle.marginTop(3)
    }
})