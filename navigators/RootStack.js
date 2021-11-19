import React from 'react';

import { Colors } from '../components/styles';
const { white, black } = Colors;

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './../screens/LoginSignup/Login';
import Welcome from '../screens/LoginSignup/Welcome';
import Signup from './../screens/LoginSignup/Signup';
import Privacy from '../screens/LoginSignup/Privacy';
import Questionnaire from '../screens/Onboarding/Questionnaire';
import Welcome_Post_Signup from '../screens/Onboarding/Welcome_Post_Signup';
import CalendarInitial from '../screens/Menstruation/CalendarInitial';

import MenstruationIntro from '../screens/Menstruation/MenstruationIntro';
import CyclePeriod1 from '../screens/Menstruation/CyclePeriod1';
import CyclePeriod2 from '../screens/Menstruation/CyclePeriod2';
import Intro_Period_Prediction from '../screens/Menstruation/Intro_Period_Prediction';
import Infonotice_Menstruation from '../screens/Menstruation/Infonotice_Menstruation';

import Cycle from '../screens/Dashboard/Cycle';
import Awareness from '../screens/Dashboard/Awareness';
import Home from '../screens/Dashboard/Home';
import Profile from '../screens/Dashboard/Profile';
import ToDoList from '../screens/Dashboard/ToDoList';

import Tutorial1 from '../screens/DashboardTutorial/Tutorial1';
import Tutorial2 from '../screens/DashboardTutorial/Tutorial2';
import Tutorial3 from '../screens/DashboardTutorial/Tutorial3';
import Tutorial4 from '../screens/DashboardTutorial/Tutorial4';
import Tutorial5 from '../screens/DashboardTutorial/Tutorial5';
import Tutorial6 from '../screens/DashboardTutorial/Tutorial6';

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
            initialRouteName = 'Tutorial1'
            >   
                <Stack.Screen name="Welcome" 
                    options ={{animationEnabled: true, header: () => null}}
                    component = {Welcome}
                    />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen options={{  headerLeft: null }} name='Signup' component={Signup} />
                <Stack.Screen name='Privacy' component={Privacy} options={{
                    title:'Privacy Policy',
                    headerStyle:{backgroundColor:'#eee', height:60},
                    headerTintColor:'black'
                }} />
                <Stack.Screen name='Welcome_Post_Signup' component={Welcome_Post_Signup} options ={{header: () => null}}/>
                <Stack.Screen name="Questionnaire" component={Questionnaire} />
                <Stack.Screen name="CalendarInitial" component={CalendarInitial} />
                <Stack.Screen name="CyclePeriod1" component={CyclePeriod1} />
                <Stack.Screen name="CyclePeriod2" component={CyclePeriod2} />
                <Stack.Screen name="MenstruationIntro" component={MenstruationIntro} />
                <Stack.Screen name="Intro_Period_Prediction" component={Intro_Period_Prediction} />
                <Stack.Screen name="Infonotice_Menstruation" component={Infonotice_Menstruation} />

                <Stack.Screen name="Cycle" component={Cycle} />
                <Stack.Screen name="Awareness" component={Awareness} />
                <Stack.Screen name="Home" component={Home}  options ={{header: () => null}} />
                <Stack.Screen name="ToDoList" component={ToDoList} />
                <Stack.Screen name="Profile" component={Profile} />

                <Stack.Screen name="Tutorial1" component={Tutorial1} />
                <Stack.Screen name="Tutorial2" component={Tutorial2} />
                <Stack.Screen name="Tutorial3" component={Tutorial3} />
                <Stack.Screen name="Tutorial4" component={Tutorial4} />
                <Stack.Screen name="Tutorial5" component={Tutorial5} />
                <Stack.Screen name="Tutorial6" component={Tutorial6} />


            </Stack.Navigator>
            
        </NavigationContainer>
    )
}

export default RootStack;
