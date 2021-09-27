import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import {Ionicons} from '@expo/vector-icons';
import { View } from "react-native";
import RootStack from "../navigators/RootStack";
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
}from './../components/styles';

const Login = ({navigation}) => {
    
    const [hidePassword, setHidePassword] = useState(true);
    return(
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <PageLogo source={require('./../assets/images/logo.png')} />
                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={(values) => {
                        console.log(values);
                        navigation.navigate("Welcome");
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
                        <ExtraText>Would You Like To Join Us?</ExtraText>
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

export default Login;