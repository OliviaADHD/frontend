import React from 'react';
import { Text } from 'react-native';
import { Button } from 'react-native-paper';

import { 
  Colors,
} from "../../components/ProfileSettings/ProfileGeneral";

export default function SaveButton() {
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


