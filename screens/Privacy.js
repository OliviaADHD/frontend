import React from "react";
import { View, Text, ScrollView, CheckBox } from "react-native";
// import { CheckBox } from 'react-native-elements';
import { Formik } from 'formik'
import { StatusBar } from "expo-status-bar";
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {
  StyledTitle,
  TextBlockBorders,
  BlockText,
  PrivacyText,
  InnerContainer,
  StyledContainer,
  StyledCheckbox,
  CheckboxContainer,
  white,
  purple,
  black,
  PrivacyArea,
  StyledFormArea,
  CenteredImage,
  BouncyCheck
}from './../components/styles';

export default function Privacy({navigation}) {
  const [ checkboxState, setCheckboxState ] = React.useState(false);
  return (
    <StyledContainer>   
    <StatusBar style="dark"/>
    <InnerContainer>
      <ScrollView >
        <View>
          
          <TextBlockBorders>
            <Text>
              <BlockText>
                
                <StyledTitle>H1 Privacy Policy{"\n"}{"\n"}</StyledTitle>

                <StyledTitle>Title 1{"\n"}{"\n"}</StyledTitle>

                The federal city of Bonn (German pronunciation: (About this soundlisten) Latin: Bonna) is a city on the banks of the Rhine in the German state of North Rhine-Westphalia, with a population of over 300,000. About 24 km (15 mi) south-southeast of Cologne, Bonn is in the southernmost part of the Rhine-Ruhr region, Germany's largest metropolitan area, with over 11 million inhabitants. It is famous as a university city, the birthplace of Beethoven, as well as the capital city of the Electorate of Cologne from 1597 to 1794 and West Germany from 1949 to 1990.{"\n"}{"\n"}

                Founded in the 1st century BC as a Roman settlement in the province Germania Inferior, Bonn is one of Germany's oldest cities. From 1597 to 1794, Bonn was the capital of the Electorate of Cologne, and residence of the Archbishops and Prince-electors of Cologne. From 1949 to 1990, Bonn was the capital of West Germany, and Germany's present constitution, the Basic Law, was declared in the city in 1949. The era when Bonn served as the capital of West Germany is referred to by historians as the Bonn Republic.[3] From 1990 to 1999, Bonn served as the seat of government – but no longer capital – of reunited Germany.{"\n"}{"\n"}

                <StyledTitle>Title 2 {"\n"}{"\n"}</StyledTitle>
            
                Due to a political compromise (Berlin-Bonn Act) following the reunification, the German federal government maintains a substantial presence in Bonn. Roughly a third of all ministerial jobs are located in Bonn as of 2019,[4] and the city is considered a second, unofficial, capital of the country.[5] Bonn is the secondary seat of the President, the Chancellor, the Bundesrat and the primary seat of six federal government ministries and twenty federal authorities. The title of Federal City (German: Bundesstadt) reflects its important political status within Germany.[6]{"\n"}{"\n"}
            
                The headquarters of Deutsche Post DHL and Deutsche Telekom, both DAX-listed corporations, are in Bonn. The city is home to the University of Bonn and a total of 20 United Nations institutions, the highest number in all of Germany.[7] These institutions include the headquarters for Secretariat of the UN Framework Convention Climate Change (UNFCCC), the Secretariat of the UN Convention to Combat Desertification (UNCCD), and the UN Volunteers programme.{"\n"}{"\n"}

              </BlockText>
            </Text>

            
            
            <StyledFormArea>
            
            {/* <PrivacyArea>
            <PrivacyText> */}
            {/* <CheckboxContainer style={{width: '100%'}}> */}
            

{/* <BouncyCheck style={{backgroundColor: checkboxState ? white : purple}}> */}
{/* <Text
          style={{ color: "#fff" }}
        >{`Check Status: ${checkboxState.toString()}`}</Text> */}
{/* </BouncyCheck> */}

            <BouncyCheckbox
  style={{ marginTop: 16, backgroundColor: checkboxState ? white : purple }}
  isChecked={checkboxState}
  text="I have read and agreed with this Privacy Policy."
  // disableBuiltInState
  onPress={() => setCheckboxState(!checkboxState)}
/>

            {/* <PrivacyText>I have read and agreed with this Privacy Policy.</PrivacyText> */}
              {/* </CheckboxContainer> */}
            {/* </PrivacyText>
            </PrivacyArea> */}
            </StyledFormArea>


          </TextBlockBorders>
              
        </View>
      </ScrollView>
    </InnerContainer>
  </StyledContainer>

  );

}