import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import {Text} from 'react-native';

import {
    StyledContainer,
    InnerContainer, 
} from '../../components/styles';

import DashBoardBottomMenu from "../../components/DashboardBottomMenu";


const ToDoList = ({navigation}) => {
    return(
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer style={{height: "60%",flex: 0}}>
                <Text>Test for ToDoList Page</Text>
            </InnerContainer>
            <DashBoardBottomMenu currentScreen={"ToDoList"} navigation={navigation}/>
        </StyledContainer>
    )
};

export default ToDoList;