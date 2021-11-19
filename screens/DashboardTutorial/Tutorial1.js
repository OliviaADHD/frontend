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



const Tutorial1Content = ({navigation}) => {
    const name2 = useSelector(state => state.userNameInfo);
    //let's dispatch and change the name to Amy <- can't, as this cause infinite re-renders :P
    const dispatch = useDispatch(); 

    const skipTutorial = () => {
        navigation.replace("Home");
        console.log("send to backend that tuorial has been viewed!");
    };

    const startTutorial = () => {
        dispatch(testLogin());
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
                        Good Morning {name2.userName} 
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

//redux related
import { testLogin } from "../../src/actions/user/userData";
import store from "../../src/store";
import { Provider } from "react-redux";
import {useSelector, useDispatch} from 'react-redux';


const Tutorial1 = ({navigation}) => {
    return (
        <Provider store={store}>
         <Tutorial1Content navigation={navigation}/>
        </Provider>
  
    );
}

export default Tutorial1;
