import React, {useState} from "react";
import {StatusBar} from "expo-status-bar";
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {Colors} from "../../css/general/style";

import {StyledContainer} from '../../css/general/style';
import { TasksScheduleTouch, TrophyImage,
    TextAndTrophyView, WelcomeTextView, CalendarImage,
    CurrentDateTextView, DateAndCalenderImageView, HeaderView,
    TasksScheduleView, NewTaskOrEventButton, WhiteText } from "../../css/Dashboard/profile";

import {InnerContainerRemake} from '../../css/Dashboard/todolist';

import DashBoardBottomMenu from "../../components/DashboardBottomMenu";
import TasksScrollable from "../../components/TasksScrollable";
import {Calendar, Agenda, CalendarProvider, ExpandableCalendar, WeekCalendar} from 'react-native-calendars';

import { useSelector, useDispatch } from "react-redux";

const ToDoList = ({navigation}) => {
    const [tasksSelected, setTasksSelected] = useState(true);
    const taskData = useSelector(state => state.tasks);
    const userData = useSelector(state => state.userName);

    const monthNames =  ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    var today = new Date();
    var day = String(today.getDate());
    var month = today.getMonth();
    var year = today.getFullYear();
    
    const newTask =()=>{
        console.log('new Task bottom input open');
    };
    const newEvent =()=>{
        console.log('new Event to schedule-input open');
    };

    const showNewDayEvents =(day) => {
        console.log("need to implement new day stuff" + day);
    }

    return (
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainerRemake>
                <HeaderView>
                    <DateAndCalenderImageView>
                        <CurrentDateTextView>
                            <Text style={{fontSize: 11, marginTop: "11%"}}> {monthNames[month]} {day}, {year}</Text>
                            <Text style={{fontWeight: "bold", marginTop: "4%"}}> Today </Text>
                        </CurrentDateTextView>
                        <CalendarImage source={require('../../../assets/images/calendar.png')}/>
                    </DateAndCalenderImageView>
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
                    
                </HeaderView>
                <View style={{height: "70%", width: "100%", 
                                backgroundColor: Colors.purple, 
                                borderRadius: 12, borderBottomLeftRadius: 0, borderBottomRightRadius: 0}}>
                        <TasksScheduleView>
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
                        </TasksScheduleView>                 
                        {tasksSelected?
                            <View style={{height: "84%", backgroundColor: "white",
                              alignItems: "center"}}>
                                <TasksScrollable 
                                tasksData = {taskData}/>
                            </View>
                            :
                            <View style={{height: "84%", backgroundColor: "blue"}}>
                                <CalendarProvider 
                                    date={Date()}
                                    onDateChanged={(day)=>{showNewDayEvents(day)}}
                                    theme={{                                todayTextColor: '#7047EB',
                                dayTextColor: '#333333',
                                textDisabledColor: '#BDBDBD',
                                arrowColor: '#7047EB',
                                monthTextColor: '#333333',
                                textDayFontWeight: '500',
                                textMonthFontWeight: 'bold',
                                textDayHeaderFontWeight: 'normal',
                                textDayFontSize: 15,
                                textMonthFontSize: 18,
                                textDayHeaderFontSize: 15,
                                textSectionTitleColor: '#7047EB',
                                    }}
                                    >
                                     <ExpandableCalendar firstDay={1}
                                            disablePan={true} //we need this
                                            disableWeekScroll={true}
                                            style={{
                                                weekday: {color:'orange'}
                                            }}
                                            />
                                </CalendarProvider>
                            </View>}
                        <NewTaskOrEventButton onPress={()=>{tasksSelected?newTask():newEvent()}}>
                            <WhiteText style={{fontSize: 14, width: "100%", textAlign: "center"}}> 
                                <Text style={{fontSize: 20, color: Colors.white}}>+  </Text> 
                                New {tasksSelected?"task":"event"}
                            </WhiteText>
                        </NewTaskOrEventButton>
                        
                </View>  
            </InnerContainerRemake>
            <DashBoardBottomMenu currentScreen={"ToDoList"} navigation={navigation}/>
        </StyledContainer>
    )
};

export default ToDoList;