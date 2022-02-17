import React, {useState, useEffect} from "react";
import {StatusBar} from "expo-status-bar";
import {Text, View, TouchableOpacity, Image, Dimensions} from 'react-native';
import {Colors} from "../../css/general/style";

import {StyledContainer} from '../../css/general/style';
import { TasksScheduleTouch, TrophyImage,
    TextAndTrophyView, WelcomeTextView, CalendarImage,
    CurrentDateTextView, DateAndCalenderImageView, HeaderView,
    TasksScheduleView, NewTaskOrEventButton, WhiteText,
    ContentView, TasksView, ScheduleView, MonthText, BlackText } from "../../css/Dashboard/todolist";

import {InnerContainerRemake} from '../../css/Dashboard/todolist';

import DashBoardBottomMenu from "../../components/DashboardBottomMenu";
import TasksScrollable from "../../components/TasksScrollable";
import UpcomingsScrollable from "../../components/UpcomingsScrollable";
import {CalendarProvider, WeekCalendar} from 'react-native-calendars';
import { makeDateString } from "../../helpers/menstruation";

const windowHeight = Dimensions.get('window').height;

import { useSelector, useDispatch } from "react-redux";

const ToDoList = ({route, navigation}) => {
    const [tasksSelected, setTasksSelected] = useState((route.params === undefined)? true: route.params.tasksSelected);
    const taskData = useSelector(state => state.tasks);
    const userData = useSelector(state => state.userName);

    const monthNames =  ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    var today = new Date();
    var day = String(today.getDate());
    const [month, setMonth] = useState(today.getMonth());
    var year = today.getFullYear();
    const calenderEventData = useSelector(state => state.upcomingEvents);
    const [markedDay, setMarkedDay] = useState(makeDateString(today));

    const [menuOpen, setMenuOpen] = useState(false);
    const [menuPosition, setMenuPosition] = useState(0);
    const [currentEventId, setcurrentEventId] = useState(undefined);
    
    const newTask =()=>{
        console.log('new Task bottom input open');
    };
    const newEvent =()=>{
        console.log('new Event to schedule-input open');
    };

    const showNewDayEvents =(day) => {
        setMarkedDay(day.dateString);
        setMonth(day.month);
        console.log("need to implement getting data properly once the underlying Data structure is clearer");
    }

    useEffect(() =>{console.log(menuPosition)},[menuPosition])

    return (
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainerRemake style={{backgroundColor: Colors.gray}}>
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
                <ContentView>
                        <TasksScheduleView>
                            <TasksScheduleTouch style={{width: "25%"}} 
                                            onPress={()=>setTasksSelected(true)}>
                                <Text style={{fontSize: tasksSelected?24:18,fontWeight: tasksSelected?"bold":"normal"}}> 
                                    Tasks 
                                </Text>
                            </TasksScheduleTouch>
                            <TasksScheduleTouch style={{width: "40%"}} 
                                    onPress={()=>setTasksSelected(false)}>
                                <Text style={{fontSize: tasksSelected?18:24,fontWeight: tasksSelected?"normal":"bold"}}>
                                    Schedule
                                </Text>
                            </TasksScheduleTouch>
                        </TasksScheduleView>                 
                        {tasksSelected?
                            <TasksView>
                                <TasksScrollable 
                                tasksData = {taskData}/>
                            </TasksView>
                            :
                            <ScheduleView>
                                <MonthText>
                                    {monthNames[month]}
                                </MonthText>
                                <View style={{height: "23%"}}>
                                    <CalendarProvider 
                                        date={Date()}                                   
                                        >
                                        <WeekCalendar 
                                        onDayPress={(day)=>{showNewDayEvents(day)}} 
                                        showTodayButton={false}
                                        theme={{todayTextColor: '#7047EB',
                                                    dayTextColor: '#333333',
                                                    textDisabledColor: '#BDBDBD',
                                                    arrowColor: '#7047EB',
                                                    monthTextColor: '#333333',
                                                    textDayFontWeight: 'normal',
                                                    textMonthFontWeight: 'normal',
                                                    textDayHeaderFontWeight: 'normal',
                                                    textDayFontSize: 15,
                                                    textMonthFontSize: 18,
                                                    textDayHeaderFontSize: 15,
                                                    textSectionTitleColor: '#7047EB',
                                                    }} 
                                        markedDates={{
                                            [markedDay]: {selected:true,
                                                        disableTouchEvent: true,
                                                        selectedColor: '#F1EFFE',
                                                        selectedTextColor: '#7954FA'
                                            }
                                        }}
                                                    />
                                    </CalendarProvider>
                                </View>
                                <View style={{height: "75%"}}> 
                                <UpcomingsScrollable 
                                    calenderEventData={calenderEventData}
                                    menuOpen={menuOpen}
                                    setMenuOpen={setMenuOpen}
                                    setMenuPosition={setMenuPosition}
                                    setcurrentEventId={setcurrentEventId}
                                    windowHeight={windowHeight} />
                                 
                                </View>
                            </ScheduleView>}
                        <NewTaskOrEventButton onPress={()=>{tasksSelected?newTask():newEvent()}}>
                            <WhiteText style={{fontSize: 14, width: "100%", textAlign: "center"}}> 
                                <Text style={{fontSize: 20, color: Colors.white}}>+  </Text> 
                                New {tasksSelected?"task":"event"}
                            </WhiteText>
                        </NewTaskOrEventButton>
                        
                </ContentView>  
            </InnerContainerRemake>
            {menuOpen && (
                <View style={{backgroundColor: Colors.white,
                            height: "20%", width:"30%",
                            borderRadius: 9,
                            borderTopRightRadius: (menuPosition>80)?9:0,
                            borderBottomRightRadius: (menuPosition>80)?0:9,
                            alignSelf: "baseline",
                            zIndex: 150,
                            padding: "10%",
                            margin: "0%",
                            top: (menuPosition>80)?("70%"):((menuPosition).toString()+"%"),
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            left: "55%",
                            position: "absolute"
                            }}>
                    <TouchableOpacity
                        onPress={()=>{
                            console.log('snooze pressed...')
                        }}>
                        <BlackText>Snooze</BlackText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                            console.log('edit pressed...')
                        }}>
                        <BlackText>Edit</BlackText>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>{
                            console.log('delete number', currentEventId);
                            dispatch(deleteEvent(currentEventId));
                            setMenuOpen(false);
                        }}>
                        <BlackText>Delete</BlackText>
                    </TouchableOpacity>
                </View> )}
            <DashBoardBottomMenu currentScreen={"ToDoList"} navigation={navigation}/>
        </StyledContainer>
    )
};

export default ToDoList;