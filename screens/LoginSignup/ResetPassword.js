import React from "react";
import { StatusBar } from "expo-status-bar";
import { Formik } from 'formik';

import { View } from "react-native";

import {
  MediumExtraText,
  StyledTextInput,
  StyledFormArea,
  StyledButton,
  ButtonText,
  BlockText,
}from '../../components/LoginSignup/resetPassword';

import {  
  StyledContainer,
  InnerContainer
} from '../../components/general/style'


export default function ResetPassword({navigation}) {


  //! Form is based on this: https://formik.org/docs/overview
  //! Fetch request not done
  //! Error message not completed

  return (
  <StyledContainer>   
    <StatusBar style="dark"/>
    <InnerContainer>

      <MediumExtraText>Forgot your password?</MediumExtraText>
        
      <BlockText>
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
            
            <StyledFormArea>
              <View>
            
                <StyledTextInput
                  type="email"
                  name="email" 
                  placeholder="Email ID"
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType="email-address"
                />
              
                {errors.email && touched.email && 
                <ErrorMessage>
                  <ErrorText>{errors.email}</ErrorText>
                </ErrorMessage> }

                <StyledButton type="submit" disabled={isSubmitting} onPress={() => {
                  handleSubmit
                  navigation.navigate("MessageResetPassword")
                  }}>
                  <ButtonText>Submit</ButtonText>
                </StyledButton>

              </View>
            </StyledFormArea>
          )}

      </Formik>
  
    </InnerContainer>
  </StyledContainer>
  );
}