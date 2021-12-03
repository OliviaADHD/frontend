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
    darkgray: "#979797",
    red: "#FF0000",
    lightpurple: "#C7A3D2"
};

const { white, purple, disabledPurple, black, gray, darkgray, red, lightpurple} = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  margin-top: ${StatusBarHeight}px;
  background-color: ${white};
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  flex-direction: column;
`;

export const TextBlockBorders = styled.View`
  padding-right: 5%;
  padding-left: 5%;
`;

export const TextView = styled.View`
  margin-top:5%;
`;

export const StyledCheckbox = styled(BouncyCheckbox)`
  max-width: 90%;
  padding-right: 5%;
`;

export const StyledTitle = styled.Text`
  color: ${purple};
  font-size: 20px;
  max-width: 80%;
  text-align: justify;
  margin-bottom: 7%;
`;

export const CheckBoxView = styled.View`
  margin-top: 5%;
  margin-bottom: 5%;
  height:10%;
`;



export const BlockText = styled.Text`
  font-size: 15px;
  line-height: 25px;
  text-align:center;
`;

export const CheckboxContainer = styled.View`
  padding-right: 5%;
  padding-left: 5%;
`;