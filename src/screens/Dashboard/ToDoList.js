import React, {useState, useEffect} from "react";
import {StatusBar} from "expo-status-bar";
import {Text, View, TouchableOpacity, Image, Dimensions} from 'react-native';
import {Colors} from "../../css/general/style";
import { deleteEvent } from "../../redux/actions/CalendarEvents/home";

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

import {MARK_ALL_TASKS_UNDONE} from "../../redux/actions/types";

const windowHeight = Dimensions.get('window').height;

import { useSelector, useDispatch } from "react-redux";
import { EventDetails } from "../../components/EventDetails";

const ToDoList = ({route, navigation}) => {
    const dispatch = useDispatch();
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
    const [thisDayEvents, SetThisDayEvents] = useState((calenderEventData[today.toLocaleDateString('en-US')] === undefined)?{}:calenderEventData[today.toLocaleDateString('en-US')]);
    
    const [markedDay, setMarkedDay] = useState(makeDateString(today));
    const [selectedDate, setSelectedDate] = useState(today.toLocaleDateString('en-US'));

    const [menuOpen, setMenuOpen] = useState(false);
    const [menuPosition, setMenuPosition] = useState(0);
    const [currentEventId, setcurrentEventId] = useState(undefined);
    
    const newTask =()=>{
        console.log('new Task bottom input open');
    };
    const newEvent =()=>{
        console.log('new Event to schedule-input open');
    };

    const [detailsOpen, setDetailsOpen] = useState(false);

    const [taskOpen, istaskOpen] = useState(false);
    const [selectedTaskId, setSelectedTaskId] = useState(undefined);
    const [taskC, setTaskC] = useState(false);

    const showNewDayEvents =(day) => {
        setMarkedDay(day.dateString);
        setMonth(day.month);
        var newDay = new Date(day.dateString);
        SetThisDayEvents((calenderEventData[newDay.toLocaleDateString('en-US')] === undefined)? {}: calenderEventData[newDay.toLocaleDateString('en-US')]);
        setSelectedDate(newDay.toLocaleDateString('en-US'));
    }
    useEffect(() => {
        if (today.toLocaleDateString('en-US') !== taskData.today) {
            dispatch({type: MARK_ALL_TASKS_UNDONE,
                        payload: {today: today.toLocaleDateString('en-US')}});
        }
    },[])


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
                            <TasksView style={taskOpen? {backgroundColor:Colors.lightgray}:{}}>
                                <TasksScrollable 
                                tasksData = {taskData}
                                taskC = {taskC}
                                setTaskC = {setTaskC}
                                isTaskSelected = {istaskOpen}
                                setSelectedTaskId = {setSelectedTaskId}
                                setMenuPosition={setMenuPosition}
                                windowHeight={windowHeight}
                                />
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
                                    calenderEventData={thisDayEvents}
                                    menuOpen={menuOpen}
                                    setMenuOpen={setMenuOpen}
                                    setDetailsOpen={setDetailsOpen}
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
                            dispatch(deleteEvent(currentEventId, selectedDate));
                            setMenuOpen(false);
                        }}>
                        <BlackText>Delete</BlackText>
                    </TouchableOpacity>
                </View> )}
            {detailsOpen && (
                <EventDetails 
                    setDetailsOpen={setDetailsOpen}
                    todaysEvents={thisDayEvents}
                    currentEventId={currentEventId}
                    menuPosition={menuPosition}
                    today={today} />
            
            )}
            { taskOpen && (
                <View style={{
                    backgroundColor: Colors.white, width: "20%", height: "15%",
                    borderRadius: 10,
                    borderTopLeftRadius: (menuPosition>78)?10:0,
                    borderBottomLeftRadius: (menuPosition>78)?0:10,
                    alignSelf: "baseline",
                    zIndex: 150,
                    padding: "10%",
                    margin: "0%",
                    top: (menuPosition>78)?((menuPosition-15).toString()+"%"):((menuPosition).toString()+"%"),
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    left: "35%",
                    position: "absolute"}}>
                    <TouchableOpacity 
                        style={{width: "100%", 
                        flexDirection: "row", justifyContent: "flex-end"}}
                        onPress={()=>istaskOpen(false)}
                        >
                        <Text style={{fontSize: 16, fontWeight: "bold"}}>X</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: "100%"}}
                        onPress={()=> {console.log('open edit possibility for task ', selectedTaskId)}}
                        >
                        <Text>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width: "100%"}}
                                onPress={()=>{console.log('implement the delete part with redux')}}>
                        <Text>Delete</Text>
                    </TouchableOpacity>
                </View>)

            }
            <DashBoardBottomMenu currentScreen={"ToDoList"} navigation={navigation}/>
        </StyledContainer>
    )
};

export default ToDoList;