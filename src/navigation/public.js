import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { routes } from "../config/routes";
import {About, ForgotPassword, Login, Preferences, Register, SecureAccount} from "../screens"

const Stack = createNativeStackNavigator()


export const PublicNavigation=()=>{
    return(
        // Can use screenOptions in  <Stack.Navigator> as a prop for changing all screens
        <Stack.Navigator> 
            <Stack.Screen name={routes.LOGIN} component={Login} />
            <Stack.Screen name={routes.REGISTER} component={Register} />
            <Stack.Screen name={routes.ABOUT} component={About} />
            <Stack.Screen name={routes.SECCURE_ACCOUNT} component={SecureAccount} />
            <Stack.Screen name={routes.PREFERENCES} component={Preferences} />
            <Stack.Screen name={routes.FORGOT_PASSWORD} component={ForgotPassword} />
        </Stack.Navigator>
    );
};