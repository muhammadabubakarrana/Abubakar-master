import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PublicNavigation } from "./public";
import { PrivateNavigation } from "./private";
import { SafeAreaProvider } from "react-native-safe-area-context";

export const Navigation = () => {

    let loggedIn = true;

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                {loggedIn ? <PrivateNavigation /> : <PublicNavigation />}
            </NavigationContainer>
        </SafeAreaProvider>
    );
};