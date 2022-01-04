import React, {useState, useEffect} from "react";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import {Ionicons} from '@expo/vector-icons';
import { StyleSheet, ActivityIndicator, View, Platform } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {useAuthRequest, exchangeCodeAsync} from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import { signIn, beforeSignIn, signInGoogle, signInFacebook } from '../../redux/actions/user/user'
import {
  PageLogo,
  StyledFormArea,
  StyledTextInput,
  RightIcon,
  StyledButton,
  ButtonText,
  ForgotPasswordText,
  ForgotPassword,
  Or,
  IconContainer,
  IconLogo,
  EachIconContainer,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
  ErrorText,
  ErrorMessage,
} from '../../css/LoginSignup/login';

import {  
    StyledContainer,
    InnerContainer,
    Loading
} from '../../css/general/style';

import * as yup from 'yup';

import * as Google from 'expo-auth-session/providers/google';



const signInValidationSchema = yup.object().shape({
    email: yup
      .string().label('Email')
      .email("Please enter valid email")
      .required('Email is required'),
    password: yup
      .string().label('Password')
  })


WebBrowser.maybeCompleteAuthSession();
const useProxy = true;

const Login = ({navigation}) => {
    const dispatch = useDispatch();
    const [hidePassword, setHidePassword] = useState(true);
    const [loading, setLoading] = useState(false);
    const userData = useSelector(state => state.userName);
    const loginState = useSelector(state => state.loginInfo);
    const networkError = useSelector(state => state.networkAvailability);

    //Google login
    const [googleError, setGoogleError] = useState(false);
    const [googleClicked, setGoogleClicked] = useState(false);
    const [requestGoogle, responseGoogle, promptAsyncGoogle] = Google.useAuthRequest({
        expoClientId: '51546200734-nm24i67drlpn5dkcnaj4ckta6k2cnfff.apps.googleusercontent.com',
        iosClientId: '51546200734-nm24i67drlpn5dkcnaj4ckta6k2cnfff.apps.googleusercontent.com',
        webClientId: '51546200734-qv54r4ur316rk4ll8lb37esgstngnr4i.apps.googleusercontent.com',
        ClientSecret: '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',
      });
    
    const makeGoogleLogin = async(token) => {
        dispatch(beforeSignIn())
        .then(() => dispatch(signInGoogle(token)))
        .then((resp) => {
            if (resp.success === true){
                setLoading(false);
                setGoogleClicked(false);
                
                if (resp.firstTime){

                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Welcome_Post_Signup' }]});
                    }
                else if (resp.tutDone === false){
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'TutorialDashboard' }]});
                }
                else {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Home' }]});
                }

            } else {
                setGoogleError(true);
                setLoading(false);
                setGoogleClicked(false);
            }

        })
        .catch(err => {
            setGoogleError(true);
            setLoading(false);
            setGoogleClicked(false);
        });
    } 

    useEffect(() => {
        if ((responseGoogle?.type === 'success') && (googleClicked === true)){
            setGoogleClicked(false);
            const {authentication: { accessToken } } = responseGoogle;
            makeGoogleLogin(accessToken);
            

        } else {
            setLoading(false);
            if (googleClicked === true) {
                setGoogleError(true);
                setGoogleClicked(false);
            }
        }

    }, [responseGoogle]);

    //Facebook login
    const [fbError, setfbError] = useState(true);
    const [fbClicked, setfbClicked] = useState(false);

    const discoveryfb = {
        authorizationEndpoint: 'https://www.facebook.com/v12.0/dialog/oauth',
        tokenEndpoint: 'https://graph.facebook.com/v12.0/oauth/access_token'
    };
    
    const configfb = {
        clientId: '901148574169051',
        scopes: ['public_profile'],
        redirectUri: "https://auth.expo.io/@anja-roed/olivia",
        extraParams: {
            display: Platform.select({web: 'popup'})
        }
    };
    const [requestFb, responseFb, promptAsyncFb] = useAuthRequest(configfb, discoveryfb);

    const getFbToken = async(code, codeVerifier) => {
        const tokenResult = exchangeCodeAsync(
            {
            code: code,
            clientId: '901148574169051',
            scopes: ['public_profile'],
            redirectUri: "https://auth.expo.io/@anja-roed/olivia",
            extraParams: {
                code_verifier: codeVerifier || "",
                },
            }, discoveryfb);
        return tokenResult;
    }

    const makeFacebookLogin = async(token) => {
        dispatch(beforeSignIn())
        .then(() => dispatch(signInFacebook(token)))
        .then((resp) => {
            if (resp.success === true){
                setLoading(false);
                setfbClicked(false);
                
                if (resp.firstTime){

                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Welcome_Post_Signup' }]});
                    }
                else if (resp.tutDone === false){
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'TutorialDashboard' }]});
                    }
                else {
                    navigation.reset({
                        index: 0,
                        routes: [{ name: 'Home' }]});
                }

            } else {
                setfbError(true);
                setLoading(false);
                setfbClicked(false);
            }

        })
        .catch(err => {
            setfbError(true);
            setLoading(false);
            setfbClicked(false);
        });
    } 

    useEffect(()=>{
        if ((responseFb?.type === 'success') && (fbClicked === true)){     
            const {code} = responseFb.params;
            const {codeVerifier} = requestFb;
            getFbToken(code, codeVerifier)
            .then(resp => {
                makeFacebookLogin(resp.accessToken);
            })
            .catch(err => {
                setfbError(true);
            })
        } else { 
            if (fbClicked === true) {
                setfbError(true);
                setfbClicked(false);
            } 
            setLoading(false);
        }
    }, [responseFb])
    



    return(
            <StyledContainer>
                <StatusBar style="dark"/>
                <InnerContainer>
                    <PageLogo source={require('../../../assets/images/logo.png')} />
                    <Formik
                        initialValues={{email: '', password: ''}}
                        validationSchema={signInValidationSchema}
                        onSubmit={(values) => {
                            setLoading(true);
                            dispatch(beforeSignIn())
                            .then(() => dispatch(signIn(values)))
                            .then((resp) => {
                                if (resp.success === true){
                                    setLoading(false);                                    
                                    if (resp.firstTime){
                                        navigation.reset({
                                            index: 0,
                                            routes: [{ name: 'Welcome_Post_Signup' }]});
                                        }
                                    else if (resp.tutDone === false){
                                        navigation.reset({
                                            index: 0,
                                            routes: [{ name: 'TutorialDashboard' }]});
                                    }
                                    else {
                                        navigation.reset({
                                            index: 0,
                                            routes: [{ name: 'Home' }]});
                                    }
                                } else {
                                    setLoading(false);
                                }
                            });
                        }}
                        
                    
                    >{({handleChange, handleBlur, handleSubmit, values})=> (<StyledFormArea>
                        <MyTextInput 
                            placeholder="Email"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
                        />

                        <MyTextInput 
                            placeholder="Password"
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />
                        <ForgotPassword onPress = {() =>  navigation.navigate("ResetPassword")} style={{alignSelf: "left"}}>
                            <ForgotPasswordText>Forgot Password?</ForgotPasswordText>
                        </ForgotPassword>
                        <StyledButton onPress={handleSubmit} style={(fbError||networkError.error||loginState.message.error||googleError)?{marginBottom: "2%"}:{marginBottom: "7%"}}>
                            <ButtonText>Login</ButtonText>
                        </StyledButton>
                        {networkError.error && 
                            <ErrorMessage style={{alignSelf: "center"}}>
                                <ErrorText>No network connection. Please try again later.</ErrorText>
                            </ErrorMessage>
                        }
                        { loginState.message.error &&
                            <ErrorMessage style={{alignSelf: "center"}}>
                                <ErrorText>{loginState.message.errorMessage}</ErrorText>
                            </ErrorMessage> 
                        }
                        {googleError && 
                            <ErrorMessage style={{alignSelf: "center"}}>
                                <ErrorText>Error signing in with google.</ErrorText>
                            </ErrorMessage>
                        }
                        {fbError && 
                            <ErrorMessage style={{alignSelf: "center"}}>
                                <ErrorText>Error signing in with facebook.</ErrorText>
                            </ErrorMessage>
                        }

                        <Or>Or</Or>
                        <IconContainer style={{marginBottom: "2%"}}>
                            <EachIconContainer onPress={async()=>{
                                setLoading(true);
                                setGoogleClicked(true);
                                promptAsyncGoogle();
                            }}>
                                <IconLogo source={require('../../../assets/images/google.png')} />
                            </EachIconContainer>
                            <EachIconContainer onPress={() => {
                                setLoading(true);
                                setfbClicked(true);
                                promptAsyncFb({useProxy});
                                }} >
                                <IconLogo source={require('../../../assets/images/facebook.png')} />
                            </EachIconContainer>
                            <EachIconContainer onPress={handleSubmit}>
                                <IconLogo  source={require('../../../assets/images/apple.png')} />
                            </EachIconContainer>
                        </IconContainer>
                        <ExtraView style={{marginTop: "0%"}}>
                            <ExtraText>Would You Like To Join Us? </ExtraText>
                            <TextLink onPress = {() =>  navigation.navigate("Signup")}>
                                <TextLinkContent>Signup</TextLinkContent>
                            </TextLink>
                        </ExtraView>
                    </StyledFormArea>)}
                    </Formik>
                </InnerContainer>
                {loading &&
                    <Loading>
                        <ActivityIndicator size="large" color="#694398"/>
                    </Loading>
                }
            </StyledContainer>   
        );
    
    }

const MyTextInput = ({isPassword, icon, hidePassword, setHidePassword, ...props}) => {
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


export default Login;
