import React from "react";
import axios from 'axios';
import { View, Text, Switch, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useFormik } from 'formik';
import { Picker as SelectPicker } from '@react-native-picker/picker';
import { Button } from 'react-native-paper';

import { 
  Colors,
  PageTitle 
} from "../../components/ProfileSettings/ProfileGeneral";

import {
  StyledContainer,
  InnerContainer,
  // Colors,
  // ProfileListText,
  // ProfileListTouch,
  StyledFormArea
} from '../../components/styles';

import ProfileTopContainer from "../../components/ProfileTopContainer";

import DashBoardBottomMenu from "../../components/DashboardBottomMenu";

export default function ProfilePreferencesPage({navigation}) {
  

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
        
          <View
            style={{
              borderBottomWidth: 2,
              borderBottomColor: Colors.lightpurple, 
              width: 120,
              alignItems: 'center',
              marginBottom: 20,
              paddingBottom: 15, 
              paddingTop: 50
            }}
          >
                      
            {/* <Text style={{fontWeight: 'bold', fontSize: 14}}> Preferences </Text>           */}
            <PageTitle> Preferences </PageTitle>      

          </View>
          
          <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottomWidth: 1,            
            borderBottomColor: Colors.lightpurple,
            marginBottom: 20,
            paddingBottom: 20,
            paddingTop: 10           
          }}
          >
            
            <Text style={{paddingLeft: 22, fontSize: 15}}>Language</Text>

            <SelectPicker
              style={{
                display: 'flex',
                width: 110,
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

            </View>

          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderBottomWidth: 1,
              borderBottomColor: Colors.lightpurple,
              marginBottom: 20,
              paddingBottom: 10
            }}
          >

            <Text style={{paddingLeft: 22, fontSize: 14}}>
              Dark Mode
            </Text>
            
            <Switch
              style={{
                marginRight: 19, 
                transform : [{scale: 1.1}]}}
              trackColor={{ false: Colors.darkgray, true: Colors.purple}}
              thumbColor={formik.values.switch ? Colors.white : "#f4f3f4"}              
              ios_backgroundColor="#3e3e3e"
              value={formik.values.switch}             
              onValueChange={value => formik.setFieldValue('switch', value)}
            />
          
          </View> 

          <Button 
            style={{
              backgroundColor: '#7047EB', 
              borderRadius: 10, 
              paddingTop: 8, 
              paddingBottom: 8, 
              marginTop: 90}}
            mode="contained"
            uppercase={false} 
            title='save' 
            onPress={formik.handleSubmit}
          >

          <Text style={{fontSize: 12}}>Save all changes</Text>
          </Button>

        </StyledFormArea>

        <DashBoardBottomMenu currentScreen={"Profile"} navigation={navigation}/>

      </InnerContainer>
    
    </StyledContainer>

  )
}

