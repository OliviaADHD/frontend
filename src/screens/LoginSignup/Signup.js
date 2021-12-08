import React, {useState, useEffect} from "react";
import { StatusBar } from "expo-status-bar";
import { Formik, Field } from 'formik'
import { useDispatch, useSelector } from "react-redux";
import {Ionicons} from '@expo/vector-icons';
import { View,CheckBox, StyleSheet, ActivityIndicator } from "react-native";
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
    AbsoluteContainer
}from '../../css/styles';

import* as AuthSession from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import * as Facebook from 'expo-auth-session/providers/facebook';
import { ResponseType } from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';

import {newUser, verifyEmail, verifyLogin, beforeValidEmail, beforeValidLogin, beforeSignUP} from '../../redux/actions/user/user'
import * as yup from 'yup'
import axios from "axios";

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



const Signup = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [loginError, setLoginError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
    const loginValidityState = useSelector(state => state.validateLoginInfo); // these are at the start simply Object {"message":{}}
    const emailValidityState = useSelector(state => state.validateEmailInfo);
    const networkError = useSelector(state => state.networkAvailability);
    const signUpState = useSelector(state => state.signUpInfo);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    //const [GoogleLogin, setGoogleLogin] = useState("texxt");
    const [requestGoogle, responseGoogle, promptAsyncGoogle] = Google.useAuthRequest({
        expoClientId: '51546200734-nm24i67drlpn5dkcnaj4ckta6k2cnfff.apps.googleusercontent.com',
        iosClientId: '51546200734-nm24i67drlpn5dkcnaj4ckta6k2cnfff.apps.googleusercontent.com',
        webClientId: '51546200734-qv54r4ur316rk4ll8lb37esgstngnr4i.apps.googleusercontent.com',
        ClientSecret: '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',
      });
    
    const getGoogleData = async (token) => {
        console.log('getGoogleData in here');
        axios.get('https://www.googleapis.com/oauth2/v3/userinfo',{
            headers: {
              Accept: 'application/json',
              Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json'
            },
            })
        .then(resp => {console.log('resp google data', resp.data.email, resp.data.name)})
        .catch(err => console.log('error get GoogleData', err));
        //put here the dispatch stuff to send to the backend. Create redux action for 'googleSignup'.
        // Then also change the Login, and verify that it works for both.
    };

    /*
    async function fetchUserInfoGoogle(token) {
        const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        });
      
        return await response.json();
      }*/
      
    const [userDataGoogle, setUserDataGoogle] = useState(undefined);

    useEffect(() => {
        if (responseGoogle?.type === 'success'){
            const {authentication: { accessToken } } = responseGoogle;
            getGoogleData(accessToken);
        }

    }, [responseGoogle]);

    useEffect(() => {
        console.log(userDataGoogle)
    }, [userDataGoogle]);

    return(
            <StyledContainer>
                <StatusBar style="dark"/>
                <InnerContainer>
                    <PageLogo source={require('../../../assets/images/logo.png')} />
                    <Formik
                        validationSchema={signUpValidationSchema}
                        initialValues={{fullName: '', email: '', password: '',login:''}}
                        onSubmit={(values) => {
                            setLoading(true);
                            dispatch(beforeSignUP())
                            .then(resp => dispatch(beforeValidEmail()))
                            .then(resp => dispatch(beforeValidLogin()))
                            .then(resp => dispatch(verifyLogin(values.login)))
                            .then(resp => {
                                    if (networkError.error === true){
                                        setLoading(false);
                                    } else {
                                        if (loginValidityState.message.passed === false) {
                                            setLoginError(true);
                                            setLoading(false);
                                        } else {
                                            setLoginError(false);
                                        }
                                        dispatch(verifyEmail(values.email))
                                        .then(resp => {
                                            if (emailValidityState.message.passed === false) {
                                                setEmailError(true);
                                                setLoading(false);
                                            } else {
                                                setEmailError(false);
                                            }})
                                        .then(resp => {
                                            if ((loginError === false) && (emailError === false)) {
                                                dispatch(newUser(values));
                                            }
                                        })
                                        .then(resp => {
                                            if (signUpState.message.passed === true) {
                                                setLoading(false);
                                                navigation.replace('Welcome_Post_Signup');
                                            } else {
                                                setLoading(false);
                                            }
                                        });
                                    }
                                }
                            );
                            
                    }
                    }
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

                        { loginError &&
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

                        { emailError &&
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
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />
                        { touched.password && errors.password &&
                            <ErrorMessage>
                                <ErrorText>{errors.password}</ErrorText>
                            </ErrorMessage> 
                        }
                        <PrivacyArea>
                            <CheckBox
                                value={isSelected}
                                onValueChange={(value)=>setIsSelected(value)}
                                style={styles.checkbox}
                            />
                            <PrivacyText  onPress = {() => navigation.navigate('Privacy')}>I Agree With Terms Of Privacy Policy.</PrivacyText>
                        </PrivacyArea>


                            <StyledButton onPress={handleSubmit} testID='SubmitButton'>
                                <ButtonText>Signup</ButtonText>
                            </StyledButton>
                        
                        {networkError.error && 
                            <ErrorMessage>
                                <ErrorText>No network connection. Please try again later.</ErrorText>
                            </ErrorMessage>
                        }

                        <IconContainer style={{marginBottom: "0%", paddingBottom: "0%"}}>
                            <EachIconContainer onPress={async()=>{
                                console.log("Trying to log in with google");
                                promptAsyncGoogle();
                                console.log("success?")

                                }}>
                                <IconLogo source={require('../../../assets/images/google.png')} />
                            </EachIconContainer>
                            <EachIconContainer>
                                <IconLogo onPress={handleSubmit} source={require('../../../assets/images/facebook.png')} />
                            </EachIconContainer>
                            <EachIconContainer>
                                <IconLogo onPress={handleSubmit} source={require('../../../assets/images/apple.png')} />
                            </EachIconContainer>
                        </IconContainer>
                        <ExtraView style={{paddingTop: "0%", paddingBottom: "0%", marginBottom: "0%",
                         marginTop: "0%", height: "14%"}}> 
                            <ExtraText style={{paddingTop: "0%", paddingBottom: "0%"}}>Already Have An Account?</ExtraText>
                            <TextLink onPress = {() => navigation.replace("Login")} testID={"Textlink"}>
                                <TextLinkContent style={{paddingTop: "0%", paddingBottom: "0%"}}>Login</TextLinkContent>
                            </TextLink>
                        </ExtraView>
                    </StyledFormArea>)}
                    </Formik>
                </InnerContainer>
                {loading &&
                    <View style={styles.loading}>
                        <ActivityIndicator size="large" color="#694398"/>
                    </View>
                }
            </StyledContainer>
        );
    }



const styles = StyleSheet.create({
    checkbox: {
      alignSelf: "center",
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        opacity: 0.5,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    }
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



export default Signup;
