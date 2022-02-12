import styled from 'styled-components';
import {Colors} from '../general/style';

export const BlackText = styled.Text`
  color: ${Colors.black};
  font-size: 16px;
  max-width: 80%;
  text-align: justify;
  height: 100%;
  margin-bottom: 0%;
  marginLeft: 2%;
  width: 80%;
`;

export const TaskView = styled.View`
  width: 100%;
  height: 10%;
  backgroundColor: ${Colors.gray};
  flexDirection: row;
  borderRadius: 5px;
  marginLeft: 4%;
  marginBottom: 2%;
  alignItems: center;
  flex: 1;
  justifyContent: space-between;
`;

export const TasksScrollableView = styled.View`
  width: 95%;
  flex: 1;
  alignItems: center;
`;


