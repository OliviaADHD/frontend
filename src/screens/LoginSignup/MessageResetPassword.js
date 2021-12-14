import React, {useState,useEffect} from 'react';
import {StatusBar} from "expo-status-bar";
import { ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import {MediumExtraText, StyledFormArea, StyledButton, ButtonText} from '../../css/LoginSignup/messageReset';
import {StyledContainer, InnerContainer, Loading} from '../../css/general/style';
import { resetPass } from '../../redux/actions/user/reset';
import {verifyEmail} from '../../redux/actions/user/user';

const MessageResetPassword = ({navigation, route}) => {
  const dispatch = useDispatch();
  const [emailError, setEmailError] = useState(false);
  const [prepared, setPrepared] = useState(false);
  const emailValidityState = useSelector(state => state.validateEmailInfo);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    validateAndSubmit();
  }, []);

  const validateAndSubmit = () => {
    dispatch(verifyEmail(route.params.email))
    .then(resp => {
      setLoading(false);
      if (emailValidityState.message.passed === true) {
        setPrepared(true);
        dispatch(resetPass(route.params.email));  
      } else {      
        setPrepared(true);  
        setEmailError(true);
      }
    })  
  };

    return (
        <StyledContainer>
            <StatusBar style="dark"/>           
                { emailError && prepared &&
                    <InnerContainer>
                        <MediumExtraText>
                            This email wasn't found in our system. Please check your email or register.
                        </MediumExtraText>
                        <StyledFormArea>
                            <StyledButton onPress= {() => navigation.replace("Signup")}>
                                <ButtonText>Signup</ButtonText>
                            </StyledButton>
                        </StyledFormArea>
                    </InnerContainer>
                }

                { !emailError && prepared &&
                    <InnerContainer>
                        <MediumExtraText>
                            To reset your password, please check your email and go back to the Login page.
                        </MediumExtraText>
                        <StyledFormArea>
                            <StyledButton onPress= {() => navigation.navigate("Login")}>
                                <ButtonText>Back to Login page</ButtonText>
                            </StyledButton>
                        </StyledFormArea>
                    </InnerContainer>
                }
                {loading &&
                  <Loading>
                      <ActivityIndicator size="large" color="#694398"/>
                  </Loading>
                }
        </StyledContainer>

    )
}

export default MessageResetPassword;
