import React, {useState, useEffect} from "react";
import {StatusBar} from "expo-status-bar";
import {View, StyleSheet, Image, Dimensions, TextInput} from 'react-native';
import {Colors, StyledContainer} from "../../../css/general/style";
import { Icon } from 'react-native-elements';
import { HeaderView, 
    ContentView, 
    InnerContainerRemake, 
    EventView, 
    CloseView, 
    StyledIcon, 
    InputView } from "../../../css/Dashboard/New/createEvent";

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
                    <EventView>
                        <Icon
                        name='checkmark-outline'
                        type='ionicon'
                        size={35}
                        style={{
                            marginLeft:"10%"
                        }}
                        />
                        <InputView
                            placeholder="Create a small task"
                            underlineColorAndroid='transparent'
                            value={inputText}
                            onChangeText={(text) => setInputText(text)}/>
                        <Icon
                            name='chevron-forward-circle-outline'
                            type='ionicon'
                            size={35}
                            onPress={() => newEvent()}
                            style={{
                                marginRight:"15%"
                            }}
                        />
                    </EventView>
                </ContentView>
            </InnerContainerRemake>
        </StyledContainer>
    );
  }

