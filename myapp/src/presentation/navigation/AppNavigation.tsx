import { NavigationContainer } from "@react-navigation/native"
import { CardStyleInterpolators, createStackNavigator } from "@react-navigation/stack"
import { RegisterPage } from "../pages/RegisterPage";
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfilePage } from "../pages/ProfilePage";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { Easing } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { MapPage } from "../pages/MapPage";
import { DevicePage } from "../pages/DevicePage";
import { AddDevicePage } from "../pages/AddDevicePage";
const Stack= createStackNavigator();
export const AppNavigation = () =>{
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false,transitionSpec: {
                        open: {
                            animation: 'timing',
                            config: {
                                duration: 350,  // Thời gian chuyển đổi mượt
                                easing: Easing.inOut(Easing.ease), // Easing mượt mà
                            },
                        },
                        close: {
                            animation: 'timing',
                            config: {
                                duration: 350,
                                easing: Easing.inOut(Easing.ease),
                            },
                        },
                    },
                    cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,}}>
                <Stack.Screen name="auth" component={AuthNavigation}/>
                <Stack.Screen name="inapp" component={InAppNavigation}/>
                <Stack.Screen name="DevicePage" component={DevicePage} />
                <Stack.Screen name="AddDevicePage" component={AddDevicePage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
const Tab = createBottomTabNavigator();
const AuthNavigation = () =>{
    return (
        <Stack.Navigator screenOptions={{headerShown:false,transitionSpec: {
            open: {
                animation: 'timing',
                config: {
                    duration: 350,  // Thời gian chuyển đổi mượt
                    easing: Easing.inOut(Easing.ease), // Easing mượt mà
                },
            },
            close: {
                animation: 'timing',
                config: {
                    duration: 350,
                    easing: Easing.inOut(Easing.ease),
                },
            },
        },
        cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid, // Hiệu ứng mượt từ dưới lên
        }}>
            <Stack.Screen name='login' component={LoginPage}/>
            <Stack.Screen name='register' component={RegisterPage}/>
            
        </Stack.Navigator>
    )
}
const InAppNavigation = () =>{
    return (
        <Tab.Navigator  screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = focused ? 'home' : 'home-outline'; // Biểu tượng cho Home
                }else if (route.name === 'Map') {
                    iconName = focused ? 'locate' : 'locate-outline'; // Biểu tượng cho Profile
                }

                 else if (route.name === 'Profile') {
                    iconName = focused ? 'person' : 'person-outline'; // Biểu tượng cho Profile
                }
                

                // Trả về biểu tượng với các thuộc tính `color` và `size` được xác định
                return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#2D9CDB', // Màu sắc khi tab được chọn
            tabBarInactiveTintColor: 'gray', // Màu sắc khi tab không được chọn
        })}>
            <Tab.Screen name="Home" component={HomePage}/>
            <Tab.Screen name="Map" component={MapPage}/>
            <Tab.Screen name="Profile" component={ProfilePage}/>
          
        </Tab.Navigator>
    )
}
