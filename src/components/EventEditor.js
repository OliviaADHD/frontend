import React, {useState} from "react";
import { View, Text, Switch} from 'react-native';
import {Colors} from "../css/general/style";
import { Icon } from 'react-native-elements';
import { HeaderView, 
    ContentView, 
    InnerContainerRemake, 
    EventView, 
    CloseView, 
    StyledIcon, 
    InputView, 
    InputViewTitle,
    CalendarDateTouchable,
    DarkGrayText,
    PurpleButton,
    WhiteText,
    WarningText } from "../css/Dashboard/New/createEvent";

import DateTimePicker from '@react-native-community/datetimepicker';

import {useDispatch } from "react-redux";
import { ADD_EVENT, CHANGE_EVENT } from "../redux/actions/types";

import {Calendar} from 'react-native-calendars';

export const EventEditor = ({setClose, date, title, details, startTime, endTime, reminder, loc, type, eventId}) => {
    const dispatch = useDispatch();   

    const newEvent =()=>{
        if (type === "new"){
            const dateFormatted = selectedDate.slice(5,7)+"/"+selectedDate.slice(-2)+"/"+selectedDate.slice(2,4);
            const payload = {
                date: dateFormatted,
                startDate: new Date(selectedDate.slice(0,4),selectedDate.slice(5,7), selectedDate.slice(-2), 
                                    (startPmOrAm=="PM")?startHour+12:startHour, startMinutes),
                endDate: new Date(selectedDate.slice(0,4),selectedDate.slice(5,7), selectedDate.slice(-2),
                                (endPmOrAm==="PM")?endHour+12:endHour,endMinutes),
                title: titleText,
                details: detailsText,
                remindMe: remindMe,
                location: location,
                category: undefined,
            };        
            dispatch({type: ADD_EVENT,
                payload: payload});
        } else if (type === "edit"){
            const dateFormatted = selectedDate.slice(5,7)+"/"+selectedDate.slice(-2)+"/"+selectedDate.slice(2,4);
            const payload = {
                eventId: eventId,
                date: dateFormatted,
                startDate: new Date(selectedDate.slice(0,4),selectedDate.slice(5,7), selectedDate.slice(-2), 
                                    (startPmOrAm=="PM")?startHour+12:startHour, startMinutes),
                endDate: new Date(selectedDate.slice(0,4),selectedDate.slice(5,7), selectedDate.slice(-2),
                                (endPmOrAm==="PM")?endHour+12:endHour,endMinutes),
                title: titleText,
                details: detailsText,
                remindMe: remindMe,
                remindMeWhen: undefined,
                location: location,
                category: undefined,
            };        
            dispatch({type: CHANGE_EVENT,
                payload: payload});
        }
        
        setClose(false);

    };

    const closeEvent = () => {
        setClose(false);
    };

    var today = (date===undefined)? new Date():date; 

    const transformDateToFormatForCalendar = (date) => {
        let dateString = date.getFullYear()+"-"
        const month = (date.getMonth() > 8)? (date.getMonth()+1) : "0" + (date.getMonth()+1);
        const day = (date.getDate() > 9)? date.getDate() : "0" + date.getDate();
        return dateString+month+'-'+day;
    }

    const [warningTitleTextEmpty, setWarningTitleTextEmpty] = useState(false);
    const [titleText, setTitleText] = useState((title===undefined)?"":title);
    const [detailsText, setDetailsText] = useState((details===undefined)?"":details);
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState(transformDateToFormatForCalendar(today));

    var startingTime = (startTime === undefined)? new Date(): startTime;
    const [showStartHourSelector, setStartShowHourSelector] = useState(false);
    const [startHour, setStartHour] = useState((startingTime.getHours()>12)?startingTime.getHours()-12:startingTime.getHours());
    const [startMinutes, setStartMinutes] = useState(startingTime.getMinutes());
    const [startPmOrAm, setStartPmOrAm] = useState((startingTime.getHours()>12)? "PM" : "AM")

    var endDate = (endTime===undefined)? new Date(startingTime.getTime()+30*60000):endTime;
    const [showEndHourSelector, setEndShowHourSelector] = useState(false);
    const [endHour, setEndHour] = useState((endDate.getHours()>12)?endDate.getHours()-12:endDate.getHours());
    const [endMinutes, setEndMinutes] = useState(endDate.getMinutes());
    const [endPmOrAm, setEndPmOrAm] = useState((endDate.getHours()>12)? "PM" : "AM")

    const [remindMe, setRemindMe] = useState((reminder===undefined)?true:reminder);

    const [location, setLocation] = useState((loc===undefined)?'some location':loc);



    return (
            <InnerContainerRemake style={{backgroundColor: Colors.gray}}>
                <HeaderView>              
                </HeaderView>
                <ContentView>
                    <CloseView>
                        <StyledIcon
                        name='close-outline'
                        type='ionicon'
                        size={35}
                        onPress={() => closeEvent()}
                        />
                    </CloseView>
                    <EventView style={{marginTop: "0%"}}>
                        <InputViewTitle
                                placeholder="Create a new event"
                                underlineColorAndroid='transparent'
                                value={titleText}
                                onChangeText={(text) => setTitleText(text)}/>
                    </EventView>
                    {warningTitleTextEmpty && 
                        <WarningText>Please enter a title</WarningText>}
                    {showCalendar &&
                        (<View style={{height: "80%"}}>
                            <View>
                                <Calendar
                                    onDayPress={(day) => setSelectedDate(day.dateString)}
                                    markedDates={{[selectedDate]: {selected:true, selectedColor: Colors.purple}}}
                                    theme={{
                                            
                                            todayTextColor: '#7047EB',
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
                                            textSectionTitleColor: '#7047EB'
                                        }}
                                />
                            </View>
                            <PurpleButton onPress={()=>setShowCalendar(false)}>
                                <WhiteText>Done</WhiteText>
                            </PurpleButton>
                        </View>)}
                    { showStartHourSelector && (
                        <View>
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={new Date(2022, 1, 1, (startPmOrAm === "AM")? startHour: startHour+12, startMinutes)}
                                mode={'time'}
                                is24Hour={false}
                                display="spinner"
                                onChange={(event, date)=>{
                                    setStartShowHourSelector(false);
                                    if (event.type === "set"){
                                        setStartHour((date.getHours()>12)?(date.getHours()-12):date.getHours());
                                        setStartMinutes(date.getMinutes());
                                        setStartPmOrAm((date.getHours()>12)? "PM": "AM");
                                        endDate = new Date(2022, 1, 1, (endPmOrAm === "AM")? endHour: endHour+12, endMinutes);
                                        if (endDate.getTime() < date.getTime()) {
                                            endDate = new Date(date.getTime()+30*60000);
                                            setEndHour((endDate.getHours()>12)?endDate.getHours()-12:endDate.getHours());
                                            setEndMinutes(endDate.getMinutes());
                                            setEndPmOrAm((endDate.getHours()>12)? "PM" : "AM");
                                        }
                                    }
                                    }}
                                />
                        </View>
                    )}
                    { showEndHourSelector && (
                        <View>
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={new Date(2022, 1, 1, (endPmOrAm === "AM")? endHour: endHour+12, endMinutes)}
                                mode={'time'}
                                is24Hour={false}
                                display="spinner"
                                onChange={(event, date)=>{
                                    setEndShowHourSelector(false);
                                    if (event.type === "set"){
                                        setEndHour((date.getHours()>12)?(date.getHours()-12):date.getHours());
                                        setEndMinutes(date.getMinutes());
                                        setEndPmOrAm((date.getHours()>12)? "PM": "AM");
                                        if (endDate.getTime() > date.getTime()) {
                                            today = new Date(date.getTime()-30*60000);
                                            setStartHour((today.getHours()>12)?today.getHours()-12:today.getHours());
                                            setStartMinutes(today.getMinutes());
                                            setStartPmOrAm((today.getHours()>12)? "PM" : "AM");
                                        }
                                    }
                                    }}
                                />
                        </View>
                    )}
                    {!showCalendar && (
                    <View style={{height: "100%"}}>
                        <EventView style={{marginTop:(warningTitleTextEmpty)?"1%":"5%"}}>
                            <Icon
                            name='menu-outline'
                            type='ionicon'
                            size={35}
                            style={{
                                marginLeft:"10%"
                            }}
                            />
                            <InputView
                                placeholder="Add Details"
                                underlineColorAndroid='transparent'
                                multiline={true}
                                value={detailsText}
                                onChangeText={(text) => setDetailsText(text)}/>
                        </EventView>
                        <EventView>
                            <Icon
                            name='calendar-outline'
                            type='ionicon'
                            size={35}
                            style={{
                                marginLeft:"10%"
                            }}
                            />
                            <CalendarDateTouchable onPress={() => setShowCalendar(true)}>
                                <DarkGrayText>{selectedDate}</DarkGrayText>
                            </CalendarDateTouchable>
                        </EventView>
                        <EventView>
                            <Icon
                            name='time-outline'
                            type='ionicon'
                            size={35}
                            style={{
                                marginLeft:"10%"
                            }}
                            />
                            <CalendarDateTouchable style={{width: "50%"}}
                                    onPress={()=>setStartShowHourSelector(true)}>
                                <DarkGrayText>From</DarkGrayText>
                                <Text>
                                    {(startHour>9)?startHour:"0"+startHour}:{(startMinutes>9)?startMinutes: "0"+startMinutes} {startPmOrAm}
                                </Text>
                            </CalendarDateTouchable>

                        </EventView>
                        <EventView>
                            <CalendarDateTouchable style={{width: "50%", marginLeft: "24%"}}
                                 onPress={()=>setEndShowHourSelector(true)}>
                                    <DarkGrayText>To</DarkGrayText>
                                    <Text>
                                        {(endHour>9)?endHour:"0"+endHour}:{(endMinutes>9)?endMinutes: "0"+endMinutes} {endPmOrAm}
                                    </Text>
                                </CalendarDateTouchable>
                        </EventView>
                        <EventView>
                            <Icon
                            name='alarm-outline'
                            type='ionicon'
                            size={35}
                            style={{
                                marginLeft:"10%"
                            }}
                            />
                            <DarkGrayText style={{marginLeft: "5%"}}>Remind Me</DarkGrayText>
                            <View style={{height:"100%", justifyContent: "center", width: "35%"}}>
                                <Switch 
                                    style={{ marginRight: 19, transform : [{scale: 1.1}]}}
                                    trackColor={{ false: Colors.darkgray, true: Colors.purple}}
                                    thumbColor={Colors.white}              
                                    ios_backgroundColor="#3e3e3e"
                                    value={remindMe}
                                    onValueChange={(value)=>setRemindMe(value)}
                                />
                            </View>
                        </EventView>
                        <EventView>
                            <Icon
                            name='location-outline'
                            type='ionicon'
                            size={35}
                            style={{
                                marginLeft:"10%"
                            }}
                            />
                            <CalendarDateTouchable onPress={() => console.log('implement location picker')}>
                                <DarkGrayText>Location</DarkGrayText>
                            </CalendarDateTouchable>
                        </EventView>
                        <EventView style={{justifyContent: "center"}} >
                            <PurpleButton style={{height:"90%", width: "60%"}}
                                    onPress={()=>{
                                            (titleText==="")?setWarningTitleTextEmpty(true) : newEvent();
                                            }}>
                                <WhiteText>Done</WhiteText>
                            </PurpleButton>
                        </EventView>
                    </View>)
                    }
                </ContentView>
            </InnerContainerRemake>
    );
  }

