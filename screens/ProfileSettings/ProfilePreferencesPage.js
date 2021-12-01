import React, {useState, useEffect, useRef} from "react";
import axios from 'axios';
import { View, Text, TouchableOpacity, Switch, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Formik, Field, Form, useFormik } from 'formik';
import { Picker as SelectPicker } from '@react-native-picker/picker';
import { Button, Title, TextInput } from 'react-native-paper';


import {
  StyledContainer,
  InnerContainer,
  Colors,
  // ProfileListText,
  // ProfileListTouch,
  StyledFormArea
} from '../../components/styles';

// import ProfileTopContainer from "../../components/ProfileTopContainer";

// import Profile from "../Dashboard/Profile";

export default function ProfilePreferencesPage({navigation}) {
  

  const languages = [
    {name: 'English', id: 0},
    {name: 'French', id: 1},
    {name: 'Spanish', id: 2},
  ]
  
  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);



  // const [selected, setSelected] = useState();

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
        {/* <ProfileTopContainer/> */}
        <StyledFormArea>
        
          <View
            style={{
              // borderTopWidth: 1,
              borderBottomWidth: 2,
              // borderTopColor: Colors.lightpurple,
              borderBottomColor: Colors.lightpurple, 
              width: 120,
              alignItems: 'center',
              marginBottom: 20,
              paddingBottom: 15, 
              paddingTop: 20
            }}
          >
                      
            <Text style={{fontWeight: 'bold', fontSize: 14}}> Preferences </Text>          

          </View>
          
          <View
          style={{
            // borderColor: "#000000",
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
            
            <Text style={{paddingLeft: 22, fontSize: 14}}>Language</Text>
          
            <View>

            <SelectPicker
              style={{
                display: 'flex',
                width: 120,
                // flex: 1,
                // flexDirection: 'row',
                // flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginRight: 22
              }}
              enabled={true} 
              mode="dialogue"
              // placeholder={{label: 'Language', value: null}}
              selectedValue={formik.values.language}
              onValueChange={formik.handleChange('language')}            
            > 
       
              {Object.values(languages).map((item) => 
                (<SelectPicker.Item
                  style={{fontSize: 14, fontFamily: 'roboto'}} 
                  label={item.name} 
                  value={item.name} 
                  key={item.id} 
                />)
              )}
    
            </SelectPicker>

            </View>

          </View>

          <View
            style={{
              //borderColor: "#000000",
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

            <Text style={{paddingLeft: 22, fontSize: 14}}>Dark Mode</Text>
            
            <Switch
              style={{marginRight: 22}}
              trackColor={{ false: Colors.darkgray, true: Colors.purple}}
              thumbColor={formik.values.switch ? Colors.white : "#f4f3f4"}              
              ios_backgroundColor="#3e3e3e"
              value={formik.values.switch}             
              onValueChange={value => formik.setFieldValue('switch', value)}    
              // thumbColor={isEnabled ? Colors.white : "#f4f3f4"}
              // onValueChange={toggleSwitch}          
              // value={isEnabled.switch}
            />
          
          </View> 

          <Button 
            style={{backgroundColor: '#7047EB', borderRadius: 10, paddingTop: 8, paddingBottom: 8, marginTop: 100}}
            mode="contained"
            uppercase={false} 
            title='save' 
            onPress={formik.handleSubmit}
          >
          <Text style={{fontSize: 12}}>Save all changes</Text>
          </Button>
        </StyledFormArea>
        {/* <Profile/> */}
      </InnerContainer>
    </StyledContainer>


  )
}

