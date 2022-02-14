import React from "react";
import {StatusBar} from "expo-status-bar";
import {Formik} from 'formik';

import {View} from "react-native";

import {
    MediumExtraText,
    StyledTextInput,
    StyledFormArea,
    StyledButton,
    ButtonText,
    BlockText,
    ErrorMessage,
    ErrorText
} from '../../css/LoginSignup/resetPassword';

import {StyledContainer, InnerContainer} from '../../css/general/style';

import * as yup from 'yup'

const resetPasswordSchema = yup.object().shape({
  email: yup
    .string().label('Email')
    .email("Please enter valid email")
    .required('Email is required'),
})

const ResetPassword = ({navigation}) => {

  return (
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>

                <MediumExtraText>Forgot your password?</MediumExtraText>

                <BlockText>
                    Enter Your Registered Email Below To Receive Password Reset Instruction{"\n"}{"\n"}
                </BlockText>

                <Formik
                    initialValues={{email: ''}}
                    validationSchema={resetPasswordSchema}
                    onSubmit={(values) => {
                      navigation.replace("MessageResetPassword",{
                        email:values.email
                      })
                     }}
                    
                  >{({values, errors, touched, handleChange, handleBlur, handleSubmit}) => (
                        <StyledFormArea>
                            <View>
                                <StyledTextInput
                                    type="email"
                                    name="email"
                                    placeholder="Email@email.com"
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}
                                    keyboardType="email-address"/>
                                  
                                {errors.email && touched.email && 
                                  <ErrorMessage>
                                    <ErrorText>{errors.email}</ErrorText>
                                </ErrorMessage>
                               }

                                <StyledButton
                                    onPress={handleSubmit}>
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

export default ResetPassword;