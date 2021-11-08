import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import { Formik, Field } from 'formik'
import { connect } from "react-redux";
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

import {newUser, beforeSignUP} from '../../src/actions/user/user'
import * as yup from 'yup'

const signUpValidationSchema = yup.object().shape({
    fullName: yup
      .string().label('Fullname')
      //.matches(/(\w.+\s).+/, 'Enter at least 2 names')
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
      //.matches(/\w*[A-Z]\w*/,  "Password must have a capital letter")
      //.matches(/\d/, "Password must have a number")
      //.matches(/[!@#$%^&*()\-_"=+{}; :,<.>]/, "Password must have a special character")
      //.min(8, ({ min }) => `Passowrd must be at least ${min} characters`)
      .required('Password is required'),
  })

class Signup extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            hidePassword: true,
            loginError:false,
            emailError:false,
            isSelected: false,
            isDisabled: true,
            message:{}
        }
        this.state.message = this.props.message       
    }



    updateLoginError = () => {
             
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
                    <PageLogo source={require('./../assets/images/logo.png')} />
                    <Formik
                        validationSchema={signUpValidationSchema}
                        initialValues={{fullName: '', email: '', password: '',login:''}}
                        onSubmit={(values) => {
                            this.props.onSignup(values);                            

                                if(this.state.message){
                                    if (this.state.message.code==201){
                                        this.props.navigation.navigate("Welcome_Post_Signup")
                                    }else{
                                        if(this.state.message.text.includes("Email")){
                                            this.setState({emailError:true});
                                        }else if(this.state.message.text.includes("Login")){
                                            this.setState({loginError:true}); 
                                        }
                                    }


                                }
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

                        { this.state.loginError &&
                            <ErrorMessage>
                                <ErrorText>Login exists</ErrorText>
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

                        { this.state.emailError &&
                            <ErrorMessage>
                                <ErrorText>Email Exists</ErrorText>
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


                            <StyledButton disabled={! isValid } onPress={handleSubmit}>
                                <ButtonText>Signup</ButtonText>
                            </StyledButton>

                        <IconContainer>
                            <EachIconContainer>
                                <IconLogo  onPress={handleSubmit} source={require('./../assets/images/google.png')} />
                            </EachIconContainer>
                            <EachIconContainer>
                                <IconLogo onPress={handleSubmit} source={require('./../assets/images/facebook.png')} />
                            </EachIconContainer>
                            <EachIconContainer>
                                <IconLogo onPress={handleSubmit} source={require('./../assets/images/apple.png')} />
                            </EachIconContainer>
                        </IconContainer>
                        <ExtraView>
                            <ExtraText>Already Have An Account?</ExtraText>
                            <TextLink  onPress = {() => this.props.navigation.navigate("Login")}>
                                <TextLinkContent>Login</TextLinkContent>
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

const mapStateToProps = state => {
    const { message } = state.user;
    //console.log('login mapStateToProps ... state:' + JSON.stringify(state));
    //console.log('login mapStateToProps ... props:' + JSON.stringify({ message }));
    return { message };
};

const mapDispatchToProps = {
    onSignup :  newUser,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Signup);
