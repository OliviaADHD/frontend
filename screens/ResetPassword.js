import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Formik, Field } from 'formik';

import { View, TextInput, Button } from "react-native";

import {
  StyledContainer,
  InnerContainer,
  MediumExtraText,
  StyledFormArea,
  StyledButton,
  ButtonText,
  BlockText,
}from './../components/styles';


export default function ResetPassword({navigation}) {

  //! Check this link out: https://formik.org/docs/guides/react-native

  return (
    <StyledContainer>   
    <StatusBar style="dark"/>
    <InnerContainer>
    

      <MediumExtraText style={{ color : '#694398', marginTop : '20%', paddingBottom: '10%' }}>Forgot your password?</MediumExtraText>
      
      <BlockText style={{textAlign: 'center'}}>
      Enter Your Registered Email Below To Receive Password Reset Instruction{"\n"}{"\n"}
      </BlockText>
      
    
    <Formik
      initialValues={{ email: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } 
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 1));
          setSubmitting(false);
        }, 400);
      }}
      
    >{({    values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting})=> (
      // <StyledFormArea>
      // <View>
      <View>
        <TextInput
            type="email"
            name="email" 
            placeholder="Email ID"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
            keyboardType="email-address"
          />
          {errors.email && touched.email && errors.email}
          <ButtonText type="submit" disabled={isSubmitting}>
             Submit
           </ButtonText>
           </View>
         )}
      

   </Formik>

    
    </InnerContainer>
</StyledContainer>
  );

}

