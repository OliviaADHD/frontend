import React from 'react';
import { View, Text, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  StyledTitle,
  TextBlockBorders,
  BlockText,
}from './../components/styles';

export default function Infonotice_Menstruation({navigation}) {
  return (
    <ScrollView >
    <View>
      <StatusBar style="dark"/>
      <TextBlockBorders>
        <Text>
          <BlockText>
            
            <StyledTitle>Did you know?{"\n"}{"\n"}</StyledTitle>

            People often get confused between 'cycle' and 'period'{"\n"}{"\n"}

            Periods refers to the days of bleeding (usually 3-8 days).{"\n"}{"\n"}

            Cycle refers to all the days from the first day of period to the day before the next period. Your cycle includes your period.{"\n"}{"\n"}

          </BlockText>
        </Text>
      </TextBlockBorders>
    </View>
  </ScrollView>
  )
}

