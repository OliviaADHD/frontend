import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import {Text} from 'react-native';

import {
    StyledContainer,
    InnerContainer, 
} from '../../css/styles';

import DashBoardBottomMenu from "../../components/DashboardBottomMenu";


const Awareness = ({navigation}) => {
    return(
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer style={{height: "60%",flex: 0}}>
                <Text>Test for Awareness Page</Text>
            </InnerContainer>
            <DashBoardBottomMenu currentScreen={"Awareness"} navigation={navigation}/>
        </StyledContainer>
    )
};

export default Awareness;