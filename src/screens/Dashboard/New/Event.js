import React, {useState, useEffect} from "react";
import {StatusBar} from "expo-status-bar";
import {TouchableOpacity, View, Dimensions, Text, Switch} from 'react-native';
import {Colors, StyledContainer} from "../../../css/general/style";
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
    WarningText } from "../../../css/Dashboard/New/createEvent";

import { useSelector, useDispatch } from "react-redux";

import {Calendar} from 'react-native-calendars';

const windowWidth = Dimensions.get('window').width;

export const Event = ({navigation}) => {

    const newEvent =()=>{
        console.log('create New Task');
    };

    const closeEvent = () => {
        navigation.navigate("ToDoList");
    };

    var today = new Date(); 

    const transformDateToFormatForCalendar = (date) => {
        let dateString = date.getFullYear()+"-"
        const month = (date.getMonth() > 8)? (date.getMonth()+1) : "0" + (date.getMonth()+1);
        const day = (date.getDate() > 9)? date.getDate() : "0" + date.getDate();
        return dateString+month+'-'+day;
    }

    const [inputText, setInputText] = useState("");

    const [warningTitleTextEmpty, setWarningTitleTextEmpty] = useState(false);
    const [titleText, setTitleText] = useState("");
    const [detailsText, setDetailsText] = useState("");
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState(transformDateToFormatForCalendar(today));
    const [startHour, setStartHour] = useState((today.getHours()>12)?today.getHours()-12:today.getHours());
    const [startMinutes, setStartMinutes] = useState(today.getMinutes());
    const [startPmOrAm, setStartPmOrAm] = useState((today.getHours()>12)? "PM" : "AM")

    var endDate = new Date(today.getTime()+30*60000);
    const [endHour, setEndHour] = useState((endDate.getHours()>12)?endDate.getHours()-12:endDate.getHours());
    const [endMinutes, setEndMinutes] = useState(endDate.getMinutes());
    const [endPmOrAm, setEndPmOrAm] = useState((endDate.getHours()>12)? "PM" : "AM")

    const [remindMe, setRemindMe] = useState(true);


    return (
        <StyledContainer>
            <StatusBar style="dark"/>
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
                    {showCalendar?
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
                        </View>) : (
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
                                    onPush={()=>console.log('time picker implement!')}>
                                <DarkGrayText>From</DarkGrayText>
                                <Text>
                                    {(startHour>9)?startHour:"0"+startHour}:{(startMinutes>9)?startMinutes: "0"+startMinutes} {startPmOrAm}
                                </Text>
                            </CalendarDateTouchable>

                        </EventView>
                        <EventView>
                            <CalendarDateTouchable style={{width: "50%", marginLeft: "24%"}}
                                 onPush={()=>console.log('time picker implement!')}>
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
                            <InputView
                                placeholder="Location"
                                underlineColorAndroid='transparent'
                                value={inputText}
                                onChangeText={(text) => setInputText(text)}/>
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
        </StyledContainer>
    );
  }

