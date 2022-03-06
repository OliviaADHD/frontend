import React, {useState, useEffect} from "react";
import {StatusBar} from "expo-status-bar";
import {TouchableOpacity, View, Dimensions, Text} from 'react-native';
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
    WhiteText } from "../../../css/Dashboard/New/createEvent";

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

    const [titleText, setTitleText] = useState("");
    const [detailsText, setDetailsText] = useState("");
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDate, setSelectedDate] = useState(transformDateToFormatForCalendar(today));


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
                        <EventView>
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
                            <CalendarDateTouchable style={{width: "50%"}}>
                                <DarkGrayText>From</DarkGrayText>
                                <Text style={{backgroundColor: "red"}}>some Time</Text>
                            </CalendarDateTouchable>

                        </EventView>
                        <EventView>
                            <InputView
                                placeholder="To"
                                underlineColorAndroid='transparent'
                                value={inputText}
                                onChangeText={(text) => setInputText(text)}/>
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
                            <InputView
                                placeholder="Remind Me"
                                underlineColorAndroid='transparent'
                                value={inputText}
                                onChangeText={(text) => setInputText(text)}/>
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
                        <EventView style={{backgroundColor: Colors.purple}}>
                            <Text>Done</Text>
                        </EventView>
                    </View>)
                    }
                </ContentView>
            </InnerContainerRemake>
        </StyledContainer>
    );
  }

