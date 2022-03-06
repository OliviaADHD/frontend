import React, {useState, useEffect} from "react";
import {StatusBar} from "expo-status-bar";
import {TouchableOpacity, Dimensions, Text} from 'react-native';
import {Colors, StyledContainer} from "../../../css/general/style";
import { Icon } from 'react-native-elements';
import { HeaderView, 
    ContentView, 
    InnerContainerRemake, 
    EventView, 
    CloseView, 
    StyledIcon, 
    InputView, 
    InputViewTitle } from "../../../css/Dashboard/New/createEvent";

import { useSelector, useDispatch } from "react-redux";

const windowWidth = Dimensions.get('window').width;

export const Event = ({navigation}) => {

    const newEvent =()=>{
        console.log('create New Task');
    };

    const closeEvent = () => {
        navigation.navigate("ToDoList");
    };

    const [inputText, setInputText] = useState("");

    const [titleText, setTitleText] = useState("");
    const [detailsText, setDetailsText] = useState("");

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
                        <InputView
                            placeholder="Date different input?"
                            underlineColorAndroid='transparent'
                            value={inputText}
                            onChangeText={(text) => setInputText(text)}/>
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
                        <InputView
                            placeholder="From"
                            underlineColorAndroid='transparent'
                            value={inputText}
                            onChangeText={(text) => setInputText(text)}/>
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
                </ContentView>
            </InnerContainerRemake>
        </StyledContainer>
    );
  }

