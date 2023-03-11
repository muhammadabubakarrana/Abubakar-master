import React from "react";
import { routes, theme, images, baseStyle } from "../config";
import { Blog, CustomTrip, Menu, NearMe, PlannedDates, PlanTrip, Review, TripLocation, VenueProfile } from "../screens"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const getIcon = (focused, icon) => {
    return (
        <Image source={icon}
            style={{ tintColor: focused ? theme.colors.blue : theme.colors.black }} />
    );
};


const HomeTabs = () => {
    return (
        // Can use screenOptions in  <Tab.Navigator> as a prop for changing all screens
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: theme.colors.blue,
                tabBarInactiveTintColor: theme.colors.black,
                tabBarStyle: styles.tabBarStyle,
                tabBarLabelStyle: styles.lable,
                tabBarItemStyle: styles.item,
                tabBarActiveBackgroundColor: theme.colors.lightGrey,
            }}>

            {/* 1st Bottom Tab */}
            <Tab.Screen
                name={routes.NEAR_ME}
                component={NearMe}
                options={{
                    tabBarIcon: ({ focused }) => getIcon(focused, images.pinLocation)
                }}
            />
            {/* 2nd Bottom Tab */}

            <Tab.Screen
                name={routes.PLAN_TRIP}
                component={PlanTrip}
                options={{
                    tabBarIcon: ({ focused }) => getIcon(focused, images.map)
                }}
            />
            {/* 3rd Bottom Tab */}

            <Tab.Screen
                name={routes.PLANNED_DATES}
                component={PlannedDates}
                options={{
                    tabBarIcon: ({ focused }) => getIcon(focused, images.calender)
                }}
            />
            {/* 4th Bottom Tab */}

            <Tab.Screen
                name={routes.BLOG}
                component={Blog}
                options={{
                    tabBarIcon: ({ focused }) => getIcon(focused, images.calender)
                }}
            />
            {/* 5th Bottom Tab */}

            <Tab.Screen
                name={routes.MENU}
                component={Menu}
                options={{
                    tabBarIcon: ({ focused }) => getIcon(focused, images.menu)
                }}
            />

        </Tab.Navigator>
    );
}




export const PrivateNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={HomeTabs} />
            <Stack.Screen name={routes.Venue_Profile} component={VenueProfile} />
            <Stack.Screen name={routes.REVIEW} component={Review} />
            <Stack.Screen name={routes.CUSTOM_TRIP} component={CustomTrip} />
            <Stack.Screen name={routes.TRIP_LOCATION} component={TripLocation} />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: theme.colors.white,
        shadowOpacity: 1,
        shadowOffset: {
            width: 0, height: -5
        },
        elevation: 5,
        shadowRadius: 6,
        shadowColor: theme.colors.silver,
        borderTopLeftRadius: baseStyle.borderTopLeftRadius(24),
        borderTopRightRadius: baseStyle.borderTopRightRadius(24),
        paddingHorizontal: baseStyle.paddingHorizontal(5),
        paddingVertical: baseStyle.paddingVertical(5),
        height: baseStyle.hight(80),
    },
    lable: {
        fontFamily: theme.font.regular,
        fontSize: baseStyle.fontSize(12),
        lineHeight: baseStyle.lineHight(15),
        marginTop: baseStyle.marginTop(5),
        opacity: 0.6,
    },
    item: {
        borderRadius: baseStyle.borderRadius(16),
        paddingVertical: baseStyle.paddingVertical(13),
        //paddingHorizontal: baseStyle.paddingHorizontal(24.5),
    },
})