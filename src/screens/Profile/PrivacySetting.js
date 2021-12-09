import React from "react";
import axios from 'axios';
import { Text, Switch, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFormik } from 'formik';
import { Colors } from "../../css/general/style";


import { 
  StyledFormArea,
  PageTitle,
  PageTitleFormat,
  ProfileListTouch,
  ProfileListText,
  SectionPurpleBottomLine,
  SwitchSection,
  SwitchSectionNoMargin,
  SwitchSectionText
} from "../../css/Profile/privacy";

import { StyledContainer, InnerContainer} from "../../css/general/style";

import SaveButton from "../../components/SaveButton";

import ProfileTopContainer from "../../components/ProfileTopContainer";

import DashBoardBottomMenu from "../../components/DashboardBottomMenu";

export default function PrivacySetting({navigation}) {
  const formik = useFormik({
    initialValues: { photo: false, notify:false },
    onSubmit: values => {
      axios({
        method: 'post',
        url: 'domain-name' + url,
          data: {
            'language': values.language,
            'switch': values.switch},
            headers: {'Content-Type': 'application/json'}
          }).then(response => {
          }).catch(err => {
            Alert.alert('An error occured', err.message, [{ text: 'Okay'}]);
          })}
  });

  return (    
    
    <StyledContainer> 

    <StatusBar style="dark"/>

    <InnerContainer>
      
      <ProfileTopContainer/>

      <StyledFormArea>
      
        <PageTitleFormat>

          <PageTitle> Setting & Privacy </PageTitle>      

        </PageTitleFormat>
        
        <SwitchSection>

          <SwitchSectionText>
            Hide my Photo
          </SwitchSectionText>
          
          <Switch
            style={{ marginRight: 19, transform : [{scale: 1.1}]}}
            trackColor={{ false: Colors.darkgray, true: Colors.purple}}
            thumbColor={formik.values.photo ? Colors.white : "#f4f3f4"}              
            ios_backgroundColor="#3e3e3e"
            value={formik.values.photo}             
            onValueChange={value => formik.setFieldValue('photo', value)}
          />
        
        </SwitchSection> 

        <SectionPurpleBottomLine>
          <ProfileListTouch 
            activeOpacity={0.5}
            onPress = {() => navigation.navigate('ResetPassword')}
          >
            <ProfileListText> Reset Password </ProfileListText>            
          </ProfileListTouch>
      </SectionPurpleBottomLine>

        <SwitchSectionNoMargin>

          <SwitchSectionText>
            Stop Notifications
          </SwitchSectionText>
          
          <Switch
            style={{ marginRight: 19, transform : [{scale: 1.1}]}}
            trackColor={{ false: Colors.darkgray, true: Colors.purple}}
            thumbColor={formik.values.notify ? Colors.white : "#f4f3f4"}              
            ios_backgroundColor="#3e3e3e"
            value={formik.values.notify}             
            onValueChange={value => formik.setFieldValue('notify', value)}
          />
        
        </SwitchSectionNoMargin> 

        <SaveButton 
          mode="contained"
          uppercase={false} 
          title='save' 
          onPress={formik.handleSubmit}
        >
        </SaveButton>

      </StyledFormArea>

      <DashBoardBottomMenu currentScreen={"Profile"} navigation={navigation}/>

    </InnerContainer>
  
  </StyledContainer>

  )
}

