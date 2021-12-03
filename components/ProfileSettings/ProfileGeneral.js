import styled from 'styled-components';

export const Colors = {
  white: "#ffffff",
  purple: "#694398",
  disabledPurple:"#aa91c9",
  black: "#000000",
  gray: "#d3d3d3",
  darkgray: "#979797",
  red: "#FF0000",
  lightpurple: "#C7A3D2"
};

const { lightpurple, darkgray, purple, white } = Colors;

export const PageTitle = styled.Text`
  font-weight: bold;
  font-size: 14px
`;

export const PageTitleFormat = styled.View`
  border-bottom-width: 2px;
  border-bottom-color: ${lightpurple}; 
  width: 45%;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 15px; 
  padding-top: 50px;
`;

export const InlineSeveralItems = styled.View`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
`

export const SectionPurpleBottomLine = styled(InlineSeveralItems)`  
  border-bottom-width: 1px;            
  border-bottom-color: ${lightpurple};
  margin-bottom: 20px;
`;
