import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import {Text, ImageBackground, StyleSheet} from 'react-native';

import {
    StyledContainer,
    InnerContainer, 
} from '../../components/styles';

import DashBoardBottomMenuStatic from "../../components/DashboardBottomMenuStatic";

const styles =StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        height: "100%",
        width: "100%"
    }
})

const Tutorial1 = ({navigation}) => {
    return(
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer style={{height: "20%", backgroundColor: "blue"}}>
                <Text>Test for Home Page</Text>
            </InnerContainer>
            <InnerContainer style={{height: "60%", flex: 0, width: "100%"}}>
                <ImageBackground source={require('../../assets/images/GetStartedBackground.png')}
                                resizeMode="contain" style={styles.background}>
                                    <Text>Test,Test!!!supersupersuperlongteststeststststststts</Text>
                                </ImageBackground>
            </InnerContainer>
            <DashBoardBottomMenuStatic currentScreen={"Home"}/>
        </StyledContainer>
    )
};

export default Tutorial1;
