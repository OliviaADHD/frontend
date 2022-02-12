import React, {useState} from "react";
import {StatusBar} from "expo-status-bar";
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {Colors} from "../../css/general/style";

import {StyledContainer} from '../../css/general/style';
import { TasksScheduleTouch, TrophyImage,
    TextAndTrophyView, WelcomeTextView } from "../../css/Dashboard/profile";

import {InnerContainerRemake} from '../../css/Dashboard/todolist';

import DashBoardBottomMenu from "../../components/DashboardBottomMenu";

import { useSelector, useDispatch } from "react-redux";

const ToDoList = ({navigation}) => {
    const [tasksSelected, setTasksSelected] = useState(true);
    const userData = useSelector(state => state.userName);
    
    return (
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainerRemake>
                <View style={{height: "30%", width: "100%", backgroundColor: Colors.lightgray}}>
                    <View style={{height: "30%", width: "100%", backgroundColor: "green"}}>
                        <Text>The top header</Text>
                    </View>
                    <TextAndTrophyView>
                        <WelcomeTextView>
                            <Text style={{fontSize: 11}}>Hi, {userData.Name}!</Text>
                            <Text style={{fontSize: 16}}>Let's get things 
                                <Text style={{color: Colors.purple}}> done</Text>
                            !</Text>
                        </WelcomeTextView>
                            <TrophyImage source={require('../../../assets/images/trophy.png')}
                            />
                    </TextAndTrophyView>
                    
                </View>
                <View style={{height: "70%", width: "100%", 
                                backgroundColor: Colors.purple, 
                                borderRadius: 12, borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}>
                        <View style={{height: "16%", flexDirection: "row",
                                        alignContent: "center"}}>
                            <TasksScheduleTouch style={{width: "25%"}} 
                                            onPress={()=>setTasksSelected(true)}>
                                <Text style={{fontSize: tasksSelected?32:24,fontWeight: tasksSelected?"bold":"normal"}}> 
                                    Tasks 
                                </Text>
                            </TasksScheduleTouch>
                            <TasksScheduleTouch style={{width: "40%"}} 
                                    onPress={()=>setTasksSelected(false)}>
                                <Text style={{fontSize: tasksSelected?24:32,fontWeight: tasksSelected?"normal":"bold"}}>
                                    Schedule
                                </Text>
                            </TasksScheduleTouch>
                        </View>
                        <View style={{height: "84%", backgroundColor: "red"}}>
                             <Text>Test for ToDoList Page</Text>
                        </View>
                        
                </View>  
            </InnerContainerRemake>
            <DashBoardBottomMenu currentScreen={"ToDoList"} navigation={navigation}/>
        </StyledContainer>
    )
};

export default ToDoList;