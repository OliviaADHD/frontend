import styled from 'styled-components';
import {Colors} from "../../general/style";
import { Icon } from 'react-native-elements';

export const InnerContainerRemake = styled.View`
  flex: 1;
  width: 100%;
  height: 80%;
  align-items: center;
  justifyContent: center;
`;

export const HeaderView = styled.View`
  height: 20%;
  width: 100%;
  backgroundColor: ${Colors.gray};
`;

export const ContentView = styled.View`
  height: 80%;
  width: 100%;
  backgroundColor: ${Colors.white};
  borderRadius: 30px;
  borderBottomLeftRadius: 0px;
  borderBottomRightRadius: 0px;
`;

export const CloseView = styled.View`
    width:11%;
    flexDirection: row;
    alignSelf: flex-end;
`;

export const StyledIcon = styled(Icon)`
`;

export const EventView = styled.View`
  borderBottomColor: #F5FCFF;
  backgroundColor: #FFFFFF;
  borderBottomWidth: 1px;
  width:100%;
  height:10%;
  marginTop:2%;
  flexDirection: row;
  alignItems: center;
`;


export const InputView = styled.TextInput`
    height:100%;
    marginLeft:5%;
    borderBottomColor: #FFFFFF;
    width:65%;
`;

export const InputViewTitle = styled.TextInput`
    height:100%;
    marginLeft:4%;
    fontSize: 20px;
    borderBottomColor: #FFFFFF;
    width:65%;
`;