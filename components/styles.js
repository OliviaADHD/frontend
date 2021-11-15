import styled from 'styled-components';
import Constants from 'expo-constants';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

const StatusBarHeight = Constants.statusBarHeight;

export const Colors = {
    white: "#ffffff",
    purple: "#694398",
    disabledPurple:"#aa91c9",
    black: "#000000",
    gray: "#d3d3d3",
    red: "#FF0000",
    lightpurple: "#C7A3D2"
};

const { white, purple, black, gray,lightpurple,  red,disabledPurple} = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  margin-top: ${StatusBarHeight}px;
  background-color: ${white};
`;


export const AbsoluteContainer = styled.View`
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const TextBlockBorders = styled(InnerContainer)`
padding-top: 20%;
padding-right: 5%;
padding-bottom: 10%;
padding-left: 5%;
`;

export const PageLogo = styled.Image`
    width: 100%;
    height: 20%;
    margin-bottom: 10%;
    margin-top: 5%;
    resizeMode: contain;
`;

export const PageLogoWelcome = styled.Image`
    width: 157px;
    height: 147px;
    margin-top: 25%;
    margin-left: 20px;
`;

export const LoadScreenBottomImage = styled.Image`
    width: 100%;
    margin-top: 10%;
`;

export const CenteredImage= styled.Image`
    margin-top: 35%;
    align-items: center;
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

export const StyledInputLabel = styled.Text`
  color: ${black};
  font-size: 13px;
  text-align: left;
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

export const DisabledButton = styled.TouchableOpacity`
    padding-vertical: 10px;
    padding-horizontal: 14px;
    background-color: ${disabledPurple};
    justify-content: center;
    border-radius: 5px;
    height: 44px;
    margin: 47px 37px 37px 38px;
`;

export const ButtonText = styled.Text`
    color: ${white};
    font-size: 20px;
    text-align: center;
    font-weight: 500;
    font-size: 20px;
    top: 10%;
`;
export const ErrorMessage = styled.TouchableOpacity`
    background-color: ${white};
`;
export const ErrorText = styled.Text`
    color: ${red};
    font-size: 15px;
    text-align:left;
    margin: 0 0 0 20px;
`;

export const PrivacyArea = styled.TouchableOpacity`
    background-color: ${white};
    flexDirection: row;

`;
export const PrivacyText = styled.Text`
    color: ${black};
    font-size: 15px;
    text-align:center;
    alignItems: center;
    justifyContent: center;
`;


/*
export const ButtonText = styled.Text`
    color: ${white};
    font-size: 20px;
    text-align: center;
    height: 100%;
    width: 100%;
`;
*/

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

export const MediumExtraText = styled.Text`
  text-align: center;
  font-size: 25px;
  padding-top: 10%;
  padding-bottom: 20%;
  margin: 0 10% 0 10%;
`;

export const BlockText = styled.Text`
font-size: 15px;
line-height: 25px;
`
;

export const TextLink = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  borderBottomWidth: 1px;
`;

export const TextLinkContent = styled.Text`
  font-size: 17px;
`;

export const StyledDotPagination = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 10%;
  margin-top: 12%;
`;

export const StyledDot = styled.View`
  border: ${(props) => (props.filled ? 'none' : '1px solid purple')};
  background-color: ${(props) => (props.filled ? purple : white)};
  height: 14px;
  border-radius: 50px;
  width: 14px;
  margin-horizontal: 8%;
`;

export const StyledTitle = styled.Text`
  color: ${purple};
  font-size: 20px;
  max-width: 80%;
  text-align: justify;
  margin-bottom: 7%;
`;

export const CheckboxContainer = styled.View`
  flex-direction: column;
  margin-left: 10%;
  height: 45%;
`;

export const StyledCheckbox = styled(BouncyCheckbox)`
  margin-vertical: 2%;
  max-width: 90%;
  padding-right: 5%;
`;


export const ButtonGroup = styled.View`
    /* position: 'absolute'; */
    width: 246px;
    height: 30px;
    left: 100%;
    top: 22%;
    background-color: ${lightpurple};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    /* justify-content: center;
    align-items: center; */
`;

export const ButtonGroupContainer = styled.View`
    width: 100%;
    height: 80px;
`;


export const ButtonGroupChild = styled.View`
    width: 123px;
    height: 30px;
    background-color: ${white};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
`;

export const StyledCalendarList = styled.View`
    width: 100%;
    height: 700px;
    left: -1px;
    top: 53px;
    
`;

export const ButtonContainers = styled.View`
    height: 44px;
    display: flex;
    flex-direction: row;
    top: 145px;
    /* justify-content: space-between;
    align-items: center; */
`;

export const InputMoodBtn = styled.View`
    width: 142px;
    height: 44px;
    border-radius: 10px;
    background-color: ${purple};
    text-align: center;
    right: 15px;
`;

export const EditPeriodBtn = styled.View`
    width: 142px;
    height: 44px;
    border-radius: 10px;
    background-color: ${purple};
    text-align: center;
    left: 15px;
`;

