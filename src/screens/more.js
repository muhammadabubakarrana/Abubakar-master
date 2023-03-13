import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Wrapper } from "../components";
import { baseStyle, images, routes, theme } from "../config";


export const More=()=>{

const navigation=useNavigation();

    return(
        <Wrapper style={styles.container}  >
            {/* 1st */}
            <TouchableOpacity style={styles.accordian} onPress={()=>navigation.navigate(routes.NOTIFICATION)} >
                <View style={styles.flex} >
                    <Image style={styles.img} source={images.bell} />
                    <Text style={styles.accordiantxt} >Notification</Text>
                </View>
                <Image style={styles.img} source={images.after} />
            </TouchableOpacity>
            <View style={styles.line} />
            {/* 2 */}
            <TouchableOpacity style={styles.accordian} onPress={()=>navigation.navigate(routes.ACCOUNT_SETTINGS)} >
                <View style={styles.flex} >
                    <Image style={styles.img} source={images.account} />
                    <Text style={styles.accordiantxt} >Account Settings</Text>
                </View>
                <Image style={styles.img} source={images.after} />
            </TouchableOpacity>
            {/* 3 */}
            <TouchableOpacity style={styles.accordian} >
                <View style={styles.flex} >
                    <Image style={styles.img} source={images.setting} />
                    <Text style={styles.accordiantxt} >App Settings</Text>
                </View>
                <Image style={styles.img} source={images.after} />
            </TouchableOpacity>
            {/* 4 */}
            <TouchableOpacity style={styles.accordian} >
                <View style={styles.flex} >
                    <Image style={styles.img} source={images.term} />
                    <Text style={styles.accordiantxt} >Terms & Conditions</Text>
                </View>
                <Image style={styles.img} source={images.after} />
            </TouchableOpacity>
            {/* 5 */}
            <TouchableOpacity style={styles.accordian} >
                <View style={styles.flex} >
                    <Image style={styles.img} source={images.privacy} />
                    <Text style={styles.accordiantxt} >Privacy Policy</Text>
                </View>
                <Image style={styles.img} source={images.after} />
            </TouchableOpacity>
            <View style={styles.line} />
            {/* 6 */}
            <TouchableOpacity style={styles.accordian} >
                <View style={styles.flex} >
                    <Image style={styles.img} source={images.logout} />
                    <Text style={styles.accordiantxt} >Logout</Text>
                </View>
                <Image style={styles.img} source={images.after} />
            </TouchableOpacity>
        </Wrapper>
    );
};

const styles= StyleSheet.create({
    container:{
        paddingHorizontal: baseStyle.paddingHorizontal(10)
    },
    flex:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', 
    },
    img:{
        height: baseStyle.hight(20),
        width: baseStyle.width(20),
    },
    accordiantxt:{
        fontSize: baseStyle.fontSize(13),
        lineHeight: baseStyle.lineHight(16),
        fontFamily: theme.font.regular,
        marginLeft: baseStyle.marginLeft(15)
    },
    line: {
        marginVertical: baseStyle.marginVertical(25),
        borderBottomColor: theme.colors.black,
        width: '70%',
        opacity: 0.6,
        alignSelf: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      accordian:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: baseStyle.marginTop(10),
        paddingVertical: baseStyle.paddingVertical(15),
        borderRadius: baseStyle.borderRadius(16),
        paddingHorizontal: baseStyle.paddingHorizontal(15),
        backgroundColor: theme.colors.lightGrey,
      },
});