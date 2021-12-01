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
              alignItems: 'center'
            }}
          >
                      
            <Text> Preferences </Text>          

          </View>
          
          <View>
            
            <Text>Language</Text>
          
            <SelectPicker
              enabled={true} 
              mode="dialogue"
              // placeholder={{label: 'Language', value: null}}
              selectedValue={formik.values.language}
              onValueChange={formik.handleChange('language')}            
            > 
       
              {Object.values(languages).map((item) => 
                (<SelectPicker.Item 
                  label={item.name} 
                  value={item.name} 
                  key={item.id} 
                />)
              )}
    
            </SelectPicker>

          </View>

          <View
            style={{
              // borderColor: "#000000",
              // borderWidth: 2,
              display: 'flex',

              flexDirection: 'row',
              flexWrap: 'wrap',

              justifyContent: 'space-between',
              alignItems: 'center',

            }}
          >

            <Text>Dark Mode</Text>
            
            <Switch
              trackColor={{ false: Colors.darkgray, true: Colors.purple}}
              thumbColor={'switch' ? Colors.white : "#f4f3f4"}
              // thumbColor={isEnabled ? Colors.white : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              value={values.switch}
              // onValueChange={toggleSwitch}
              onValueChange={value => setFieldValue('switch', value)}
              
              // value={isEnabled}
            />
          
          </View> 

          <Button 
            mode="contained" 
            title='submit' 
            onPress={formik.handleSubmit}
          >
          Save all changes
          </Button>
        </StyledFormArea>
        {/* <Profile/> */}
      </InnerContainer>
    </StyledContainer>

  )
}

