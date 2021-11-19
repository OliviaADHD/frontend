import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import {Text, View, StyleSheet,TouchableOpacity} from 'react-native';

import {
    StyledContainer,
    InnerContainer,
    Colors, 
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
        marginRight: "5%",
        marginBottom: "-18%",
        alignSelf: "flex-end",
        borderRadius: 9,
        alignContent: "space-between",
        justifyContent: "space-between"
    },
    BubbleText: {
        color: Colors.white,
        fontSize: 15,
        textAlign: "center",
        padding: "1%",
        height: "40%",
    },
    PurpleBottomNext: {
        marginBottom: "-7%",
        height: "40%",
        width: "30%",
        marginLeft: "70%",
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

const Tutorial2Content = ({navigation}) => {
    const name = useSelector(state => state.userNameInfo);

    const nextTutorial = () => {
        navigation.navigate("Tutorial3");
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
                                resizeMode="contain"
                                style={{justifyContent: "flex-end"}}>
                                    <View style={styles.PurpleBubble}>
                                        <Text style={styles.BubbleText}>
                                            Track your menstruation cycle here
                                        </Text>
                                    </View>
                                    
                </Background>
                <DashboardTutorialBottomBar>
                    <TouchableOpacity onPress={() => {navigation.navigate("Tutorial3")}}
                                            style={styles.PurpleBottomNext}>
                                            <Text style={styles.PurpleBottomNextText}>
                                                Next
                                            </Text>
                    </TouchableOpacity>
                </DashboardTutorialBottomBar>
            </InnerContainer>
            <DashBoardBottomMenuStatic currentScreen={"Cycle"} backgroundColor={true}/>
        </StyledContainer>
    )
};

//redux related
import store from "../../src/store";
import { Provider } from "react-redux";
import {useSelector, useDispatch} from 'react-redux';

const Tutorial2 = ({navigation}) => {
    return (
        <Provider store={store}>
         <Tutorial2Content navigation={navigation}/>
        </Provider>
  
    );
}


export default Tutorial2;