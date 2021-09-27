import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import { Formik } from "formik";
import {Ionicons} from '@expo/vector-icons';
import { View } from "react-native";
import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    StyledFormArea,
    StyledTextInput,
    RightIcon,
    StyledButton,
    ButtonText,
    Or,
    IconContainer,
    IconLogo,
    EachIconContainer,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent,
}from './../components/styles';

const Signup = (navigation) => {
    const [hidePassword, setHidePassword] = useState(true);
    
    return(
        <StyledContainer>
            <StatusBar style="dark"/>
            <InnerContainer>
                <PageLogo source={require('./../assets/images/logo.png')} />
                <Formik
                    initialValues={{fullName: '', email: '', password: ''}}
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

                
                    <StyledButton>
                        <ButtonText>Signup</ButtonText>
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

export default Signup;