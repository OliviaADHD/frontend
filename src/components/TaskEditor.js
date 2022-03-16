import React, {useState, useEffect} from "react";
import {StatusBar} from "expo-status-bar";
import {View, StyleSheet, Image, Dimensions, TextInput} from 'react-native';
import {Colors, StyledContainer} from "../css/general/style";
import { Icon } from 'react-native-elements';
import { HeaderView, ContentView, InnerContainerRemake, TaskView, CloseView, StyledIcon, InputView } from "../css/Dashboard/New/createTask";

import {useDispatch } from "react-redux";
import { ADD_TASK, CHANGE_TASK } from "../redux/actions/types";


export const TaskEditor = ({setClose, taskTitle, taskId, type}) => {
    const dispatch = useDispatch()
    const newTask =()=>{
        if (type === "new"){
            dispatch({type: ADD_TASK,
                payload: {taskDetails: inputText}});
        } else if (type === "edit") {
            dispatch({type:CHANGE_TASK,
                payload: {taskId: taskId, taskTitle: inputText}});
        }

        setClose(false);
    };

    const closeTask = () => {
        setClose(false);
    };

    const [inputText, setInputText] = useState((taskTitle===undefined)?"":taskTitle);

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
                            value={inputText}
                            onChangeText={(text) => setInputText(text)}/>
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


  