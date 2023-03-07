import React from "react";
import { Image, Modal, StyleSheet, View } from "react-native";
import { baseStyle, images, theme } from "../config";
import { Button, Heading, Input, Paragraph } from "../components";

export const ReservationModal = ({ visible, onRequestClose, rejectHandler, successHandler }) => {
    return (
        <Modal
            animationType="fade"
            visible={visible}
            transparent={true}
            onRequestClose={onRequestClose}
        >
            <View style={styles.container}>
                <View style={styles.modal}>
                    <Heading center style={styles.heading}>Place a Reservation</Heading>
                    <Input placeholder="Day & Date" />
                    <View style={styles.inputContainer} >
                        <Input style={styles.input} placeholder="Time" />
                        <Input style={styles.input} placeholder="Attendance" />
                    </View>
                    <Input placeholder="Extra Note" />

                    <View style={styles.flex} >
                        <Button
                            danger
                            type="outlined"
                            onPress={rejectHandler}
                            style={styles.btn}>Close</Button>

                        <Button
                           // type="filled"
                            onPress={successHandler}
                            style={styles.btn}>Place</Button>

                    </View>

                </View>
            </View>
        </Modal>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        backgroundColor: theme.colors.white,
        borderRadius: baseStyle.borderRadius(32),
        paddingVertical: baseStyle.paddingVertical(20),
        paddingHorizontal: baseStyle.paddingHorizontal(20),
        width: "80%",
        shadowColor: theme.colors.darkSilver,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 6,
        elevation: 5,
        shadowOpacity: 1,
        height: 'auto',
    },
    heading:{
        fontFamily: theme.font.Bold,
        fontSize: baseStyle.fontSize(16),
        lineHeight: baseStyle.lineHight(19),
        marginBottom: baseStyle.marginBottom(30),
    },
    inputContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: baseStyle.marginTop(15),
    },
    btn:{
        width: "47%",
    },
    input:{
        width: "47%",
        marginBottom: baseStyle.marginBottom(15), 
    },
    flex:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        marginTop: baseStyle.marginTop(15),
    },
});