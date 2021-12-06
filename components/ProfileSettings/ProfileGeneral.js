import styled from 'styled-components';
import Constants from 'expo-constants';
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

const { lightpurple, darkgray, purple, white } = Colors;

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

export const StyledFormArea = styled.View`
    width: 90%;
    height: 75%;
`;

export const SectionPurpleBottomLine = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${lightpurple};
`

export const PageTitle = styled.Text`
  font-weight: bold;
  font-size: 14px
`;

export const PageTitleFormat = styled.View`
  border-bottom-width: 2px;
  border-bottom-color: ${lightpurple}; 
  width: 45%;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px; 
  padding-top: 50px;
`;

export const InlineSeveralItems = styled.View`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
`

export const SubSectionPurpleBottomLine = styled(InlineSeveralItems)`  
  border-bottom-width: 1px;            
  border-bottom-color: ${lightpurple};
  margin-bottom: 20px;
`;
