import styled from 'styled-components';
import {Colors} from '../general/style';

const { white, purple, red} = Colors;

export const PageLogo = styled.Image`
    width: 100%;
    height: 20%;
    margin-bottom: 10%;
    margin-top: 5%;
    resizeMode: contain;
`;

export const StyledFormArea = styled.View`
    width: 90%;
    height: 75%;
`;

export const StyledTextInput = styled.TextInput`
    background-color: ${white};
    margin: 3% 4% 3% 4%;
    height: 40px;
    font-size: 17px;
    textAlign: left;
    borderBottomWidth: 1px; 
`;

export const RightIcon = styled.TouchableOpacity`
    left: 90%;
    top: -50%;
    right: 20%;
    z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
    padding-vertical: 1%;
    padding-horizontal: 1%;
    background-color: ${purple};
    justify-content: center;
    border-radius: 5px;
    height: 8%;
    margin: 0% 11% 0% 11%;
`;

export const ButtonText = styled.Text`
    color: ${white};
    font-size: 20px;
    text-align: center;
    font-weight: 500;
    font-size: 20px;
    top: 10%;
`;


export const ForgotPassword = styled.TouchableOpacity`
    background-color: ${white};
    height: 15%;
`;

export const ForgotPasswordText = styled.Text`
    font-size: 15px;
    height: 100%;
    width: 127px;
    margin-top: 0.5%;
    margin-left: 4%;
    margin-bottom: 0.5%;
`;

export const Or = styled.Text`
    font-size: 15px;
    height: 5%;
    width: 18px;
    text-align: center;
    margin-left: 48%;
    margin-top: 4%;
`;

export const IconContainer = styled.View`
    width: 50%;
    height: 10%;
    justify-content: space-between;
    flex-direction: row;
    margin-left: 22%;  
    margin-bottom: 5%; 
    margin-top: 2%; 
`;

export const IconLogo = styled.Image`
    height: 100%;
    resizeMode:contain;
`;

export const EachIconContainer = styled.TouchableOpacity`
    height: 100%;
    width: 30%;
`;


export const ExtraView = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 1%;
    margin-bottom: 3%;
    height: 18%;
`;

export const ExtraText = styled.Text`
    justify-content: center;
    align-items: center;
    padding: 3%;
`;

export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  borderBottomWidth: 1px;
`;

export const TextLinkContent = styled.Text`
  font-size: 17px;
`;

export const ErrorText = styled.Text`
    color: ${red};
    font-size: 15px;
    text-align:left;
    margin: 0 0 0 20px;
`;

export const ErrorMessage = styled.TouchableOpacity`
    background-color: ${white};
`;
