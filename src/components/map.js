import React from "react";
import { StyleSheet } from "react-native";
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";
import { baseStyle } from "../config";


export const Map=({hight, width, style})=>{
    return (
        <MapView 
        provider={PROVIDER_GOOGLE} 
        style={[styles.map,{...style,hight,width} ]}
        region={{
          latitude: 37.78825, 
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
        zoomEnabled
        loadingEnabled
        />

    );
};



const styles=StyleSheet.create({
    map:{
        borderRadius:baseStyle.borderRadius(24),

    }
})