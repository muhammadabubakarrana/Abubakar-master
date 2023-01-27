import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { PublicNavigation } from "./public";

export const Navigation= ()=>{
    return(
        <NavigationContainer>
            <PublicNavigation/>
        </NavigationContainer>
    );
};