import React, {useEffect} from 'react';
import {StatusBar} from "expo-status-bar";
import { useDispatch } from "react-redux";
import {MediumExtraText, StyledFormArea, StyledButton, ButtonText} from '../../css/LoginSignup/messageReset';

import {StyledContainer, InnerContainer} from '../../css/general/style';
import { resetPass } from '../../redux/actions/user/reset'


const MessageResetPassword = ({navigation, route}) => {
  const dispatch = useDispatch();
  
    useEffect(() => {
        dispatch(resetPass(route.params.email))
    })
    return (
        <StyledContainer>
            <StatusBar style="dark"/>

            <InnerContainer>

                <MediumExtraText>
                    To reset your password, please check your emails and go back to the Login page.
                </MediumExtraText>

                <StyledFormArea>
                    <StyledButton onPress= {() => navigation.navigate("Login")}>
                        <ButtonText>Back to Login page</ButtonText>
                    </StyledButton>
                </StyledFormArea>

            </InnerContainer>

        </StyledContainer>

    )
}

export default MessageResetPassword;
