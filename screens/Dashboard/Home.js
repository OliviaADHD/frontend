import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import {Text} from 'react-native';

import {
    StyledContainer,
    InnerContainer, 
} from '../../components/styles';

import DashBoardBottomMenu from "../../components/DashboardBottomMenu";


const Home = ({navigation}) => {
    return(
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer style={{height: "60%", flex: 0}}>
                <Text>Test for Home Page</Text>
            </InnerContainer>
            <DashBoardBottomMenu currentScreen={"Home"} navigation={navigation}/>
        </StyledContainer>
    )
};

export default Home;