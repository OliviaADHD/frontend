import React from 'react';

import { Colors } from '../components/styles';
const {white, black} = Colors;

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './../screens/Login';
import Signup from './../screens/Signup';
const Stack = createStackNavigator();

const RootStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
            screenOptions={{
                headerStyled: {
                    backgroundColor: white
                },
                headerTintColor: black,
                headerTransparent: true,
                headerTitle: '',
                headerLeftContainerStyle: {
                    paddingLeft: 20
                }
            }}
            initialRouteName = 'Login'
            >
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen options={{ headerTintColor: black}} name='Signup' component={Signup} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;