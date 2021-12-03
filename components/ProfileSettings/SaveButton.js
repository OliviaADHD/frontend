import React from 'react';
import { Text } from 'react-native';
import { Button } from 'react-native-paper';
import style from '../general'

const Colors = {
  white: "#ffffff",
  purple: "#694398",
};

const { white, purple } = Colors;

export default function saveButton() {
  return (

    <Button 
      style={{
        backgroundColor: Colors.purple,
        borderRadius: 10, 
        paddingTop: 8, 
        paddingBottom: 8, 
        marginTop: 90
      }}
    >
      <Text 
        style={{
          fontSize: 12, 
          color: Colors.white
        }}
      >
        Save all changes
      </Text>

    </Button>
  )
}


