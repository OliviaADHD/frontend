import React from 'react'
import {View, Image, TouchableOpacity} from 'react-native'
// import { TouchableOpacity } from 'react-native-gesture-handler'
import {Button} from 'react-native-paper'

import {InputContainer} from "../../css/todoList/inputTaskContainer"

export default function SubmitArrow() {
  return (
    <View>

      {/* <InputContainer>
      </InputContainer> */}

      <TouchableOpacity
        mode='text'
        title=''
        activeOpacity={0.5}
        // onPress = {() => navigation.replace("TodoEmpty")}
        // raised theme={{ roundness: 100 }}
        // color='#FFFFFF'
        color='#C7A3D2'
        style={{width: 50, height: 50, alignItems:'center', justifyContent:'center', borderRadius:50}}
      > 
        <Image
            source={require('../../../assets/images/PaperPlane.png')}
            style={{width: 25, height: 25, tintColor : '#000000', alignSelf: 'center', alignItems: 'center', justifyContent: 'center', marginBottom: 10, marginRight: 25}}
        />

      </TouchableOpacity>

      {/* <Button
        mode='text'
        title=''
        activeOpacity={0.5}
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
      />  */}

    </View>
  )
}
