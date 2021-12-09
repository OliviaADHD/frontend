import styled from 'styled-components';
import Constants from 'expo-constants';
import {Colors} from '../general/style';

const { lightpurple, white } = Colors;

export const StyledFormArea = styled.View`
    width: 90%;
    height: 75%;  
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
  padding-top: 5%;
`;

export const InlineSeveralItems = styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`

export const SectionPurpleBottomLine = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${lightpurple};
  margin-bottom: 7%;
  padding-bottom: 10px;
`

export const ProfileListTouch = styled.TouchableOpacity`
`;

export const ProfileListText = styled.Text`
    width: 100%;
    border-color: white;
    padding: 3% 5%;    
`;




export const SwitchSection = styled(InlineSeveralItems)`
    border-bottom-width: 1px;            
    border-bottom-color: ${lightpurple};
    margin-bottom: 7%;
    padding-bottom: 10px;
`;

export const SwitchSectionNoMargin = styled(InlineSeveralItems)`
    border-bottom-width: 1px;            
    border-bottom-color: ${lightpurple};
    padding-bottom: 10px;
`;

export const SwitchSectionText =  styled.Text`
    padding-left: 22px;
    font-size: 15px;
`;