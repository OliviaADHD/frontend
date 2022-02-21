import React from "react";
import {Colors} from "../css/general/style";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {StyledBoldTitle, BlackText, UpcomingsScrollableView,
    CalenderEventView, DetailsEventView, 
    DetailsEventView2, SmallSolidDot,
    GrayText, SolidDot, StyledDot, LongLine,
    CalendarTimingDetailView} from "../css/components/UpcomingsScrollable";


const UpcomingsScrollable = ({calenderEventData, 
    menuOpen, setMenuOpen, setMenuPosition, setcurrentEventId, windowHeight, setDetailsOpen}) => {
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
                setDetailsOpen={setDetailsOpen}
                setcurrentEventId={setcurrentEventId}
                windowHeight={windowHeight}
            />)
    }
    return(
        <UpcomingsScrollableView>
            <ScrollView showsVerticalScrollIndicator={false}
                        overScrollMode={"never"}
                        contentContainerStyle={{
                            flexGrow: 1}}
                                >
                {eventList}
            </ScrollView>
        </UpcomingsScrollableView>
    );
};

const CalendarEvent = ({eventId, startTime, endTime, eventTitle, 
    eventDetails, inProgress, menuOpen, setMenuOpen, setMenuPosition,
    setcurrentEventId, windowHeight, setDetailsOpen}) => {

    return(
    <CalenderEventView style={{backgroundColor: menuOpen?Colors.gray:Colors.white}}>
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
            setDetailsOpen={setDetailsOpen}
            setMenuPosition={setMenuPosition}
            setcurrentEventId={setcurrentEventId}
            windowHeight={windowHeight}
        />
        
    </CalenderEventView>);
};

const DetailsEvent = ({eventId, EventTitle, EventDetails, setDetailsOpen,
    inProgress, menuOpen, setMenuOpen, setMenuPosition, setcurrentEventId, windowHeight}) => {
    return(
        <DetailsEventView 
        style={{backgroundColor: inProgress?Colors.purple:(menuOpen?Colors.gray:Colors.white), 
        borderRadius: inProgress?15:0}}>
        <TouchableOpacity style={{flexDirection: "row"}} 
                        onLongPress={(event)=>{
                            setMenuPosition(Math.floor(100*event.nativeEvent.pageY/windowHeight));
                            setcurrentEventId(eventId);
                            setDetailsOpen(true);}}>
            <View style={{width: "90%"}}>
                <StyledBoldTitle style={{color: inProgress?(menuOpen?Colors.gray:Colors.white):Colors.purple}}> 
                    {EventTitle}
                </StyledBoldTitle>
                <Text style={{color: inProgress?Colors.black:Colors.black}}> 
                    {EventDetails}
                </Text>
            </View>
            <DetailsEventView2>
                <TouchableOpacity style={{alignItems:"flex-start"}}
                    onPress={(event)=>{
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
                    onPress={() => {console.log('what should be done after clicking this?')}}
                />)}
            </DetailsEventView2>
        </TouchableOpacity>
        </DetailsEventView>
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
        <CalendarTimingDetailView 
        style={{backgroundColor: menuOpen?Colors.gray:Colors.white}}>
            <BlackText style={{}}>{startTimeString}</BlackText>
            <GrayText >{endTimeString}</GrayText>
            <StyledDot style={{backgroundColor: menuOpen?Colors.gray:Colors.white}}>
                {inProgress &&(
                    <SolidDot/>
                )}
            </StyledDot>
            <LongLine/>
    </CalendarTimingDetailView>
    );
};

export default UpcomingsScrollable;