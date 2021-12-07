import styled from 'styled-components';
import Constants from 'expo-constants';
import {Colors} from '../general/style';

const StatusBarHeight = Constants.statusBarHeight;
const { lightpurple, white } = Colors;

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

export const TopPaddingStyledFormArea = styled(StyledFormArea)`
padding-top: 15%;
`

export const SectionPurpleBottomLine = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${lightpurple};
`

export const FirstSectionItem = styled(SectionPurpleBottomLine)`
border-top-width: 1px;
border-top-color: ${lightpurple};
`

export const ProfileListTouch = styled.TouchableOpacity`
width: 100%;
padding-left: 10%;
`;

export const ProfileListText = styled.Text`
width: 100%;
border: 2px;
border-color: white;
padding: 8% 0%;
`;

export const PageTitle = styled.Text`
  font-weight: bold;
  font-size: 14px;
`;

export const PageTitleFormat = styled.View`
  border-bottom-width: 2px;
  border-bottom-color: ${lightpurple}; 
  width: 45%;
  align-items: center;
  margin-bottom: 10%;
  padding-bottom: 5%; 
  padding-top: 16%;
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
  margin-bottom: 7%;
`;
