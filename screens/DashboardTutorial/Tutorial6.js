import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import {
    StyledContainer,
    InnerContainer,
    Colors
} from '../../components/styles';

import { Background, 
    DashboardTutorialTop, 
    DashboardTitle,
    DashboardTutorialBottomBar,
} from "../../components/stylesDashboardTutorial";

import DashBoardBottomMenuStatic from "../../components/DashboardBottomMenuStatic";
import AlarmBell from "../../components/AlarmBell";


const styles = StyleSheet.create({
    PurpleBubble: {
        backgroundColor: Colors.purple,
        height: "28%",
        width: "85%",
        marginLeft: "5%",
        marginBottom: "-99%",
        alignSelf: "flex-start",
        borderRadius: 9,
        alignContent: "space-between",
        justifyContent: "center",
        alignItems: "center"
    },
    BubbleText: {
        color: Colors.white,
        fontSize: 15,
        textAlign: "left",
        width: "90%",
        padding: "1%",
        height: "80%",
    },
    PurpleBottomNext: {
        marginBottom: "-7%",
        height: "40%",
        width: "30%",
        marginLeft: "65%",
        alignContent: "center",
    },
    PurpleBottomNextText:{
        width: "100%",
        height: "100%",
        color: Colors.white,
        alignSelf: "flex-end",
        textAlign: "center",
        textAlignVertical: "center",
        textDecorationLine: "underline",
        fontSize: 17,
    }
});

const Tutorial6Content = ({navigation}) => {
    const name = useSelector(state => state.userNameInfo);

    const completedTutorial = () => {
        navigation.replace("Home");
        console.log("send to backend that tuorial has been viewed!");
    };

    return(
        <StyledContainer style={{backgroundColor: Colors.gray}}>
            <StatusBar style="dark"/>
            <View style={{height: "7%"}}>
                <AlarmBell alarmNumber={0} showAlarm={false}/>
            </View>
            <InnerContainer style={{height: "80%"}}>
                <DashboardTutorialTop> 
                    <DashboardTitle>
                        Good Morning {name.userName} 
                    </DashboardTitle>
                </DashboardTutorialTop>
                <Background source={require('../../assets/images/GetStartedBackground.png')}
                                resizeMode="contain">
                    <View style={styles.PurpleBubble}>
                        <Text style={styles.BubbleText}>
                            Change your profile and Privacy Settings.
                        </Text>
                    </View>
                </Background>
                <DashboardTutorialBottomBar>
                <TouchableOpacity onPress={completedTutorial}
                                            style={styles.PurpleBottomNext}>
                    <Text style={styles.PurpleBottomNextText}>
                        Next
                    </Text>
                </TouchableOpacity>
                </DashboardTutorialBottomBar>
            </InnerContainer>
            <DashBoardBottomMenuStatic currentScreen={"Profile"} backgroundColor={true}/>
        </StyledContainer>
    )
};

//redux related
import store from "../../src/store";
import { Provider } from "react-redux";
import {useSelector} from 'react-redux';

const Tutorial6 = ({navigation}) => {
    return (
        <Provider store={store}>
         <Tutorial6Content navigation={navigation}/>
        </Provider>
  
    );
}


export default Tutorial6;