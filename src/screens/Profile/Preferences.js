import React from "react";
import axios from 'axios';
import { Text, Switch, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFormik } from 'formik';
import { Picker as SelectPicker } from '@react-native-picker/picker';
import { Colors } from "../../css/general/style";


import {
  StyledFormArea,
  PageTitle,
  PageTitleFormat,
  SubSectionPurpleBottomLine,
  LanguageSection,
  LanguageSectionText,
  DarkModeSection,
  DarkModeSectionText,
} from "../../css/Profile/preferences";

import { StyledContainer, InnerContainer} from "../../css/general/style";

import SaveButton from "../../components/SaveButton";

import ProfileTopContainer from "../../components/ProfileTopContainer";

import DashBoardBottomMenu from "../../components/DashboardBottomMenu";

export default function Preferences({navigation}) {

  const languages = [
    {name: 'English', id: 0},
    {name: 'French', id: 1},
    {name: 'Spanish', id: 2},
  ]

  const formik = useFormik({
    initialValues: { language: '', switch: false },
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

            <PageTitle>Preferences</PageTitle>      

          </PageTitleFormat>
          
          <LanguageSection>
            
            <LanguageSectionText>Language</LanguageSectionText>

            <SelectPicker
              style={{
                width: 110,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginRight: 22,
                transform : [{scale: 1.5}]
              }}
              enabled={true} 
              mode="dialogue"
              selectedValue={formik.values.language}
              onValueChange={formik.handleChange('language')}            
            > 
       
              {Object.values(languages).map((item) => 
                (<SelectPicker.Item
                  style={{fontSize: 10, transform: [{scale: 0.2}]}} 
                  label={item.name} 
                  value={item.name} 
                  key={item.id} 
                />)
              )}
    
            </SelectPicker>

          </LanguageSection>

          <DarkModeSection>

            <DarkModeSectionText>
              Dark Mode
            </DarkModeSectionText>
            
            <Switch
              style={{ marginRight: 19, transform : [{scale: 1.1}]}}
              trackColor={{ false: Colors.darkgray, true: Colors.purple}}
              thumbColor={formik.values.switch ? Colors.white : "#f4f3f4"}              
              ios_backgroundColor="#3e3e3e"
              value={formik.values.switch}             
              onValueChange={value => formik.setFieldValue('switch', value)}
            />
          
          </DarkModeSection> 

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

