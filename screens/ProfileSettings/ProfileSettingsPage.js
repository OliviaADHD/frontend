import React from "react";
import { StatusBar } from "expo-status-bar";

import { 
  StyledContainer,
  InnerContainer,
  TopPaddingStyledFormArea,
  ProfileListTouch,
  ProfileListText,
  FirstSectionItem,
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
        
        <TopPaddingStyledFormArea>
        
          <FirstSectionItem>
            <ProfileListTouch
              activeOpacity={0.5}
              onPress = {() => navigation.navigate('ProfilePreferencesPage')}
            >            
            <ProfileListText> Preferences </ProfileListText>          
            </ProfileListTouch>
          </FirstSectionItem>

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

        </TopPaddingStyledFormArea>

        <DashBoardBottomMenu currentScreen={"Profile"} navigation={navigation}/>

      </InnerContainer>

    </StyledContainer>

  )
}

