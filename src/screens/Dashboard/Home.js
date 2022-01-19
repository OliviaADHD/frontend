import React, {useState} from "react";
import {StatusBar} from "expo-status-bar";
import {Text, View, TouchableOpacity, Dimensions, Image, ScrollView} from 'react-native';
import { Colors } from "../../css/general/style";

import {StyledContainer, InnerContainer} from '../../css/general/style';

import {
    InnerContainerRemake, 
    StyledBoldTitle,
    GrayText,
    BlackText,
    StyledDot,
    SolidDot,
    LongLine,
    SmallSolidDot} from '../../css/Dashboard/home';

import DashBoardBottomMenu from "../../components/DashboardBottomMenu";

import AlarmBell from "../../components/AlarmBell";
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import { useSelector, useDispatch } from "react-redux";
import { deleteEvent } from "../../redux/actions/CalendarEvents/home";
const windowHeight = Dimensions.get('window').height;

const Home = ({navigation}) => {
    const userData = useSelector(state => state.userName);
    const dispatch = useDispatch();
    const calenderEventData = useSelector(state => state.upcomingEvents);
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuPosition, setMenuPosition] = useState(0);
    const [currentEventId, setcurrentEventId] = useState(undefined);

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
                                <Text style={{fontSize:22}}>Good morning, {userData.Name}!</Text>
                                <Text>Each day is an opportunity to shine!</Text> 
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
                            setcurrentEventId={setcurrentEventId} />
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
                        </View>
            </InnerContainerRemake>
            <DashBoardBottomMenu currentScreen={"Home"} navigation={navigation}/>
        </StyledContainer>
    )
};



const UpcomingsScrollable = ({calenderEventData, 
    menuOpen, setMenuOpen, setMenuPosition, setcurrentEventId}) => {
    let eventList = [];
    const now = new Date();
    for (const eventD of Object.keys(calenderEventData)){
        eventList.push(
            <CalendarEvent
                key = {eventD}
                eventId = {eventD}
                startTime={calenderEventData[eventD].startDate}
                endTime={calenderEventData[eventD].endDate}
                eventTitle={calenderEventData[eventD].eventTitle}
                eventDetails={calenderEventData[eventD].eventDetails}
                inProgress={((calenderEventData[eventD].startDate < now) && (now <calenderEventData[eventD].endDate))}
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
                setMenuPosition={setMenuPosition}
                setcurrentEventId={setcurrentEventId}
            />)
    }
    return(
        <View
            style={{height: "100%",
                flex: 1,
                width: "100%",
                alignItems: 'center',
                paddingBottom: "0%",
                paddingTop: "0%"}}>
            <ScrollView showsVerticalScrollIndicator={false}
                        overScrollMode={"never"}
                        contentContainerStyle={{
                            flexGrow: 1}}
                                >
                {eventList}
            </ScrollView>
        </View>
    );
};

const CalendarEvent = ({eventId, startTime, endTime, eventTitle, 
    eventDetails, inProgress, menuOpen, setMenuOpen, setMenuPosition,
    setcurrentEventId}) => {

    return(
    <View style={{height: "25%", flexDirection: "row", paddingBottom: "1%",
    backgroundColor: menuOpen?Colors.gray:Colors.white}}>
        <CalendarTimingDetail 
            startTime={startTime}
            endTime={endTime}
            inProgress={inProgress}
            menuOpen={menuOpen}
            />
        <DetailsTask
            eventId = {eventId}
            EventTitle={eventTitle}
            EventDetails={eventDetails}
            inProgress={inProgress}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            setMenuPosition={setMenuPosition}
            setcurrentEventId={setcurrentEventId}
        />
        
    </View>);
};

const DetailsTask = ({eventId, EventTitle, EventDetails, 
    inProgress, menuOpen, setMenuOpen, setMenuPosition, setcurrentEventId}) => {
    return(
        <View 
        style={{backgroundColor: inProgress?Colors.purple:(menuOpen?Colors.gray:Colors.white), 
        borderRadius: inProgress?15:0, marginRight: "5%", padding: "2%",
        width: "70%", flexDirection: "row"}}>
            <View style={{width: "90%"}}>
                <StyledBoldTitle style={{color: inProgress?(menuOpen?Colors.gray:Colors.white):Colors.purple}}> 
                    {EventTitle}
                </StyledBoldTitle>
                <Text style={{color: inProgress?Colors.black:Colors.black}}> 
                    {EventDetails}
                </Text>
            </View>
            <View style={{width: "10%", alignItems: "center", alignContent: "center",
                        justifyContent: "space-between"}}>
                <TouchableOpacity style={{alignItems:"flex-start"}}
                    onPress={(event)=>{
                        console.log("open the menu and gray out the rest", eventId);
                        setcurrentEventId(eventId);
                        setMenuPosition(Math.floor(100*event.nativeEvent.pageY/windowHeight));
                        setMenuOpen(!menuOpen);
                        }}>
                    <SmallSolidDot style={{backgroundColor: inProgress?(menuOpen?Colors.gray:Colors.white):Colors.black}}/>
                    <SmallSolidDot style={{backgroundColor: inProgress?(menuOpen?Colors.gray:Colors.white):Colors.black}}/>
                    <SmallSolidDot style={{backgroundColor: inProgress?(menuOpen?Colors.gray:Colors.white):Colors.black}}/>
                </TouchableOpacity>
                {inProgress &&(
                <BouncyCheckbox
                    style={{width: "38%"}}
                    size={18}
                    fillColor={Colors.purple}
                    iconStyle={{borderColor: Colors.black, borderRadius: 0}}
                    onPress={() => {console.log('need to built the functionality to delete this event...')}}
                />)}
            </View>
            
        </View>
    )
};

const CalendarTimingDetail = ({startTime, endTime, inProgress, menuOpen}) => {
    //startTime and endTime are time objects
    const formatTiming = (dateToFormat) => {
        var hours = dateToFormat.getHours();
        var minutes = dateToFormat.getMinutes().toString();
        var typeOfDay = 'AM'
        if (hours > 12){
            hours = hours - 12;
            typeOfDay = 'PM';
        }
        if (minutes.length < 2){
            minutes = '0' + minutes;
        }
        return hours.toString() + ':' + minutes.toString() + typeOfDay;
    }
    const startTimeString = formatTiming(startTime);
    const endTimeString = formatTiming(endTime);
    return(
        <View 
        style={{width: "20%", marginLeft: "3%",
                marginRight: "3%",
                alignItems: "center",
                backgroundColor: menuOpen?Colors.gray:Colors.white}}>
            <BlackText style={{}}>{startTimeString}</BlackText>
            <GrayText >{endTimeString}</GrayText>
            <StyledDot style={{backgroundColor: menuOpen?Colors.gray:Colors.white}}>
                {inProgress &&(
                    <SolidDot/>
                )}
            </StyledDot>
            <LongLine/>
    </View>
    );
};




export default Home;