import React, {useState, useEffect} from "react";
import {StatusBar} from "expo-status-bar";
import {Text, View, TouchableOpacity, Dimensions, Image} from 'react-native';
import {registerForPushNotificationsAsync} from '../../helpers/notifications';
import {StyledContainer, InnerContainer, Colors} from '../../css/general/style';

import {
    InnerContainerRemake, 
    StyledBoldTitle,
    BlackText, UnderLineText} from '../../css/Dashboard/home';

import DashBoardBottomMenu from "../../components/DashboardBottomMenu";

import AlarmBell from "../../components/AlarmBell";

import { useSelector, useDispatch } from "react-redux";
import { deleteEvent } from "../../redux/actions/CalendarEvents/home";
import UpcomingsScrollable from "../../components/UpcomingsScrollable";
import TasksScrollable from "../../components/TasksScrollable";
import { EventDetails } from "../../components/EventDetails";
import { MARK_ALL_TASKS_UNDONE } from "../../redux/actions/types";
import { EventEditor } from "../../components/EventEditor";


const windowHeight = Dimensions.get('window').height;

const Home = ({navigation}) => {

    const userData = useSelector(state => state.userName);
    const menstruationData = useSelector(state => state.menstruationInfo);

    

    var today = new Date(); //"now"
    var origin = new Date(menstruationData.startLastPeriod[0]);  // some date
    var diff = Math.round((today-origin)/(1000*60*60*24));  // difference in days
    var daysSinceStartCycle = diff%menstruationData.periodCycleLength[0];
    var daysToEndCycle = menstruationData.periodCycleLength[0]-daysSinceStartCycle;
    var daysEndPeriod = menstruationData.periodLength[0] - daysSinceStartCycle;
    const periodUpcoming = (daysToEndCycle < 4);
 
    
    const periodInProgress = (daysSinceStartCycle <= menstruationData.periodLength[0]);

    const dispatch = useDispatch();
    const calenderEventData = useSelector(state => state.upcomingEvents);
    
    const todaysEvents = (calenderEventData[today.toLocaleDateString('en-US')] === undefined)?{}:calenderEventData[today.toLocaleDateString('en-US')];
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuPosition, setMenuPosition] = useState(0);
    const [currentEventId, setcurrentEventId] = useState(undefined);

    const [detailsOpen, setDetailsOpen] = useState(false);

    const taskData = useSelector(state => state.tasks);
    const [taskC, setTaskC] = useState(false);
    useEffect(() => {
        (() => registerForPushNotificationsAsync())();
    }, []);

    useEffect(() => {
        if (today.toLocaleDateString('en-US') !== taskData.today) {
            dispatch({type: MARK_ALL_TASKS_UNDONE,
                        payload: {today: today.toLocaleDateString('en-US')}});
        }
    },[])

    const [editEventOpen, setEditEventOpen] = useState(false);


    return (
        <StyledContainer>
            <StatusBar style="dark"/>
            {!editEventOpen &&
            (<View style={{height: "7%", backgroundColor: menuOpen?Colors.gray:Colors.lightgray}}>
                <AlarmBell alarmNumber={0} showAlarm={false}/>
            </View>)}
            {!editEventOpen &&
            <InnerContainerRemake>
                        <View style={{height: "15%", width: "100%", flexDirection: "row",
                                    backgroundColor: menuOpen?Colors.gray:Colors.lightgray}}>
                            <View style={{width: "70%"}}>
                                <Text style={{fontSize:22, marginLeft: "4%", marginTop: "-5%"}}>Good morning, {userData.Name}!</Text>
                                {periodUpcoming &&
                                    <View style={{marginLeft: "4%", marginTop: "2%"}}> 
                                        <Text style={{fontWeight: "bold"}}> Upcoming Period</Text>
                                        <Text style={{color: Colors.purple, fontSize: 19, marginTop: "2%"}}>{daysToEndCycle} Days until Period</Text>
                                    </View>
                                    }
                                {periodInProgress &&
                                    <View style={{marginLeft: "4%", marginTop: "2%"}}> 
                                        <Text style={{fontWeight: "bold"}}>Periods</Text>
                                        <Text style={{color: Colors.purple, fontSize: 19, marginTop: "2%"}}>{daysEndPeriod} Days Left</Text>
                                    </View>
                                }
                                {!periodUpcoming && !periodInProgress &&
                                <Text style={{marginLeft: "4%", color: Colors.purple, fontSize: 19, width: "70%", marginTop: "2%"}}>Each day is an Opportunity to shine!</Text> 
                                }
                            </View>
                            <View style={{height:"100%", width:"30%"}}>
                                <Image source={require('../../../assets/images/sun_1.png')} 
                                    style={{resizeMode: "contain",height: "100%", width: "100%"}}
                                />
                            </View>
                        </View>
                        <View style={{height: "60%", width: "100%", flex: 1,
                                    backgroundColor: menuOpen?Colors.gray:Colors.white}}>
                            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end"}}>
                                <StyledBoldTitle>Upcomings</StyledBoldTitle>
                                <TouchableOpacity onPress={()=>navigation.replace('ToDoList', {tasksSelected: false})}>
                                    <UnderLineText>
                                        View all
                                    </UnderLineText>
                                </TouchableOpacity>
                            </View>
                            
                        <UpcomingsScrollable 
                            calenderEventData={todaysEvents}
                            menuOpen={menuOpen}
                            setMenuOpen={setMenuOpen}
                            setMenuPosition={setMenuPosition}
                            setcurrentEventId={setcurrentEventId}
                            setDetailsOpen={setDetailsOpen}
                            windowHeight={windowHeight} />
                        </View>
                       
                        <View style={{height: "25%", width: "100%",
                                backgroundColor: menuOpen?Colors.gray:Colors.white}}>
                            <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "2%"}}>
                                <StyledBoldTitle>Tasks</StyledBoldTitle>
                                <TouchableOpacity onPress={()=>navigation.replace('ToDoList', {tasksSelected: true})}>
                                    <UnderLineText>
                                        View all tasks
                                    </UnderLineText>
                                </TouchableOpacity>
                            </View>
                            <TasksScrollable 
                                tasksData = {taskData}
                                taskC = {taskC}
                                setTaskC = {setTaskC}
                                isTaskSelected={()=>{}}
                                setSelectedTaskId={()=>{}}
                                windowHeight={windowHeight}
                                setMenuPosition={setMenuPosition}
                                editable={false}
                            />
                        </View>
            </InnerContainerRemake>
            }
            {editEventOpen &&
                <EventEditor
                    setClose={setEditEventOpen}
                    date={today}
                    title={todaysEvents[currentEventId].eventTitle}
                    details={todaysEvents[currentEventId].EventDetails}
                    startTime={todaysEvents[currentEventId].startDate}
                    endTime={todaysEvents[currentEventId].endDate}
                    reminder={todaysEvents[currentEventId].remindMe}
                    loc={todaysEvents[currentEventId].location}
                    type="edit"
                    eventId={currentEventId}

                />
            }
            {menuOpen && (
                            <View style={{backgroundColor: Colors.white,
                                        height: "20%", width:"30%",
                                        borderRadius: 9,
                                        borderTopRightRadius: 0,
                                        alignSelf: "baseline",
                                        zIndex: 150,
                                        padding: "10%",
                                        margin: "0%",
                                        top: (menuPosition).toString()+"%",
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
                                        setMenuOpen(false);
                                        setEditEventOpen(true);
                                    }}>
                                    <BlackText>Edit</BlackText>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={()=>{
                                        dispatch(deleteEvent(currentEventId, today.toLocaleDateString('en-US')));
                                        setMenuOpen(false);
                                    }}>
                                    <BlackText>Delete</BlackText>
                                </TouchableOpacity>
                            </View> )}
            {detailsOpen && (
                <EventDetails 
                    setDetailsOpen={setDetailsOpen}
                    todaysEvents={todaysEvents}
                    currentEventId={currentEventId}
                    menuPosition={menuPosition}
                    today={today} />
            
            )}
            {!editEventOpen &&
            <DashBoardBottomMenu currentScreen={"Home"} navigation={navigation}/>}
        </StyledContainer>
    )
};



export default Home; 