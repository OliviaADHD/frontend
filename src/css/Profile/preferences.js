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
  padding-top: 16%;
`;

export const InlineSeveralItems = styled.View`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`

export const LanguageSection = styled(InlineSeveralItems)`
    border-bottom-width: 1px;            
    border-bottom-color: ${lightpurple};
    margin-bottom: 7%;
    padding-bottom: 20px;
    padding-top: 10px;
`;

export const LanguageSectionText =  styled.Text`
    padding-left: 22px;
    font-size: 15px;
`;

export const DarkModeSection = styled(InlineSeveralItems)`
    border-bottom-width: 1px;            
    border-bottom-color: ${lightpurple};
    margin-bottom: 7%;
    padding-bottom: 10px;
`;

export const DarkModeSectionText =  styled.Text`
    padding-left: 22px;
    font-size: 15px;
`;