import styled from 'styled-components';
import {Colors} from "../general/style";


export const InnerContainerRemake = styled.View`
  flex: 1;
  width: 100%;
  height: 60%;
  align-items: center;
`;


export const TasksScheduleTouch = styled.TouchableOpacity`
  height: 60%;
  alignContent: center;
  alignItems: center;
  justifyContent: center;
  margin: 3%;
  marginLeft: 2.5%;
  marginRight: 2.5%;
`;

export const TasksScheduleView = styled.View`
  height: 12%;
  flexDirection: row;
  alignContent: center;
`;


export const NewTaskOrEventButton = styled.TouchableOpacity`
  width: 10%;
  height: 10%;
  alignContent: center;
  alignSelf: flex-end;
  marginRight: 10%;
  borderRadius: 20px;
  padding: 1%;
  justifyContent: center;
  marginTop: -15%;
  backgroundColor: ${Colors.purple};
`;

export const WhiteText = styled.Text`
  color: ${Colors.white};
`;

export const ContentView = styled.View`
  height: 70%;
  width: 100%;
  backgroundColor: ${Colors.white};
  borderRadius: 12px;
  borderBottomLeftRadius: 0px;
  borderBottomRightRadius: 0px;
`;

export const TasksView = styled.View`
  height: 84%;
  backgroundColor: ${Colors.white};
  alignItems: center;
`;

export const ScheduleView = styled.View`
  height: 84%;
`;

export const MonthText = styled.Text`
  fontSize: 16px;
  width: 100%;
  textAlign: center;
  fontWeight: bold;
  backgroundColor: ${Colors.white};
`;

export const BlackText = styled.Text`
  color: ${Colors.black};
  font-size: 16px;
  max-width: 80%;
  text-align: justify;
  margin-bottom: 0%;
`;