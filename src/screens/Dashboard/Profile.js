import React, {useState} from "react";
import {StatusBar} from "expo-status-bar";
import {Text} from 'react-native';

import {StyledContainer} from '../../css/general/style';

import {InnerContainerRemake} from '../../css/Dashboard/profile';

import DashBoardBottomMenu from "../../components/DashboardBottomMenu";

const Profile = ({navigation}) => {
    return (
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainerRemake>
                <Text>Test for Profile Page</Text>
            </InnerContainerRemake>
            <DashBoardBottomMenu currentScreen={"Profile"} navigation={navigation}/>
        </StyledContainer>
    )
};

export default Profile;