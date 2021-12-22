import React from 'react'
import {View, Image} from 'react-native'
import {Button} from 'react-native-paper'

export default function CloseWindow({navigation}) {
  return (
    <View>

      <Button
        mode='contained'
        // icon={() => (
        //   <Image
        //   source={require('../../../assets/images/window-close.png')}
        //   style={{width: 25, height: 25, tintColor : '#FFFFFF'}}
        // />
        // )}
        onPress = {() => navigation.navigate('TodoEmpty')}
      />


      {/* </Button> */}

    </View>
  )
}
