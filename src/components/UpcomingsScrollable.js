import React from "react";
import {Colors} from "../css/general/style";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import { StyledBoldTitle, SmallSolidDot, BlackText, GrayText, SolidDot, StyledDot, LongLine } from "../css/Dashboard/home";
import BouncyCheckbox from 'react-native-bouncy-checkbox';


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
        <DetailsEvent
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

const DetailsEvent = ({eventId, EventTitle, EventDetails, 
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

export default UpcomingsScrollable;