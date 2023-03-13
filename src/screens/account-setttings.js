import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { Chip, Input, Wrapper, Paragraph, Button, Footer } from "../components";
import { images, theme, baseStyle } from "../config";


export const AccountSettings = () => {

    const navigation = useNavigation();

    return (
        <Wrapper  >
            <View style={styles.container} >
                {/* Header of the Screen */}
                <View style={styles.header} >
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <Image source={images.Back} />
                    </TouchableOpacity>
                    <Text style={styles.headingtxt} >Account Settings</Text>
                </View>

                <View style={styles.flex}>
                    <Input placeholder="First Name" style={styles.input} />
                    <Input placeholder="Last Name" style={styles.input} />
                </View>

                <Input placeholder="Date of Birth" style={styles.inputdate} />
                <View style={styles.line} />
                <Input placeholder="Email" style={styles.inputEmail} />
                <Input placeholder="Date of Birth" style={styles.inputdate} />
                <View style={styles.line} />

                <View style={styles.space} >
                    <Paragraph>Gender</Paragraph>
                    <View style={styles.chipcontainer}>
                        <Chip label="Male" chipStyle={styles.chip} checked />
                        <Chip label="Female" chipStyle={styles.chip} />
                        <Chip label="Others" chipStyle={styles.chip} />
                    </View>
                </View>
                <View style={{ marginTop: baseStyle.marginTop(10) }}>
                    <Paragraph>Occupation</Paragraph>
                    <View style={styles.chipcontainer}>
                        <Chip label="Students" chipStyle={styles.chip} />
                        <Chip label="Working" chipStyle={styles.chip} checked />
                        <Chip label="Others" chipStyle={styles.chip} checked />
                    </View>
                </View>
                <View style={styles.line} />
                <Button danger type="outlined"  >Manage My Preferences</Button>
                <Button danger type="outlined" style={{ marginTop: baseStyle.marginTop(10) }}>Change Password</Button>
            </View>
            <Footer labelone="cancel" labeltwo="save" />
        </Wrapper>

    );
};


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: baseStyle.paddingHorizontal(10)
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: baseStyle.marginBottom(5),
    },
    headingtxt: {
        marginLeft: baseStyle.marginLeft(80),
        fontSize: baseStyle.fontSize(16),
        lineHeight: baseStyle.lineHight(19),
        fontFamily: theme.font.Bold,
    },
    Back: {
        width: baseStyle.width(36),
        height: baseStyle.hight(36),
    },
    flex: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    input: {
        width: "47%"
    },
    inputdate: {
        marginTop: baseStyle.marginTop(10)
    },
    line: {
        marginTop: baseStyle.marginTop(20),
        marginBottom: baseStyle.marginBottom(25),
        borderBottomColor: theme.colors.black,
        width: '70%',
        opacity: 0.6,
        alignSelf: 'center',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    chip: {
        marginLeft: baseStyle.marginLeft(5),
        marginTop: baseStyle.marginTop(2),
    },
    chipcontainer: {
        flexDirection: "row",
        display: 'flex',
        flexWrap: 'wrap'
    }
});