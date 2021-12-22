import React from 'react'
import {View, Image, TouchableOpacity, Button} from 'react-native'
// import {Button} from 'react-native-paper'

export default function CloseWindow({navigation}) {
  return (
    <View>

      {/* <Button
        mode='contained'
        icon={() => (
          <Image
          source={require('../../../assets/images/window-close.png')}
          style={{width: 25, height: 25, tintColor : '#000000'}}
        />
        )}
        onPress = {() => navigation.navigate('TodoEmpty')}
      >
      </Button> */}
      <TouchableOpacity
        // activeOpacity={0.5}
        onPress = {() => navigation.navigate("TodoEmpty")}
      >
        <Image
          source={require('../../../assets/images/window-close.png')}
          style={{width: 25, height: 25, tintColor : '#000000'}}
        />
        
      </TouchableOpacity>

    </View>
  )
}
