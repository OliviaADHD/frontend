import React, {useState} from "react";
import {StatusBar} from "expo-status-bar";
import {Text} from 'react-native';

import {StyledContainer} from '../../css/general/style';

import {InnerContainerRemake} from '../../css/Dashboard/todolist';

import DashBoardBottomMenu from "../../components/DashboardBottomMenu";

const ToDoList = ({navigation}) => {
    return (
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainerRemake>
                <Text>Test for ToDoList Page</Text>
            </InnerContainerRemake>
            <DashBoardBottomMenu currentScreen={"ToDoList"} navigation={navigation}/>
        </StyledContainer>
    )
};

export default ToDoList;