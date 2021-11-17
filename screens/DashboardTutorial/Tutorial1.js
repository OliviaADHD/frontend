import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import {Text, View} from 'react-native';

import {
    StyledContainer,
    InnerContainer,
    ButtonText, 
} from '../../components/styles';

import { Background, 
    DashboardTutorialTop, 
    DashboardTitle,
    RoundedPurpleBox,
    DashboardTutorialBottomBar,
    ButtonPressable,
    ButtonTextBottomDashboard
} from "../../components/stylesDashboardTutorial";

import DashBoardBottomMenuStatic from "../../components/DashboardBottomMenuStatic";
import AlarmBell from "../../components/AlarmBell";


const Tutorial1 = ({navigation}) => {
    const [name, setName] = useState("Amy");

    const skipTutorial = () => {
        navigation.replace("Home");
        console.log("send to backend that tuorial has been viewed!");
    };

    const startTutorial = () => {
        navigation.navigate("Tutorial2");
    };

    return(
        <StyledContainer>
            <StatusBar style="dark"/>
            <View style={{height: "7%"}}>
                <AlarmBell alarmNumber={0} showAlarm={false}/>
            </View>
            <InnerContainer style={{height: "80%"}}>
                <DashboardTutorialTop> 
                    <DashboardTitle>
                        Good Morning {name} 
                    </DashboardTitle>
                    <RoundedPurpleBox>
                        <ButtonText>Let's have a quick tutorial</ButtonText>
                    </RoundedPurpleBox>
                </DashboardTutorialTop>
                <Background source={require('../../assets/images/GetStartedBackground.png')}
                                resizeMode="contain">
                                    <Text></Text>
                </Background>
                <DashboardTutorialBottomBar>
                    <ButtonPressable onPress={skipTutorial}>
                        <ButtonTextBottomDashboard>
                            Skip
                        </ButtonTextBottomDashboard>
                    </ButtonPressable>
                    <ButtonPressable onPress={startTutorial}>
                    <ButtonTextBottomDashboard style={{fontWeight: "bold"}}>
                        Next
                    </ButtonTextBottomDashboard>
                    </ButtonPressable>
                </DashboardTutorialBottomBar>
            </InnerContainer>
            <DashBoardBottomMenuStatic currentScreen={"Home"} backgroundColor={false}/>
        </StyledContainer>
    )
};

export default Tutorial1;
