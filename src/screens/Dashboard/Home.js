import React, {useState, useEffect} from "react";
import {StatusBar} from "expo-status-bar";
import {Text, View, TouchableOpacity, Dimensions, Image} from 'react-native';
import {registerForPushNotificationsAsync} from '../../helpers/notifications';
import {StyledContainer, InnerContainer, Colors} from '../../css/general/style';

import {
    InnerContainerRemake, 
    StyledBoldTitle,
    BlackText} from '../../css/Dashboard/home';

import DashBoardBottomMenu from "../../components/DashboardBottomMenu";

import AlarmBell from "../../components/AlarmBell";

import { useSelector, useDispatch } from "react-redux";
import { deleteEvent } from "../../redux/actions/CalendarEvents/home";
import UpcomingsScrollable from "../../components/UpcomingsScrollable";
import TasksScrollable from "../../components/TasksScrollable";
const windowHeight = Dimensions.get('window').height;

const Home = ({navigation}) => {

    const userData = useSelector(state => state.userName);
    const dispatch = useDispatch();
    const calenderEventData = useSelector(state => state.upcomingEvents);
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuPosition, setMenuPosition] = useState(0);
    const [currentEventId, setcurrentEventId] = useState(undefined);

    const taskData = useSelector(state => state.tasks);
    useEffect(() => {
        (() => registerForPushNotificationsAsync())();
    }, []);


    return (
        <StyledContainer>
            <StatusBar style="dark"/>
            <View style={{height: "7%", backgroundColor: menuOpen?Colors.gray:Colors.lightgray}}>
                <AlarmBell alarmNumber={0} showAlarm={false}/>
            </View>
            <InnerContainerRemake>
                        <View style={{height: "15%", width: "100%", flexDirection: "row",
                                    backgroundColor: menuOpen?Colors.gray:Colors.lightgray}}>
                            <View style={{width: "70%"}}>
                                <Text style={{fontSize:22, marginLeft: "2%"}}>Good morning, {userData.Name}!</Text>
                                <Text style={{marginLeft: "2%"}}>Each day is an opportunity to shine!</Text> 
                            </View>
                            <View style={{height:"100%", width:"30%"}}>
                                <Image source={require('../../../assets/images/sun_1.png')} 
                                    style={{resizeMode: "contain",height: "100%", width: "100%"}}
                                />
                            </View>
                        </View>
                        <View style={{height: "60%", width: "100%", flex: 1,
                                    backgroundColor: menuOpen?Colors.gray:Colors.white}}>
                            <StyledBoldTitle>Upcomings</StyledBoldTitle>
                        <UpcomingsScrollable 
                            calenderEventData={calenderEventData}
                            menuOpen={menuOpen}
                            setMenuOpen={setMenuOpen}
                            setMenuPosition={setMenuPosition}
                            setcurrentEventId={setcurrentEventId}
                            windowHeight={windowHeight} />
                        </View>
                        {menuOpen && (
                            <View style={{backgroundColor: Colors.white,
                                        height: "20%", width:"30%",
                                        borderRadius: 9,
                                        borderTopRightRadius: 0,
                                        alignSelf: "baseline",
                                        zIndex: 150,
                                        padding: "10%",
                                        margin: "0%",
                                        top: (0.98*menuPosition).toString()+"%",
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
                        <View style={{height: "25%", width: "100%",
                                backgroundColor: menuOpen?Colors.gray:Colors.white}}>
                            <StyledBoldTitle>Tasks</StyledBoldTitle>
                            <TasksScrollable 
                                tasksData = {taskData}
                            />
                        </View>
            </InnerContainerRemake>
            <DashBoardBottomMenu currentScreen={"Home"} navigation={navigation}/>
        </StyledContainer>
    )
};



export default Home; 