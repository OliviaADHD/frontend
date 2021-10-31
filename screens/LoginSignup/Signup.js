import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import { Formik, Field } from 'formik'

import {Ionicons} from '@expo/vector-icons';
import { View,CheckBox, StyleSheet } from "react-native";
import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    StyledFormArea,
    StyledTextInput,
    RightIcon,
    StyledButton,
    ButtonText,
    IconContainer,
    IconLogo,
    EachIconContainer,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent,
    ErrorText,
    ErrorMessage,
    PrivacyText,
    PrivacyArea,
    DisabledButton
}from '../../components/styles';

import * as yup from 'yup'

const signUpValidationSchema = yup.object().shape({
    fullName: yup
      .string().label('Fullname')
      .matches(/(\w.+\s).+/, 'Enter at least 2 names')
      .required('Full name is required'),
    login: yup
      .string().label('Login')
      .required('Login is required'),
    email: yup
      .string().label('Email')
      .email("Please enter valid email")
      .required('Email is required'),
    password: yup
      .string().label('Password')
      .matches(/\w*[a-z]\w*/,  "Password must have a small letter")
      .matches(/\w*[A-Z]\w*/,  "Password must have a capital letter")
      .matches(/\d/, "Password must have a number")
      .matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
      .min(8, ({ min }) => `Passowrd must be at least ${min} characters`)
      .required('Password is required'),
  })

export class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hidePassword: true,
            loginError:false,
            emailError:false,
            isSelected: false,
            isDisabled: true
        }
        
    }



    updateLoginError = () => {
        this.setState({loginError:true});        
    }


    updateEmailError = () => {
        this.setState({emailError:true});
    }
    setHidePassword= () =>{
        if(this.state.hidePassword == true){
            this.setState({hidePassword:false});
        }
        else{
            this.setState({hidePassword:true});
        }
    }
    setSelection = () => {

    }

    render(){
        return(
            <StyledContainer>
                <StatusBar style="dark"/>
                <InnerContainer>
                    <PageLogo source={require('../../assets/images/logo.png')} />
                    <Formik
                        validationSchema={signUpValidationSchema}
                        initialValues={{fullName: '', email: '', password: '',login:''}}
                        onSubmit={(values) => {
                            console.warn(JSON.stringify(values))
                            fetch('http://172.17.86.193:8080/signup', {
                                method: 'POST',
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify(values)
                              }).then((body) => {
                                console.warn(body);
                                alert( body );
                            }).catch ((error) => {
                                console.warn(error)
                                alert( error.body );
                             })

                        }}
                    >
                    {({handleChange, values, handleSubmit, errors, isValid, isSubmitting, touched, handleBlur})=> (
                    <StyledFormArea>
                        <MyTextInput 
                            placeholder="Full Name"
                            label='Full Name'
                            onChangeText={handleChange('fullName')}
                            onBlur={handleBlur('fullName')}
                            value={values.fullName}
                        />
                        { touched.fullName && errors.fullName &&
                            <ErrorMessage>
                                <ErrorText>{errors.fullName}</ErrorText>
                            </ErrorMessage> 
                        }
                        <MyTextInput 
                        placeholder="Login"
                        label='Login'
                        onChangeText={handleChange('login')}
                        onBlur={handleBlur('login')}
                        value={values.login}
                        />
                        { touched.login && errors.login &&
                            <ErrorMessage>
                                <ErrorText>{errors.login}</ErrorText>
                            </ErrorMessage> 
                        }

                        <MyTextInput 
                            placeholder="Email"
                            label='Email'
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
                        />
                        { touched.email && errors.email &&
                            <ErrorMessage>
                                <ErrorText>{errors.email}</ErrorText>
                            </ErrorMessage> 
                        }
     
                        <MyTextInput 
                            placeholder="Password"
                            label='Password'
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry={this.state.hidePassword}
                            isPassword={true}
                            hidePassword={this.state.hidePassword}
                            setHidePassword={this.setHidePassword}
                        />
                        { touched.password && errors.password &&
                            <ErrorMessage>
                                <ErrorText>{errors.password}</ErrorText>
                            </ErrorMessage> 
                        }
                        <PrivacyArea>
                            <CheckBox
                                value={this.state.isSelected}
                                onValueChange={this.setSelection}
                                style={styles.checkbox}
                            />
                            <PrivacyText  onPress = {() => this.props.navigation.navigate('Privacy')}>I Agree With Terms Of Privacy Policy.</PrivacyText>
                        </PrivacyArea>


                            <StyledButton disabled={! isValid || isSubmitting} onPress={handleSubmit}>
                                <ButtonText>Signup</ButtonText>
                            </StyledButton>

                        <IconContainer style={{marginBottom: "0%", paddingBottom: "0%", backgroundColor: "red"}}>
                            <EachIconContainer>
                                <IconLogo  onPress={handleSubmit} source={require('../../assets/images/google.png')} />
                            </EachIconContainer>
                            <EachIconContainer>
                                <IconLogo onPress={handleSubmit} source={require('../../assets/images/facebook.png')} />
                            </EachIconContainer>
                            <EachIconContainer>
                                <IconLogo onPress={handleSubmit} source={require('../../assets/images/apple.png')} />
                            </EachIconContainer>
                        </IconContainer>
                        <ExtraView style={{paddingTop: "0%", paddingBottom: "0%", marginBottom: "0%",
                         marginTop: "0%", height: "14%"}}> 
                            <ExtraText style={{paddingTop: "0%", paddingBottom: "0%"}}>Already Have An Account?</ExtraText>
                            <TextLink onPress = {() => this.props.navigation.navigate("Login")}>
                                <TextLinkContent style={{paddingTop: "0%", paddingBottom: "0%"}}>Login</TextLinkContent>
                            </TextLink>
                        </ExtraView>
                    </StyledFormArea>)}
                    </Formik>
                </InnerContainer>
            </StyledContainer>
        );
    }

};

const styles = StyleSheet.create({
    checkbox: {
      alignSelf: "center",
    },
  });

export const MyTextInput = ({isPassword, icon, hidePassword, setHidePassword, ...props}) => {
    return (
        <View>
            <StyledTextInput {...props} />
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={19}/>
                </RightIcon>
            )}
        </View>
    )
}

