import React from 'react';

import { Colors } from '../components/styles';
const {white, black} = Colors;

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './../screens/Login';
import Signup from './../screens/Signup';
import Welcome from './../screens/Welcome';
import Welcome_Post_Signup from './../screens/Welcome_Post_Signup';
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
            initialRouteName = 'Welcome'
            >   
                <Stack.Screen name="Welcome" 
                    options ={{animationEnabled: true, header: () => null}}
                    component = {Welcome}
                    />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen options={{ headerTintColor: black}} name='Signup' component={Signup} />
                <Stack.Screen name='Welcome_Post_Signup' component={Welcome_Post_Signup} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;