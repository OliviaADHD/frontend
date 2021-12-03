import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import {Text} from 'react-native';

import {
    StyledContainer,
    InnerContainer, 
} from '../../css/styles';

import DashBoardBottomMenu from "../../components/DashboardBottomMenu";


const Profile = ({navigation}) => {
    return(
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer style={{height: "60%",flex: 0}}>
                <Text>Test for Profile Page</Text>
            </InnerContainer>
            <DashBoardBottomMenu currentScreen={"Profile"} navigation={navigation}/>
        </StyledContainer>
    )
};

export default Profile;