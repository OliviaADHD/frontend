import React, {useState} from "react";
import {StatusBar} from "expo-status-bar";
import {Text, View, TouchableOpacity, Dimensions, Image} from 'react-native';
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
const windowHeight = Dimensions.get('window').height;

const Home = ({navigation}) => {
    const userData = useSelector(state => state.userName);
    const testStart = new Date('December 17, 1995 08:00:00');
    const testEnd = new Date('December 17, 1995 08:30:00');
    const [menuOpen, setMenuOpen] = useState(false);
    const [menuPosition, setMenuPosition] = useState(0);
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
                <View style={{height: "60%", width: "100%",
                            backgroundColor: menuOpen?Colors.gray:Colors.white}}>
                    <StyledBoldTitle>Upcomings</StyledBoldTitle>
                    <CalendarEvent
                        startTime={testStart}
                        endTime={testEnd}
                        eventTitle={"MyTestEvent!"}
                        eventDetails={"all these things I need to do"}
                        inProgress={false}
                        menuOpen={menuOpen}
                        setMenuOpen={setMenuOpen}
                        setMenuPosition={setMenuPosition}
                    />
                    <CalendarEvent
                        startTime={testStart}
                        endTime={testEnd}
                        eventTitle={"My other TestEvent!"}
                        eventDetails={"all these things I need to do so so so so so so much, panic panic panic"}
                        inProgress={true}
                        menuOpen={menuOpen}
                        setMenuOpen={setMenuOpen}
                        setMenuPosition={setMenuPosition}
                    />
                    <CalendarEvent
                        startTime={testStart}
                        endTime={testEnd}
                        eventTitle={"My other TestEvent!"}
                        eventDetails={"all these things I need to do so so so so so so much, panic panic panic"}
                        inProgress={false}
                        menuOpen={menuOpen}
                        setMenuOpen={setMenuOpen}
                        setMenuPosition={setMenuPosition}
                    />
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
                                console.log('delete pressed...')
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

const CalendarEvent = ({startTime, endTime, eventTitle, 
    eventDetails, inProgress, menuOpen, setMenuOpen, setMenuPosition}) => {

    return(
    <View style={{height: "30%", flexDirection: "row", paddingBottom: "1%",
    backgroundColor: menuOpen?Colors.gray:Colors.white}}>
        <CalendarTimingDetail 
            startTime={startTime}
            endTime={endTime}
            inProgress={inProgress}
            menuOpen={menuOpen}
            />
        <DetailsTask
            EventTitle={eventTitle}
            EventDetails={eventDetails}
            inProgress={inProgress}
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            setMenuPosition={setMenuPosition}
        />
        
    </View>);
};

const DetailsTask = ({EventTitle, EventDetails, 
    inProgress, menuOpen, setMenuOpen, setMenuPosition}) => {
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
                        console.log("open the menu and gray out the rest");
                        
                        setMenuPosition(Math.floor(100*event.nativeEvent.pageY/windowHeight));
                        console.log(Math.floor(100*event.nativeEvent.pageY/windowHeight));
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
        style={{bwidth: "20%", marginLeft: "3%",
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