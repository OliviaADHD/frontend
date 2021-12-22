import React from 'react'
import {View, Image, TouchableOpacity} from 'react-native'
import {Button} from 'react-native-paper'

export default function CloseWindow({navigation}) {
  return (
    <View>

      {/* <Button
        mode='text'
        title=''
        icon={() => (
          <Image
          source={require('../../../assets/images/window-close.png')}
          style={{width: 25, height: 25, tintColor : '#000000'}}
        />
        )}
        onPress = {() => navigation.navigate('TodoEmpty')} 
        style={{borderRadius: 200}}
        color='#C7A3D2'
        // raised theme={{ roundness: 3 }}
      >
      </Button> */}

      {/* <Button onPress={() => this._pressOk()} color="#000">{this.props.txtOk}</Button> */}


      {/* <TouchableOpacity
        mode='contained'
        title=''
        activeOpacity={0.5}
        onPress = {() => navigation.navigate('TodoEmpty')} 
        >
          <Image
          source={require('../../../assets/images/window-close.png')}
          style={{width: 25, height: 25, tintColor : '#000000'}}
          />
      
      </TouchableOpacity> */}


      <Button
        title=''
        icon={() => (
          <Image
            source={require('../../../assets/images/window-close.png')}
            style={{width: 25, height: 25, tintColor : '#000000'}}
          />
        )}
        // activeOpacity={0.5}
        onPress = {() => {navigation.navigate("TodoEmpty")}}
      />        
      {/* </Button> */}

    </View>
  )
}
