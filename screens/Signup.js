import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
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
}from './../components/styles';

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
                    <PageLogo source={require('./../assets/images/logo.png')} />
                    <Formik
                        initialValues={{fullName: '', email: '', password: '',login:''}}
                        onSubmit={(values) => {
                            console.log(values)
                        }}
                    >{({handleChange, handleBlur, handleSubmit, values})=> (<StyledFormArea>
                        <MyTextInput 
                            placeholder="Full Name"
                            onChangeText={handleChange('fullName')}
                            onBlur={handleBlur('fullName')}
                            value={values.fullName}
                        />
                        <MyTextInput 
                        placeholder="Login"
                        onChangeText={handleChange('login')}
                        onBlur={handleBlur('login')}
                        value={values.login}
                        />
                        
                        { this.state.loginError && 
                            <ErrorMessage>
                                <ErrorText>Email exists</ErrorText>
                            </ErrorMessage> 
                          } 
                        <MyTextInput 
                            placeholder="Email"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
                        />
                        { this.state.emailValid && 
                            <ErrorMessage>
                                <ErrorText>Email exists</ErrorText>
                            </ErrorMessage> 
                          }
     
                        <MyTextInput 
                            placeholder="Password"
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry={this.state.hidePassword}
                            isPassword={true}
                            hidePassword={this.state.hidePassword}
                            setHidePassword={this.setHidePassword}
                        />
                        <PrivacyArea>
                            <CheckBox
                                value={this.state.isSelected}
                                onValueChange={this.setSelection}
                                style={styles.checkbox}
                            />
                            <PrivacyText  onPress = {() => this.props.navigation.navigate('Privacy')}>I Agree With Terms Of Privacy Policy.</PrivacyText>
                        </PrivacyArea>


                            <StyledButton>
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
                            <TextLink onPress = {() => navigation.navigate("Login")}>
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

