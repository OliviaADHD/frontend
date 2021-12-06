import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";

import {
  // StyledContainer,
  // InnerContainer,
  // Colors,
  ProfileListText,
  ProfileListTouch,
  // StyledFormArea
} from '../../components/styles';

import { 
  Colors,
  StyledContainer,
  InnerContainer,
  StyledFormArea,
  PageTitle,
  PageTitleFormat,
  SectionPurpleBottomLine 
} from "../../components/ProfileSettings/ProfileGeneral";

import ProfileTopContainer from "../../components/ProfileTopContainer";

import DashBoardBottomMenu from "../../components/DashboardBottomMenu";

export default function ProfileSettingsPage({navigation}) {

  return (
    <StyledContainer> 

      <StatusBar style="dark"/>

      <InnerContainer>

        <ProfileTopContainer/>
        
        <StyledFormArea>
        
          <SectionPurpleBottomLine
            style={{
              borderTopWidth: 1,
              borderTopColor: Colors.lightpurple,
            }}
          >
            <ProfileListTouch
              activeOpacity={0.5}
              onPress = {() => navigation.navigate('ProfilePreferencesPage')}
            >            
            <ProfileListText> Preferences </ProfileListText>          
            </ProfileListTouch>
          </SectionPurpleBottomLine>

          <SectionPurpleBottomLine>
            <ProfileListTouch 
              activeOpacity={0.5}
              onPress = {() => navigation.navigate('ToBeDefined')}
            >
              <ProfileListText> Setting and Privacy </ProfileListText>            
            </ProfileListTouch>
          </SectionPurpleBottomLine>

          <SectionPurpleBottomLine>
            <ProfileListTouch
              activeOpacity={0.5}
              onPress = {() => navigation.navigate('ToBeDefined')}
            >
              <ProfileListText> Help </ProfileListText>            
            </ProfileListTouch>
          </SectionPurpleBottomLine>

          <SectionPurpleBottomLine>
            <ProfileListTouch
              activeOpacity={0.5}
              onPress = {() => navigation.replace('Login')}
            >            
              <ProfileListText> Sign Out </ProfileListText>         
            </ProfileListTouch>
          </SectionPurpleBottomLine>

        </StyledFormArea>

        <DashBoardBottomMenu currentScreen={"Profile"} navigation={navigation}/>

      </InnerContainer>
    </StyledContainer>

  )
}

