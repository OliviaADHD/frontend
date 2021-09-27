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
    width: 117px;
    height: 108px;
    margin-bottom: 55.5px;
    margin-top: 30px;
`;

export const StyledFormArea = styled.View`
    width: 90%;
`

export const StyledTextInput = styled.TextInput`
    background-color: ${white};
    margin: 15.5px 20px 15.5px 20px;
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
    padding-vertical: 10px;
    padding-horizontal: 14px;
    background-color: ${purple};
    justify-content: center;
    border-radius: 5px;
    height: 44px;
    margin: 47px 37px 37px 38px;
`;

export const ButtonText = styled.Text`
    color: ${white};
    font-size: 20px;
    text-align: center;
    height: 24px;
    width: 272px;
`;

export const ForgotPassword = styled.TouchableOpacity`
    background-color: ${white};
`;

export const ForgotPasswordText = styled.Text`
    font-size: 15px;
    height: 18px;
    width: 127px;
    margin-top: 2.5px;
    margin-left: 20px;
`;

export const Or = styled.Text`
    font-size: 15px;
    height: 18px;
    width: 18px;
    text-align: center;
    margin-left: 178px;
    margin-bottom: 29px;
`;

export const IconContainer = styled.View`
    flex: 1;
    width: 173px;
    height: 44px;
    justify-content: space-between;
    flex-direction: row;
    margin-left: 101px;
    
`;

export const EachIconContainer = styled.TouchableOpacity`
`;

export const IconLogo = styled.Image`
    height: 44px;
    width: 44px;
`;

export const ExtraView = styled.View`
    justify-content: center;
    align-items: center;
    margin-top: 96px;
`;

export const ExtraText = styled.Text`
    justify-content: center;
    align-items: center;
    padding: 8px;
`;

export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    borderBottomWidth: 1px;
`;

export const TextLinkContent = styled.Text`
    font-size: 17px;  
`;



