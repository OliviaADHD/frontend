import styled from 'styled-components';
import {Colors} from '../general/style';

export const BlackText = styled.Text`
  color: ${Colors.black};
  font-size: 16px;
  max-width: 80%;
  text-align: justify;
  margin-bottom: 0%;
  marginLeft: 2%;
  width: 80%;
`;

export const TaskView = styled.View`
  width: 100%;
  height: 15%;
  backgroundColor: ${Colors.gray};
  flexDirection: row;
  borderRadius: 5px;
  flex: 1;
  marginLeft: 4%;
  marginBottom: 2%;
  alignItems: center;
  justifyContent: space-between;
`;

export const TasksScrollableView = styled.View`
  height: 100%;
  flex: 1;
  width: 95%;
  alignItems: center;
  paddingBottom: 0%;
  paddingTop: 0%;
`;


