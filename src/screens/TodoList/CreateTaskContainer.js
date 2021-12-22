import React from 'react';
import { StatusBar } from "expo-status-bar";
import { Text, Icon, View, Button, Image } from "react-native";
// import {Button} from 'react-native-paper'
import { Formik } from 'formik';

import { 
  StyledContainer,
  InnerContainer,
  // StyledFormArea,

} from "../../css/todoList/style"

import {InputContainer, TextPlaceholder, IconsContainer} from "../../css/todoList/inputTaskContainer"

import CloseWindow from './CloseWindow'

import SubmitArrow from './SubmitArrow';

export default function CreateTaskContainer({navigation}) {




  return (

    <StyledContainer>
      <StatusBar style="dark"/>
      <InnerContainer>

        <InputContainer>

          <IconsContainer>

            <CloseWindow 
                // activeOpacity={0.5}
                // onPress = {() => navigation.navigate('TodoEmpty')}          
              />

          </IconsContainer>

          <Formik

initialValues={{ input: '' }}
validate={values => {
  const errors = {};
  if (!values.input) {
    errors.input = 'Required';
  } 
  return errors;
}}
onSubmit={(values, { setSubmitting }) => {
  setTimeout(() => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(true);
  }, 400);
}}
>{({    
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  handleSubmit,
  isSubmitting})=> (

          <TextPlaceholder
            type='input'
            name='input'
            placeholder='Create a small task'
            onChangeText={handleChange('input')}
            onBlur={handleBlur('input')}
            keyboardType='input'
          />
            
          
          <IconsContainer>
          
            <SubmitArrow 
              type='submit'
              disabled={isSubmitting}
              onPress={() => {
                handleSubmit
                navigation.navigate('Welcome')
              }}
            />
              </IconsContainer>
              )}

          
          
            
</Formik>

        </InputContainer>

      </InnerContainer>

    </StyledContainer>
  )
}
