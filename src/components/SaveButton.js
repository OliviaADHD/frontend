import React from 'react';
import {LongButton, ButtonText} from '../css/components/saveButton'

export default function SaveButton() {
  return (
    <LongButton onPress={() => console.log('Pressed1')} uppercase={false}>
      <ButtonText>
        Update
      </ButtonText>
    </LongButton>
  )
}


