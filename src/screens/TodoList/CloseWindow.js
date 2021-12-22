import React from 'react'
import {View, Image, TouchableOpacity} from 'react-native'
import {Button} from 'react-native-paper'
import { useNavigation } from '@react-navigation/native';

export default function CloseWindow() {
  const navigation = useNavigation();
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


      <TouchableOpacity
        mode='outlined'
        title=''
        activeOpacity={0.5}
        onPress = {() => navigation.navigate('TodoEmpty')} 
        style={{width: 35, height: 35, borderWidth: 1, borderRadius: 50,borderColor: '#000', alignItems: 'center', justifyContent: 'center'}}
        >
          <Image
          source={require('../../../assets/images/window-close.png')}
          style={{width: 25, height: 25, tintColor : '#000000', alignSelf: 'center'}}
          />
      
      </TouchableOpacity>


      {/* <Button
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
            source={require('../../../assets/images/window-close.png')}
            style={{width: 25, height: 25, tintColor : '#000000', alignSelf: 'center', alignItems: 'center', justifyContent: 'center'}}
          />
        )}
      />     */}
      {/* </Button> */}

    </View>
  )
}

// borderWidth:1,
//        borderColor:'rgba(0,0,0,0.2)',
//        alignItems:'center',
//        justifyContent:'center',
//        width:100,
//        height:100,
//        backgroundColor:'#fff',
//        borderRadius:50,
