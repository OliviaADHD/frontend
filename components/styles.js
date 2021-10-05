import styled from 'styled-components';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;


export const Colors = {
    white: "#ffffff",
    purple: "#694398",
    black: "#000000",
    gray: "#d3d3d3"
};

const { white, purple, black, gray} = Colors;

export const StyledContainer = styled.View`
    flex: 1;
    margin-top: ${StatusBarHeight}px;
    background-color: ${white};
`;

export const InnerContainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

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
`

export const StyledTextInput = styled.TextInput`
    background-color: ${white};
    margin: 3% 4% 3% 4%;
    height: 40px;
    font-size: 17px;
    textAlign: left;
    borderBottomWidth: 1px;
    
`

export const StyledInputLabel = styled.Text`
    color: ${black};
    font-size: 13px;
    text-align: left;
`;



export const RightIcon = styled.TouchableOpacity`
    left: 322px;
    top: 28px;
    bottom: 24px;
    position: absolute;
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
    height: 100%;
    width: 100%;
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

export const EachIconContainer = styled.TouchableOpacity`
    height: 100%;
    width: 30%;
`;

export const IconLogo = styled.Image`
    height: 100%;
    resizeMode:contain;
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



