import styled from 'styled-components';
import {Colors} from '../general/style';


export const InnerContainerRemake = styled.View`
  flex: 1;
  width: 100%;
  height: 60%;
  align-items: center;
`;

export const StyledBoldTitle = styled.Text`
  color: ${Colors.black};
  font-size: 18px;
  max-width: 80%;
  text-align: justify;
  margin-bottom: 0%;
  fontWeight: bold;
`;

export const GrayText = styled.Text`
  color: ${Colors.gray};
  font-size: 16px;
  max-width: 80%;
  text-align: justify;
  margin-bottom: 0%;
`;

export const BlackText = styled.Text`
  color: ${Colors.black};
  font-size: 16px;
  max-width: 80%;
  text-align: justify;
  margin-bottom: 0%;
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

export const SolidDot = styled.View`
  background-color: ${Colors.purple};
  height: 8px;
  border-radius: 40px;
  width: 8px;
  margin-horizontal: 8%;
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

export const SmallSolidDot = styled.View`
  background-color: ${Colors.black};
  height: 4px;
  border-radius: 40px;
  width: 4px;
  margin-horizontal: 8%;
  marginTop: 4%;
`;