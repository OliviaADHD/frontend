import React, {useState, useEffect} from "react";
import {StatusBar} from "expo-status-bar";
import {Dimensions} from 'react-native';
import {Colors, StyledContainer} from "../../../css/general/style";
import { Icon } from 'react-native-elements';
import { ContentView, InnerContainerRemake, TaskView, CloseView, StyledIcon, InputView } from "../../../css/Dashboard/New/createTask";
import { HeaderBar } from "../../../components/HeaderBar";


import { useSelector, useDispatch } from "react-redux";

const windowWidth = Dimensions.get('window').width;

export const Task = ({navigation}) => {
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
                <HeaderBar/>
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


  