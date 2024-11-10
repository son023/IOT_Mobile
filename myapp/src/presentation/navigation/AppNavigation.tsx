import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { RegisterPage } from "../pages/RegisterPage";
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfilePage } from "../pages/ProfilePage";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
const Stack= createStackNavigator();
export const AppNavigation = () =>{
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name="auth" component={AuthNavigation}/>
                <Stack.Screen name="inapp" component={InAppNavigation}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const Tab = createBottomTabNavigator();
const AuthNavigation = () =>{
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='login' component={LoginPage}/>
            <Stack.Screen name='register' component={RegisterPage}/>
            
        </Stack.Navigator>
    )
}
const InAppNavigation = () =>{
    return (
        <Tab.Navigator
        
    >
            <Tab.Screen name="home" component={HomePage}/>
            <Tab.Screen name="profile" component={ProfilePage}/>
        </Tab.Navigator>
    )
}
