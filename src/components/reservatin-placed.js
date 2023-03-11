import React from "react";
import { ImageBackground, Modal, StyleSheet, View } from "react-native";
import { images } from "../config";
import { Wrapper } from "./wrapper";

export const RservationPlaced = ({ visible, onRequestClose }) => {
    return (
        <Modal
            visible={visible}
            onRequestClose={onRequestClose}
            transparent={true}>

            <Wrapper style={styles.container} >
                <View style={styles.modal} >
                    <Text style={styles.heading}>Success!</Text>
                    <Text style={styles.para}>
                        Your reservation has been placed successfully. Please use this
                        e-receipt for claiming your reservation at the venue.
                    </Text>

                    <View style={styles.body} >
                        <ImageBackground
                            resizeMode="stretch"
                            source={images.home1}
                            style={styles.img}>
                            <Text style={styles.imgheading} >Mann - Cartwright Dine</Text>
                            <View style={styles.flex}>
                                <Image source={images.pin} resizeMode="contain" style={styles.imgheading} />
                                <Text style={styles.imgpara}>2535 Wunsch Stream</Text>
                            </View>
                        </ImageBackground>
                        <Text style={styles.para}>Reservation ID:s</Text>

                        <View style={styles.reservation}>
                            <Text style={styles.reservationId}>X48A36BP</Text>
                        </View>

                        <View style={styles.reservationDate}>
                            <Text style={styles.para}>Reservation Date:</Text>
                            <Text style={styles.date}>Saturday, September 12, 2021</Text>
                        </View>
                        
                    </View>
                </View>
            </Wrapper>

        </Modal>
    );
};

const styles = StyleSheet.create({

});