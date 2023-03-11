import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { List, Wrapper, TripList } from "../components";
import SwitchSelector from "react-native-switch-selector";
import { baseStyle, theme, images } from "../config";


export const PlannedDates = () => {

    const [mode, setMode]=useState("dates");

    const listData = [
        {
            name: "Mann - Cartwright Dine",
            country: "Italian",
            rating: "4.1 rating",
            location: '2535 Wunsch Stream',
            time: 'Open until 3pm',
            remainingTime: "Time Left: 2 days 3 hours",
            img: images.home1,
        },
        {
            name: "Mann - Cartwright Dine",
            country: "Italian",
            rating: "4.1 rating",
            location: '2535 Wunsch Stream',
            time: 'Open until 3pm',
            remainingTime: "Time Left: 2 days 3 hours",
            img: images.home2,
        },
        {
            name: "Mann - Cartwright Dine",
            country: "Italian",
            rating: "4.1 rating",
            location: '2535 Wunsch Stream',
            time: 'Open until 3pm',
            remainingTime: "Time Left: 2 days 3 hours",
            img: images.home1,
        },

    ];

    const data = [
        {
            name: "Eveniet Assumenda Trip",
            country: "Italian",
            rating: "4.1",
            venues: "5",
            remainingTime: "Time Left: 2 days 3 hours",
            img: images.humanone,
        },
        {
            name: "Provident Ea Trip",
            country: "Italian",
            rating: "4.1",
            venues: "2",
            remainingTime: "Time Left: 2 days 3 hours",
            img: images.humantwo,
        },
        {
            name: "Mann - Cartwright Dine",
            country: "Italian",
            rating: "4.1",
            venues: "3",
            remainingTime: "Time Left: 2 days 3 hours",
            img: images.humanone,
        },
        {
            name: "Provident Ea Trip",
            country: "Italian",
            rating: "4.1",
            venues: "2",
            remainingTime: "Time Left: 2 days 3 hours",
            img: images.humantwo,
        },
        {
            name: "Mann - Cartwright Dine",
            country: "Italian",
            rating: "4.1",
            venues: "3",
            remainingTime: "Time Left: 2 days 3 hours",
            img: images.humanone,
        },
        {
            name: "Provident Ea Trip",
            country: "Italian",
            rating: "4.1",
            venues: "2",
            remainingTime: "Time Left: 2 days 3 hours",
            img: images.humantwo,
        },

    ];

    return (
        <Wrapper style={styles.container} >
            <View style={styles.header} >
                <SwitchSelector
                    options={[
                        {label: "Dates",value:"dates", activeColor: theme.colors.blue},
                        {label: "Tips",value:"trips", activeColor: theme.colors.blue}
                    ]}
                    initial={0}
                    style={styles.switch}
                    bold
                    fontSize={baseStyle.fontSize(15)}
                    selectedTextColor={theme.colors.white}
                    textStyle={{opacity:0.6}}
                    backgroundColor={theme.colors.lightGrey}
                    onPress={(value )=>setMode(value) }
                />
                <TouchableOpacity>
                    <Text style={styles.headerbtn} >History</Text>
                </TouchableOpacity>
            </View>
            {mode==="dates"?<List data={listData} showTime />:<TripList data={data} showTime />}
        </Wrapper>
    );
};

const styles = StyleSheet.create({
  container:{
    paddingHorizontal: baseStyle.paddingHorizontal(10),
    paddingTop: baseStyle.paddingTop(10)
  },
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: baseStyle.marginBottom(10)
  },
  switch:{
    width: '40%'
  },
  headerbtn:{
    color: theme.colors.blue,
    fontFamily: theme.font.Bold,
    fontSize: baseStyle.fontSize(16),
    lineHeight: baseStyle.lineHight(19)
  },
});