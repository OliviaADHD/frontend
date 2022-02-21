import styled from 'styled-components';
import {Colors} from "../../general/style";
import { Icon } from 'react-native-elements';

export const InnerContainerRemake = styled.View`
  flex: 1;
  width: 100%;
  height: 60%;
  align-items: center;
`;

export const HeaderView = styled.View`
  height: 60%;
  width: 100%;
  backgroundColor: ${Colors.gray};
`;

export const ContentView = styled.View`
  height: 70%;
  width: 100%;
  backgroundColor: ${Colors.white};
  borderRadius: 30px;
  borderBottomLeftRadius: 0px;
  borderBottomRightRadius: 0px;
`;

export const CloseView = styled.View`
    width:100%;
    display: flex;
`;

export const StyledIcon = styled(Icon)`
    justifyContent:flex-end;
    alignSelf: flex-end;
    marginRight:2%;
`;

export const TaskView = styled.View`
  borderBottomColor: #F5FCFF;
  backgroundColor: #FFFFFF;
  borderRadius:30px;
  borderBottomWidth: 1px;
  width:100%;
  height:45px;
  marginTop:40px;
  flexDirection: row;
  alignItems:center;
  backgroundColor: yellow;
`;