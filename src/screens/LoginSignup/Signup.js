import React, {useState, useEffect} from "react";
import { StatusBar } from "expo-status-bar";
import { Formik } from 'formik'
import { useDispatch, useSelector } from "react-redux";
import {Ionicons} from '@expo/vector-icons';
import { View,CheckBox, StyleSheet, ActivityIndicator, Platform } from "react-native";
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
    ErrorPrivacyText,
}from '../../css/styles';
import {useAuthRequest, exchangeCodeAsync} from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';

import * as Google from 'expo-auth-session/providers/google';

import {newUser, newUserGoogle, verifyEmail, verifyLogin, beforeValidEmail, beforeValidLogin, beforeSignUP, newUserFacebook} from '../../redux/actions/user/signup'
import * as yup from 'yup'


WebBrowser.maybeCompleteAuthSession();
const useProxy = true;

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



const Signup = ({navigation, route}) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [loginError, setLoginError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [isSelected, setIsSelected] = useState(false);
    const [policyError, setPolicyError] = useState(false);
    const loginValidityState = useSelector(state => state.validateLoginInfo); // these are at the start simply Object {"message":{}}
    const emailValidityState = useSelector(state => state.validateEmailInfo);
    const networkError = useSelector(state => state.networkAvailability);
    const signUpState = useSelector(state => state.signUpInfo);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();

    //strategy: when clicking on 'google', it will change the 'responsegoogle'. One useEffect watches the responseGoogle, if it changes, it
    // checks whether it was a successful connection and adds email+name to userDataGoogle. Another effects whatches userDataGoogle, and launches
    // the registering part.
    const [googleClicked, setGoogleClicked] = useState(false);
    const [googleError, setGoogleError] = useState(false);
    const [requestGoogle, responseGoogle, promptAsyncGoogle] = Google.useAuthRequest({
        expoClientId: '51546200734-nm24i67drlpn5dkcnaj4ckta6k2cnfff.apps.googleusercontent.com',
        iosClientId: '51546200734-nm24i67drlpn5dkcnaj4ckta6k2cnfff.apps.googleusercontent.com',
        webClientId: '51546200734-qv54r4ur316rk4ll8lb37esgstngnr4i.apps.googleusercontent.com',
        ClientSecret: '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',
      });
    
    const setNewGoogleUser = async(token) => {
        dispatch(beforeSignUP())
        .then(() =>dispatch(newUserGoogle(token)))
        .then(resp => {
            if (resp === true){
                setLoading(false);
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Welcome_Post_Signup' }]});
            } else {
                setGoogleError(true);
                setLoading(false);
                setGoogleClicked(false);
            }
        })
    } 

    useEffect(() => {
        if ((responseGoogle?.type === 'success') && (googleClicked === true)){
            const {authentication: { accessToken } } = responseGoogle;
            setGoogleClicked(false);
            setNewGoogleUser(accessToken);
        } else {
            setLoading(false);
            setGoogleClicked(false);
        }

    }, [responseGoogle]);

    //Fb signup
    const [fbError, setfbError] = useState(false);
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

    
    const setNewFacebookUser = async(token) => {
        dispatch(beforeSignUP())
        .then(() =>dispatch(newUserFacebook(token)))
        .then(resp => {
            if (resp === true){
                setLoading(false);
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Welcome_Post_Signup' }]});
            } else {
                setfbError(true);
                setLoading(false);
                setfbClicked(false);
            }
        })
    } 

    useEffect(()=>{
        if ((responseFb?.type === 'success') && (fbClicked === true)){     
            const {code} = responseFb.params;
            const {codeVerifier} = requestFb;
            getFbToken(code, codeVerifier)
            .then(resp => {
                setNewFacebookUser(resp.accessToken);
            })
            .catch(err => {
                setfbError(true);
                setfbClicked(false);
                setLoading(false);
            })
        } else { 
            if (fbClicked === true) {
                setfbError(true);
                setfbClicked(false);
            } 
            setLoading(false);
        }
    }, [responseFb])

    
    /* 
    // commented out because it gave me (Anja) an error message....
    useEffect(() => {
        if(route.params === undefined){
            setIsSelected(false)
        }
        else{
            setIsSelected(route.params.policyChecked)
            setPolicyError(false)
        }
    })*/

    return(
            <StyledContainer>
                <StatusBar style="dark"/>
                <InnerContainer>
                    <PageLogo source={require('../../../assets/images/logo.png')} />
                    <Formik
                        validationSchema={signUpValidationSchema}
                        initialValues={{fullName: '', email: '', password: '',login:'', privacyPolicy: false}}
                        onSubmit={(values) => {
                            setLoading(true);
                            dispatch(beforeSignUP())
                            .then(resp => dispatch(beforeValidEmail()))
                            .then(resp => dispatch(beforeValidLogin()))
                            .then(resp => dispatch(verifyLogin(values.login)))
                            .then(resp => {
                                    if (resp === true){
                                        setLoginError(false);
                                        return dispatch(verifyEmail(values.email));
                                    } else {
                                        setLoading(false);
                                        setLoginError(true);
                                        return false;
                                    }
                                })
                            .then(resp => {
                                    if (resp === true){
                                        setEmailError(false);
                                        return dispatch(newUser(values));
                                    } else {
                                        setEmailError(true);
                                        setLoading(false);
                                        return false;
                                    }
                            })
                            .then(resp => {
                                setLoading(false);
                                if (resp === true){
                                    navigation.reset({
                                        index: 0,
                                        routes: [{ name: 'Welcome_Post_Signup' }]});
                                }
                            });
                            
                    }
                    }
                    >
                    {({handleChange, values, handleSubmit, errors, isValid, isSubmitting, touched, handleBlur})=> (
                    <StyledFormArea>
                        <MyTextInput 
                            placeholder="Full Name"
                            label='Full Name'
                            onChangeText={handleChange('fullName')}
                            style={(touched.fullName && errors.fullName)?{marginBottom: "1%"}:{}}
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
                        style={((touched.login && errors.login) || (loginError))?{marginBottom: "1%"}:{}}
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
                            style={((touched.email && errors.email) || (emailError))?{marginBottom: "1%"}:{}}
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
                            style={((touched.password && errors.password))?{marginBottom: "1%"}:{}}
                            setHidePassword={setHidePassword}
                        />
                        { touched.password && errors.password &&
                            <ErrorMessage>
                                <ErrorText>{errors.password}</ErrorText>
                            </ErrorMessage> 
                        }
                        <PrivacyArea onPress = {() => navigation.navigate('Privacy')} style={{alignItems: "center", marginBottom: "2%"}}>
                            <CheckBox
                                value={isSelected}
                                onValueChange={(value)=>setIsSelected(value)}
                                disabled={true}
                            />
                            { !policyError &&
                                <PrivacyText>I Agree With Terms Of Privacy Policy.</PrivacyText>
                            }
                            { policyError &&
                                <ErrorPrivacyText>I Agree With Terms Of Privacy Policy.</ErrorPrivacyText>
                            }                           
                        </PrivacyArea>


                            <StyledButton onPress={handleSubmit} testID='SubmitButton'
                                    style={(networkError.error || googleError || fbError)?{marginBottom: "0%"}:{marginBottom: "5%"}}>
                                <ButtonText>Signup</ButtonText>
                            </StyledButton>
                        
                        {networkError.error && 
                            <ErrorMessage>
                                <ErrorText>No network connection. Please try again later.</ErrorText>
                            </ErrorMessage>
                        }
                        {googleError && 
                            <ErrorMessage>
                                <ErrorText>Error signing up with google.</ErrorText>
                            </ErrorMessage>
                        }
                        {fbError && 
                            <ErrorMessage>
                                <ErrorText>Error signing up with facebook.</ErrorText>
                            </ErrorMessage>
                        }

                        <IconContainer style={{marginBottom: "0%", paddingBottom: "0%"}}>
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
                            <EachIconContainer>
                                <IconLogo onPress={handleSubmit} source={require('../../../assets/images/apple.png')} />
                            </EachIconContainer>
                        </IconContainer>
                        <ExtraView style={{paddingTop: "0%", paddingBottom: "0%", marginBottom: "0%",
                         marginTop: "0%", height: "14%"}}> 
                            <ExtraText style={{paddingTop: "0%", paddingBottom: "0%"}}>Already Have An Account?</ExtraText>
                            <TextLink onPress = {() => navigation.pop()} testID={"Textlink"}>
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

export const MyTextInput = ({isPassword, icon, hidePassword, setHidePassword, style, ...props}) => {
    return (
        <View>
            <StyledTextInput {...props} style={style}/>
            {isPassword && (
                <RightIcon onPress={() => setHidePassword(!hidePassword)}  style={[{height: "1%"}, (Object.keys(style).length === 0)?{top: "-75%"}:{top: "-65%"}]}>
                    <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye'} size={19}/>
                </RightIcon>
            )}
        </View>
    )
}



export default Signup;
