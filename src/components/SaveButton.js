import React from 'react';
import { Text } from 'react-native';
import { Button } from 'react-native-paper';

export default function SaveButton() {
  return (

    <Button 
      style={{
        backgroundColor: "#694398",
        borderRadius: 10, 
        paddingTop: 8, 
        paddingBottom: 8, 
        marginTop: 90
      }}
    >
      <Text 
        style={{
          fontSize: 12, 
          color: "white"
        }}
      >
        Save all changes
      </Text>

    </Button>
  )
}


