import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import {Text, View, StyleSheet,TouchableOpacity} from 'react-native';

import {
    StyledContainer,
    InnerContainer,
    Colors, 
    ButtonText
} from '../../components/styles';

import { Background, 
    DashboardTutorialTop, 
    DashboardTitle,
    DashboardTutorialBottomBar,
    ButtonPressable,
    ButtonTextBottomDashboard,
    RoundedPurpleBox
} from "../../components/stylesDashboardTutorial";

import DashBoardBottomMenuStatic from "../../components/DashboardBottomMenuStatic";
import AlarmBell from "../../components/AlarmBell";



const TutorialAll = ({navigation}) => {
    const TutorialPagesStyles = [
        {
            page: 0,
            whiteIcon: 'Home',
            greyBackground: false,
        },
        {   page: 1,
            text: 'Track your menstruation cycle here',
            whiteIcon: 'Cycle',
            greyBackground: true,
            style: StyleSheet.create({
            PurpleBubble: {
                backgroundColor: Colors.purple,
                height: "28%",
                width: "85%",
                marginRight: "5%",
                marginBottom: "-18%",
                alignSelf: "flex-end",
                borderRadius: 9,
                borderBottomLeftRadius: 0,
                alignContent: "space-between",
                justifyContent: "space-between",
                zIndex: 10
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
        })}, 
        {   page: 2,
            text: 'Track your day-to-day tasks, events and set reminders here.',
            whiteIcon: 'ToDoList',
            greyBackground: true,
            style: StyleSheet.create({
            PurpleBubble: {
                backgroundColor: Colors.purple,
                height: "28%",
                width: "65%",
                marginRight: "5%",
                marginBottom: "-18%",
                alignSelf: "flex-end",
                borderRadius: 9,
                borderBottomLeftRadius: 0,
                alignContent: "space-between",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 100
            },
            BubbleText: {
                color: Colors.white,
                fontSize: 15,
                textAlign: "left",
                width: "90%",
                padding: "1%",
                height: "80%", 
                zIndex: 100
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
        })}, 
        {   page: 3, 
            text: 'View upcoming tasks and reminders here.',
            whiteIcon: 'Home',
            greyBackground: true,
            style: StyleSheet.create({
                PurpleBubble: {
                    backgroundColor: Colors.purple,
                    height: "28%",
                    width: "45%",
                    marginRight: "5%",
                    marginBottom: "-18%",
                    alignSelf: "flex-end",
                    borderRadius: 9,
                    borderBottomLeftRadius: 0,
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
            })}, 
        {   page: 4,
            text: 'Get connected to the people and share thoughts here.',
            whiteIcon: 'Awareness',
            greyBackground: true,
            style: StyleSheet.create({
            PurpleBubble: {
                backgroundColor: Colors.purple,
                height: "28%",
                width: "65%",
                marginLeft: "5%",
                marginBottom: "-18%",
                alignSelf: "flex-start",
                borderRadius: 9,
                borderBottomRightRadius: 0,
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
                marginLeft: "45%",
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
        })}, 
        {   page: 5,
            text: 'Change your profile and Privacy Settings here.',
            whiteIcon: 'Profile',
            greyBackground: true,
            style: StyleSheet.create({
            PurpleBubble: {
                backgroundColor: Colors.purple,
                height: "28%",
                width: "85%",
                marginLeft: "5%",
                marginBottom: "-18%",
                alignSelf: "flex-start",
                borderRadius: 9,
                borderBottomRightRadius: 0,
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
        })}
    ];
    const [name, setName] = useState("Amy");
    const [page, setPage] = useState(0);

    const TutorialFinished = () => {
        console.log('finished tutorial');
    };
    console.log('page value'+page);
    return(
        <StyledContainer style={(TutorialPagesStyles[page].page === 0)?{backgroundColor: Colors.white}:{backgroundColor: Colors.gray}}>
            <StatusBar style="dark"/>
            <View style={{height: "7%"}}>
                <AlarmBell alarmNumber={0} showAlarm={false}/>
            </View>
            <InnerContainer style={{height: "80%"}}>
                <DashboardTutorialTop> 
                    <DashboardTitle>
                        Good Morning {name} 
                    </DashboardTitle>
                    {TutorialPagesStyles[page].page === 0 &&
                    <RoundedPurpleBox>
                        <ButtonText>Let's have a quick tutorial</ButtonText>
                    </RoundedPurpleBox>}
                </DashboardTutorialTop>
                <Background source={require('../../assets/images/GetStartedBackground.png')}
                                resizeMode="contain"
                                style={{justifyContent: "flex-end"}}>
                                { TutorialPagesStyles[page].page !== 0 && (
                                    <View style={TutorialPagesStyles[page].style.PurpleBubble}>
                                        <Text style={TutorialPagesStyles[page].style.BubbleText}>
                                            {TutorialPagesStyles[page].text}
                                        </Text>
                                    </View>)
                                }
                                    
                </Background>
                
                    {TutorialPagesStyles[page].page === 0 ? (
                        <DashboardTutorialBottomBar>
                        <ButtonPressable onPress={TutorialFinished}>
                            <ButtonTextBottomDashboard style={{fontWeight: "bold"}}>
                                Skip
                            </ButtonTextBottomDashboard>
                        </ButtonPressable>    
                        <ButtonPressable onPress={()=>setPage(page+1)}>
                            <ButtonTextBottomDashboard style={{fontWeight: "bold"}}>
                                Next
                            </ButtonTextBottomDashboard>
                        </ButtonPressable>
                        </DashboardTutorialBottomBar>
                    ):
                    (<DashboardTutorialBottomBar>
                        <TouchableOpacity onPress={() => {(page===5)?TutorialFinished():setPage(page+1)}}
                                            style={TutorialPagesStyles[page].style.PurpleBottomNext}>
                                            <Text style={TutorialPagesStyles[page].style.PurpleBottomNextText}>
                                                Next
                                            </Text>
                    </TouchableOpacity>
                    </DashboardTutorialBottomBar>
                    )}
                
            </InnerContainer>
            <DashBoardBottomMenuStatic currentScreen={TutorialPagesStyles[page].whiteIcon} backgroundColor={TutorialPagesStyles[page].greyBackground}/>
        </StyledContainer>
    )
};

export default TutorialAll;