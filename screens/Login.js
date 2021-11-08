import React, {useState, useEffect} from "react";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import {Ionicons} from '@expo/vector-icons';
import { Alert, View } from "react-native";
import RootStack from "../navigators/RootStack";
import* as AuthSession from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import * as Facebook from 'expo-auth-session/providers/facebook';
import { ResponseType } from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import { connect } from "react-redux";
import {signIn} from '../../src/actions/user/user'
import {
  StyledContainer,
  InnerContainer,
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
} from './../components/styles';

import * as yup from 'yup'

const signInValidationSchema = yup.object().shape({
    email: yup
      .string().label('Email')
      .email("Please enter valid email")
      .required('Email is required'),
    password: yup
      .string().label('Password')
  })


WebBrowser.maybeCompleteAuthSession();

const Login = ({navigation}) => {
    const [hidePassword, setHidePassword] = useState(true);
    const [GoogleLogin, setGoogleLogin] = useState("texxt");
    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: '51546200734-nm24i67drlpn5dkcnaj4ckta6k2cnfff.apps.googleusercontent.com',
        webClientId: '51546200734-qv54r4ur316rk4ll8lb37esgstngnr4i.apps.googleusercontent.com',
        ClientSecret: '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',
      });

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
    
    return(
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <PageLogo source={require('./../assets/images/logo.png')} />
                <Formik
                    initialValues={{email: '', password: ''}}
                    validationSchema={signInValidationSchema}
                    onSubmit={(values) => {
                        console.log(values['email']);
                        if (values['email']===""){console.log('empty')}
                        console.log(values);
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
                    <Or>Or</Or>
                    <IconContainer>
                        <EachIconContainer onPress={async()=>{
                            console.log("Trying to log in with google");
                            promptAsync();
                            console.log("success?")

                        }}>
                            <IconLogo source={require('./../assets/images/google.png')} />
                        </EachIconContainer>
                        <EachIconContainer onPress={() => {
                            console.log("trying to log in with fb");
                            promptAsyncFb();
                            console.log("success with fb?");}} >
                            <IconLogo source={require('./../assets/images/facebook.png')} />
                        </EachIconContainer>
                        <EachIconContainer onPress={handleSubmit}>
                            <IconLogo  source={require('./../assets/images/apple.png')} />
                        </EachIconContainer>
                    </IconContainer>
                    <ExtraView>
                        <ExtraText>Would You Like To Join Us? {GoogleLogin}</ExtraText>
                        <TextLink onPress = {() => navigation.navigate("Signup")}>
                            <TextLinkContent>Signup</TextLinkContent>
                        </TextLink>
                    </ExtraView>
                </StyledFormArea>)}
                </Formik>
            </InnerContainer>
        </StyledContainer>   
    );
};



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

const mapStateToProps = state => {
    const { message } = state.user;
    //console.log('login mapStateToProps ... state:' + JSON.stringify(state));
    //console.log('login mapStateToProps ... props:' + JSON.stringify({ message }));
    return { message };
};


const mapDispatchToProps = {
    onSignin :  signIn,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Login);