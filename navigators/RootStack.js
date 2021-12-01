import React from 'react';

import { Colors } from '../components/styles';
const { white, black } = Colors;

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ResetPassword from './../screens/ResetPassword';
import MessageResetPassword from './../screens/MessageResetPassword';

import Login from './../screens/LoginSignup/Login';
import Welcome from '../screens/LoginSignup/Welcome';
import Signup from './../screens/LoginSignup/Signup';
import Privacy from '../screens/LoginSignup/Privacy';
import Questionnaire from '../screens/Onboarding/Questionnaire';
import Welcome_Post_Signup from '../screens/Onboarding/Welcome_Post_Signup';



import Intro_Period_Prediction from '../screens/Menstruation/Intro_Period_Prediction';



import Cycle from '../screens/Dashboard/Cycle';
import Awareness from '../screens/Dashboard/Awareness';import Home from '../screens/Dashboard/Home';
import Profile from '../screens/Dashboard/Profile';
import ToDoList from '../screens/Dashboard/ToDoList';

import TutorialDashboard from '../screens/DashboardTutorial/TutorialDashboard';

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
            initialRouteName = 'Home'
            >   
                <Stack.Screen name="Welcome" 
                    options ={{animationEnabled: true, header: () => null}}
                    component = {Welcome}
                    />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Signup' component={Signup} />
                <Stack.Screen name='Privacy' component={Privacy} options={{
                    title:'Privacy Policy',
                    header: () => null,
                }} />
                <Stack.Screen name='Welcome_Post_Signup' component={Welcome_Post_Signup} />
                <Stack.Screen name="Questionnaire" component={Questionnaire} options ={{header: () => null}} />
                  
                <Stack.Screen name="ResetPassword" component={ResetPassword} />
                <Stack.Screen name="MessageResetPassword" component={MessageResetPassword} />
                <Stack.Screen name="Intro_Period_Prediction" component={Intro_Period_Prediction} />

                <Stack.Screen name="Cycle" component={Cycle} />
                <Stack.Screen name="Awareness" component={Awareness} />
                <Stack.Screen name="Home" component={Home}  options ={{header: () => null}} />
                <Stack.Screen name="ToDoList" component={ToDoList} />
                <Stack.Screen name="Profile" component={Profile} />
                  
                <Stack.Screen name='TutorialDashboard' component={TutorialDashboard} options ={{header: () => null}}/>
            </Stack.Navigator>
            
        </NavigationContainer>
    )
}

export default RootStack;
