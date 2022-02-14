import styled from 'styled-components';
import {Colors} from '../general/style';

export const BlackText = styled.Text`
  color: ${Colors.black};
  font-size: 16px;
  max-width: 80%;
  text-align: justify;
  margin-bottom: 0%;
`;

export const UpcomingsScrollableView = styled.View`
  height: 100%;
  flex: 1;
  width: 100%;
  alignItems: center;
  paddingBottom: 0%;
  paddingTop: 0%;
`;

export const CalenderEventView = styled.View`
  height: 25%;
  flexDirection: row;
  paddingBottom: 1%;
`;

export const DetailsEventView = styled.View`
  marginRight: 5%;
  padding: 2%;
  width: 70%;
  flexDirection: row;
`;

export const StyledBoldTitle = styled.Text`
  color: ${Colors.black};
  font-size: 18px;
  max-width: 80%;
  text-align: justify;
  margin-bottom: 2%;
  margin-left: 1%;
  fontWeight: bold;
`;

export const DetailsEventView2 = styled.View`
  width: 10%;
  alignItems: center;
  alignContent: center;
  justifyContent: space-between;
`;

export const SmallSolidDot = styled.View`
  background-color: ${Colors.black};
  height: 4px;
  border-radius: 40px;
  width: 4px;
  margin-horizontal: 8%;
  marginTop: 4%;
`;

export const GrayText = styled.Text`
  color: ${Colors.darkgray};
  font-size: 16px;
  max-width: 80%;
  text-align: justify;
  margin-bottom: 0%;
`;

export const SolidDot = styled.View`
  background-color: ${Colors.purple};
  height: 8px;
  border-radius: 40px;
  width: 8px;
  margin-horizontal: 8%;
`;

export const StyledDot = styled.View`
  border: 1px;
  borderColor: ${Colors.purple};
  background-color: ${Colors.white};
  height: 14px;
  border-radius: 50px;
  width: 14px;
  margin-horizontal: 8%;
  justifyContent: center;
  alignItems: center;
`;


export const LongLine = styled.View`
  border: 1px;
  borderColor: ${Colors.purple};
  background-color: ${Colors.purple};
  height: 28%;
  border-radius: 50px;
  width: 2px;
  margin-horizontal: 8%;
  marginTop: 2%;
`;

export const CalendarTimingDetailView = styled.View`
  width: 20%;
  marginLeft: 3%;
  marginRight: 3%;
  alignItems: center;
`;
