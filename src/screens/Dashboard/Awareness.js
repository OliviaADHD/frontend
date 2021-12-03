import React, {useState} from "react";
import {StatusBar} from "expo-status-bar";
import {Text} from 'react-native';

import {StyledContainer} from '../../css/general/style';

import {InnerContainerRemake} from '../../css/Dashboard/awarenesss';

import DashBoardBottomMenu from "../../components/DashboardBottomMenu";

const Awareness = ({navigation}) => {
    return (
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainerRemake>
                <Text>Test for Awareness Page</Text>
            </InnerContainerRemake>
            <DashBoardBottomMenu currentScreen={"Awareness"} navigation={navigation}/>
        </StyledContainer>
    )
};

export default Awareness;