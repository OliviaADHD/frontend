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

// const languages = ['English', 'French', 'Spanish']

export default function ProfilePreferencesPage({navigation}) {

  // const [preferences, setPreferences] = useState({
  //   language: '',
  //   mode: false
  // })

  //! Trying to implement dropdown with:
  //! https://javascript.plainenglish.io/implementing-dropdown-select-boxes-in-react-native-with-formik-a897d1b3db48
  //! https://www.npmjs.com/package/@react-native-picker/picker

  const languages = [
    {name: 'English', id: 0},
    {name: 'French', id: 1},
    {name: 'Spanish', id: 2},
  ]



  const [selected, setSelected] = useState();

  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }

  const formik = useFormik({
    initialValues: { language: '' },
    onSubmit: values => {
      axios({
        method: 'post',
        url: 'domain-name' + url,
          data: {
            'language': values.language},
            headers: {'Content-Type': 'application/json'}
          }).then(response => {
          }).catch(err => {
            Alert.alert('An error occured', err.message, [{ text: 'Okay'}]);
          })}
  });

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
            // ref={pickerRef ? open : close}
            enabled={true} 
            mode="dialogue"
            placeholder={{label: 'Select an option', value: null}}
            // placeholder='Language'
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

{/* <SelectPicker
  enabled={true} 
      placeholder='Language'
			onValueChange={(value) => {
				// Do anything you want with the value. 
				// For example, save in state.
        
				setSelected(value);
			}}
			selected={selected}
			>
			
			{Object.values(languages).map((val, index) => (
				<SelectPicker.Item label={val} value={val} key={index} />
			))}

		</SelectPicker> */}

    {/* <SelectPicker.Item label='Language' value='' />
    <SelectPicker.Item label='English' value='English' />
    <SelectPicker.Item label='French' value='French' />
    <SelectPicker.Item label='Spanish' value='Spanish' />
    </SelectPicker> */}
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
        thumbColor={isEnabled ? Colors.white : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
          
          </View> 

          <Button 
            mode="contained" 
            title='submit' 
            onPress={formik.handleSubmit}
      >
        Enter
      </Button>
        </StyledFormArea>
        {/* <Profile/> */}
      </InnerContainer>
    </StyledContainer>

  )
}

