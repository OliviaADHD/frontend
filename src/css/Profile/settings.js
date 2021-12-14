import styled from 'styled-components';
import Constants from 'expo-constants';
import {Colors} from '../general/style';

const { lightpurple, white } = Colors;

export const StyledFormArea = styled.View`
    width: 90%;
    height: 75%;
`;

export const TopPaddingStyledFormArea = styled(StyledFormArea)`
    padding-top: 15%;
`

export const ProfileListTouch = styled.TouchableOpacity`
  
`;

export const ProfileListText = styled.Text`
  width: 100%;
  border-color: white;
  padding: 8% 5%;
`;

export const SectionPurpleBottomLine = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${lightpurple};
`