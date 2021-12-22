import React from 'react'
import {View, Image} from 'react-native'
import {Button} from 'react-native-paper'

export default function SubmitArrow() {
  return (
    <View>
      <Button
        mode='outlined'
        title=''
        activeOpacity={1}
        onPress = {() => navigation.replace("TodoEmpty")}
        raised theme={{ roundness: 100 }}
        // color='#FFFFFF'
        color='#C7A3D2'
        style={{width: 50, height: 50, alignItems:'center', justifyContent:'center', borderRadius:50}}
        icon={() => (
          <Image
            source={require('../../../assets/images/PaperPlane.png')}
            style={{width: 25, height: 25, tintColor : '#000000', alignSelf: 'center', alignItems: 'center', justifyContent: 'center'}}
          />
        )}
      /> 

    </View>
  )
}
