import React from "react";
import { routes, theme, images, baseStyle } from "../config";
import { NearMe } from "../screens"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();


export const PrivateNavigation = () => {
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
            <Tab.Screen
                name={routes.NEAR_ME}
                component={NearMe}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={images.pinLocation}
                            style={{ tintColor: focused ? theme.colors.blue : theme.colors.black }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
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