import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import {Text, ImageBackground, StyleSheet, View, TouchableOpacity} from 'react-native';

import {
    StyledContainer,
    InnerContainer, 
    ExtraText,
    MediumExtraText
} from '../../components/styles';
import {
    ButtonContainer,
    StyledButtonMens,
    StyledTitleCentered,
    StyledButtonNotSure,
    ButtonTextNotSure,
    StyledButtonNotSureContainer,
}from '../../components/stylesMenstruation';

import { Colors } from "../../components/styles";

import DashBoardBottomMenuStatic from "../../components/DashboardBottomMenuStatic";
import AlarmBell from "../../components/AlarmBell";

const styles =StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "center",
        height: "100%",
        width: "100%"
    },
    ButtonText: {
        fontSize: 17,
        textDecorationLine: "underline",
        justifyContent: "center",
        alignItems: "center",
        padding: "5%",
        
    },
    ButtonPressable:{
        backgroundColor: Colors.white
    },
    DashboardTutorialBottomBar: {
        height: "15%", 
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    DashboardTitle: {
        textAlign: "center",
        marginTop: "1%",
        marginBottom: "2%",
        fontSize: 20,
        maxWidth: "80%",
        textAlign: "justify",
        marginBottom: "7%",
    }
});


const Tutorial1 = ({navigation}) => {
    const [name, setName] = useState("Amy");

    return(
        <StyledContainer>
            <StatusBar style="dark"/>
            <View style={{height: "7%"}}>
                <AlarmBell alarmNumber={0} showAlarm={false}/>
            </View>
            <InnerContainer style={{height: "80%"}}>
                <View style={{height: "20%", backgroundColor: "blue"}}> 
                    <Text style={styles.DashboardTitle}>Good Morning {name} </Text>
                </View>
                <ImageBackground source={require('../../assets/images/GetStartedBackground.png')}
                                resizeMode="contain" style={styles.background}>
                                    <Text></Text>
                </ImageBackground>
                <View style={styles.DashboardTutorialBottomBar}>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")} 
                    style={styles.ButtonPressable}>
                        <Text style={styles.ButtonText}>
                            Skip
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Home")} 
                    style={styles.ButtonPressable}>
                    <Text style={[styles.ButtonText, {fontWeight: "bold"}]}>
                        Next
                    </Text>
                    </TouchableOpacity>
                </View>
            </InnerContainer>
            <DashBoardBottomMenuStatic currentScreen={"Home"}/>
        </StyledContainer>
    )
};

export default Tutorial1;
