import React, {useState, useEffect} from "react";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import {Ionicons} from '@expo/vector-icons';
import { StyleSheet, ActivityIndicator, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import RootStack from "../../navigators/RootStack";
//import * as AuthSession from 'expo-auth-session';
import {makeRedirectUri} from 'expo-auth-session';
import * as Facebook from 'expo-auth-session/providers/facebook';
import { ResponseType } from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import { signIn, beforeSignIn, signInGoogle } from '../../redux/actions/user/user'
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
import axios from "axios";
import {link} from '../../redux/config/config';

const signInValidationSchema = yup.object().shape({
    email: yup
      .string().label('Email')
      .email("Please enter valid email")
      .required('Email is required'),
    password: yup
      .string().label('Password')
  })


//WebBrowser.maybeCompleteAuthSession();

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
        .catch(err => console.log(error, err));
    } 

    useEffect(() => {
        if ((responseGoogle?.type === 'success') && (googleClicked === true)){
            setGoogleClicked(false);
            const {authentication: { accessToken } } = responseGoogle;
            //getGoogleData(accessToken);
            makeGoogleLogin(accessToken);
            

        } else {setLoading(false);}

    }, [responseGoogle]);

    //Facebook login
    const [fbError, setfbError] = useState(false);
    const [fbClicked, setfbClicked] = useState(false);

    const [requestFb, responseFb, promptAsyncFb] = Facebook.useAuthRequest({
        clientId: '901148574169051',
        scopes: ['public_profile', 'user_likes'],
        responseType: ResponseType.Code,
      });
    
    useEffect(() =>{
        if ((responseFb?.type === 'success') && (fbClicked === true)){
            setfbClicked(false);
            console.log("successfulley logged in with fb!");
            const {code} = responseFb.params;
            //const {url} = responseFb.params;
            console.log('code', code);
            console.log('responseFB', responseFb);
            setLoading(false);
            
            axios.get('https://graph.facebook.com/v12.0/oauth/access_token?client_id=901148574169051&redirect_uri=https://auth.expo.io/@anja-roed/olivia&client_secret=2d91e92e61689798cfeb3efaa2280932&code='+code)
            //axios.get('https://graph.facebook.com/v12.0/oauth/access_token?', {params: {
            //        client_id: '901148574169051',
            //        redirect_uri:  'https://auth.expo.io/@anja-roed/olivia', //'fb901148574169051://authorize', <- needs to be changed to this once app is in production
            //        client_secret: '2d91e92e61689798cfeb3efaa2280932',
            //        code: code
            //}})
            .then(reps => console.log(resp))
            .catch(err => console.log('err', err))

            //fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + token)
            //.then((response) => response.json())            
            // more here: https://developers.facebook.com/docs/facebook-login/manually-build-a-login-flow/#checktoken
        }
    }, [responseFb]);


    /*const [GoogleLogin, setGoogleLogin] = useState("texxt");


      const [requestFb, responseFb, promptAsyncFb] = Facebook.useAuthRequest({
        expoClientId: '901148574169051',
        responseType: ResponseType.Code,
      });
      
    
    useEffect(() => {
        if (response?.type === 'success'){
            console.log("success logging in with google! Continue on?");
            const {authentication } = response;
        }

    }, [response]);

    useEffect(() =>{
        if (responseFb?.type === 'success'){
            console.log("successfulley logged in with fb!");
            const {code} = responseFb.params;            
        }
    }, [responseFb]);
    */
    
    
    

    /*
    useEffect(() => {
        if (loginState.message.passed){
            if (userData.firstTime) {
                navigation.reset('Welcome_Post_Signup');
            } else {
                navigation.reset('Home', {
                    name: userData.Name,
                    id: userData.ID,
                    firstTime: userData.firstTime,
                });
            }
        }
    });*/

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
                        <ForgotPassword>
                            <ForgotPasswordText>Forgot Password?</ForgotPasswordText>
                        </ForgotPassword>
                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>Login</ButtonText>
                        </StyledButton>
                        {networkError.error && 
                            <ErrorMessage>
                                <ErrorText>No network connection. Please try again later.</ErrorText>
                            </ErrorMessage>
                        }
                        { loginState.message.error &&
                            <ErrorMessage>
                                <ErrorText>{loginState.message.errorMessage}</ErrorText>
                            </ErrorMessage> 
                        }
                        {googleError && 
                            <ErrorMessage>
                                <ErrorText>Error signing in with google.</ErrorText>
                            </ErrorMessage>
                        }

                        <Or>Or</Or>
                        <IconContainer>
                            <EachIconContainer onPress={async()=>{
                                setLoading(true);
                                setGoogleClicked(true);
                                promptAsyncGoogle();
                            }}>
                                <IconLogo source={require('../../../assets/images/google.png')} />
                            </EachIconContainer>
                            <EachIconContainer onPress={() => {
                                console.log("trying to log in with fb");
                                setLoading(true);
                                setfbClicked(true);
                                promptAsyncFb();
                                console.log("success with fb?");}} >
                                <IconLogo source={require('../../../assets/images/facebook.png')} />
                            </EachIconContainer>
                            <EachIconContainer onPress={handleSubmit}>
                                <IconLogo  source={require('../../../assets/images/apple.png')} />
                            </EachIconContainer>
                        </IconContainer>
                        <ExtraView>
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
