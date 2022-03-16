import React, {useState, useEffect} from "react";
import {StatusBar} from "expo-status-bar";
import {View, StyleSheet, Image, Dimensions, Text} from 'react-native';
import { TrophyImage,
    TextAndTrophyView, WelcomeTextView, CalendarImage,
    CurrentDateTextView, DateAndCalenderImageView  } from "../../../css/Dashboard/todolist";
import {Colors, StyledContainer} from "../../../css/general/style";
import { Icon } from 'react-native-elements';
import { HeaderView, ContentView, InnerContainerRemake, TaskView, CloseView, StyledIcon, InputView } from "../../../css/Dashboard/New/createTask";

import { useSelector, useDispatch } from "react-redux";

const windowWidth = Dimensions.get('window').width;

export const Task = ({navigation}) => {
    const userData = useSelector(state => state.userName);
    const monthNames =  ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
    var today = new Date();
    var day = String(today.getDate());    
    var year = today.getFullYear();
    const [month, setMonth] = useState(today.getMonth());
    const newTask =()=>{
        console.log('create New Task');
    };

    const closeTask = () => {
        navigation.navigate("ToDoList");
    };

    return (
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainerRemake style={{backgroundColor: Colors.gray}}>
                <HeaderView>
                        <DateAndCalenderImageView>
                        <CurrentDateTextView>
                            <Text style={{fontSize: 11, marginTop: "11%"}}> {monthNames[month]} {day}, {year}</Text>
                            <Text style={{fontWeight: "bold", marginTop: "4%"}}> Today </Text>
                        </CurrentDateTextView>
                        <CalendarImage source={require('../../../../assets/images/calendar.png')}/>
                    </DateAndCalenderImageView>
                    <TextAndTrophyView>
                        <WelcomeTextView>
                            <Text style={{fontSize: 11}}>Hi, {userData.Name}!</Text>
                            <Text style={{fontSize: 16}}>Let's get things 
                                <Text style={{color: Colors.purple}}> done</Text>
                            !</Text>
                        </WelcomeTextView>
                            <TrophyImage source={require('../../../../assets/images/trophy.png')}
                            />
                    </TextAndTrophyView>          
                </HeaderView>
                <ContentView>
                    <CloseView>
                        <StyledIcon
                        name='close-outline'
                        type='ionicon'
                        size={35}
                        onPress={() => closeTask()}
                        />
                    </CloseView>
                    <TaskView>
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
                            onChangeText={(password) => this.setState({password})}/>
                        <Icon
                            name='chevron-forward-circle-outline'
                            type='ionicon'
                            size={35}
                            onPress={() => newTask()}
                            style={{
                                marginRight:"15%"
                            }}
                        />
                    </TaskView>
                </ContentView>
            </InnerContainerRemake>
        </StyledContainer>
    );
  }


  