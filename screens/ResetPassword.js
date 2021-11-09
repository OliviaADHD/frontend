import React, { useState, TextInput, View } from "react";
import { StatusBar } from "expo-status-bar";
import { Formik, Field } from 'formik';

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
  // const [email, setEmail] = useState('');

  //! Check this link out: https://formik.org/docs/guides/react-native

  return (
    <StyledContainer>   
    <StatusBar style="dark"/>
    <InnerContainer>
    

      <MediumExtraText style={{ color : '#694398', marginTop : '20%', paddingBottom: '10%' }}>Forgot your password?</MediumExtraText>
      
      <BlockText style={{textAlign: 'center'}}>
      Enter Your Registered Email Below To Receive Password Reset Instruction{"\n"}{"\n"}
      </BlockText>
      
      {/* <StyledFormArea> */}
    
    <Formik
      initialValues={{email: ''}}
      onSubmit={(values) => {
          console.log(values['email']);
          if (values['email']===""){console.log('empty')}
          console.log(values);
        }}  
      
    >{({handleChange, handleBlur, handleSubmit, values})=> (<StyledFormArea>
          <Field
          name="email" 
              placeholder="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              // keyboardType="email-address"
          />

<StyledButton onPress={handleSubmit}>
                        <ButtonText>Submit</ButtonText>
                    </StyledButton>

                    </StyledFormArea>)}

      {/* <Formik
     initialValues={{ email: '' }}
     onSubmit={values => console.log(values)}
   >
     {({ handleChange, handleBlur, handleSubmit, values }) => (

      <View>
         <TextInput
          placeholder="Email ID"
           onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
         />
         <ButtonText onPress={handleSubmit} title="Submit" /> */}

        {/* <StyledButton onPress = {() => navigation.navigate("Login")}>
          <ButtonText>Submit</ButtonText>
        </StyledButton> */}

      {/* </View> */}

     {/* )} */}
   </Formik>

        
      {/* </StyledFormArea> */}
    
    </InnerContainer>
</StyledContainer>
  );
}
