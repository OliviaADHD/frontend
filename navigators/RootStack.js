import React from 'react';

import { Colors } from '../components/styles';
const { white, black } = Colors;

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './../screens/Login';
import Welcome from './../screens/Welcome';
import { Signup } from './../screens/Signup';
import Privacy from './../screens/Privacy';
import Questionnaire from './../screens/Questionnaire';
import Welcome_Post_Signup from './../screens/Welcome_Post_Signup';
import CalendarInitial from './../screens/CalendarInitial';


import CyclePeriod1 from './../screens/CyclePeriod1';
import CyclePeriod2 from './../screens/CyclePeriod2';
import Intro_Period_Prediction from './../screens/Intro_Period_Prediction';
import Infonotice_Menstruation from './../screens/Infonotice_Menstruation';

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
                <Stack.Screen name='Privacy' component={Privacy} options={{
                    title:'Privacy Policy',
                    headerStyle:{backgroundColor:'#eee', height:60},
                    headerTintColor:'black'
                }} />
                <Stack.Screen name='Welcome_Post_Signup' component={Welcome_Post_Signup} />
                <Stack.Screen name="Questionnaire" component={Questionnaire} />
                <Stack.Screen name="CalendarInitial" component={CalendarInitial} />
                <Stack.Screen name="CyclePeriod1" component={CyclePeriod1} />
                <Stack.Screen name="CyclePeriod2" component={CyclePeriod2} />
                <Stack.Screen name="Intro_Period_Prediction" component={Intro_Period_Prediction} />
                <Stack.Screen name="Infonotice_Menstruation" component={Infonotice_Menstruation} />

            </Stack.Navigator>
            
        </NavigationContainer>
    )
}

export default RootStack;
