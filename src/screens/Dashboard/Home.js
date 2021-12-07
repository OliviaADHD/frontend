import React, {useState} from "react";
import {StatusBar} from "expo-status-bar";
import {Text} from 'react-native';

import {StyledContainer, InnerContainer} from '../../css/general/style';

import {InnerContainerRemake} from '../../css/Dashboard/home';

import DashBoardBottomMenu from "../../components/DashboardBottomMenu";

const Home = ({navigation}) => {
    return (
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainerRemake>
                <Text>Test for Home Page</Text>
            </InnerContainerRemake>
            <DashBoardBottomMenu currentScreen={"Home"} navigation={navigation}/>
        </StyledContainer>
    )
};

export default Home;