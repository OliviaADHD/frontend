import React from 'react';
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  TextBlockBorders,
  BlockText,
  StyledContainer,
  InnerContainer,
  StyledFormArea,
  StyledButton,
  ButtonText
}from '../../components/styles';
import { NextBtnContainer } from '../../components/stylesCalendar';
import { StyledButtonNext } from '../../components/stylesCalendar';
import {
  StyledTitleCentered,
}from '../../components/stylesMenstruation';

export default function Infonotice_Menstruation({firstPage, setFirstPage}) {
  return (

    <View>
        <TextBlockBorders>

          <StyledTitleCentered style={{ marginBottom : '10%'}}>Did you know?</StyledTitleCentered>

            <Text>
              <BlockText>
                People often get confused between 'cycle' and 'period'.{"\n"}{"\n"}

                <Text style={{fontWeight: 'bold'}}>Periods</Text> refers to the days of bleeding (usually 3-8 days).{"\n"}{"\n"}

                <Text style={{fontWeight: 'bold'}}>Cycle</Text>  refers to all the days from the first day of period to the day before the next period. Your cycle includes your period.{"\n"}{"\n"}
              </BlockText>
            </Text>
        <NextBtnContainer style={{marginTop: '5%'}}>
                    <StyledButtonNext
                        onPress={() => setFirstPage(firstPage+1)}>
                        <ButtonText>Next</ButtonText>
                    </StyledButtonNext>
        </NextBtnContainer>
      
        </TextBlockBorders>
    </View>


  )
}

