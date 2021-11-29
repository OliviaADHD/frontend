import React, {useState} from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import {
  Colors,
} from './styles';

class ProfileTopContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      fullName: '',
      email: '',
    }
  }

  render() {
    return(

      <View 
      style={{
        flex: 1, 
        justifyContent: 'space-between', 
        paddingTop: 40, 
        flexDirection: 'row', 
        alignItems: 'baseline', 
        flexWrap: 'wrap',
        paddingRight: 15
      }}>

      <Image source={require('../assets/images/foxicon.png')}
        style={{
          width: 70, 
          height: 70,
          borderRadius: 50, 
          borderWidth: 5, 
          borderColor: Colors.purple,
        }}/>
        

      <View style={{flexDirection: 'row'}}>
            
        <Text 
          style={{
            fontWeight: 'bold',
            paddingLeft: 20,
            paddingHorizontal: 10,
            paddingRight: 20
          }}>
              
          <Text style={{fontSize:15}}>{this.state.fullName}{"\n"}</Text>
          <Text style={{fontSize:12}}>{this.state.email}{"\n"}</Text>

        </Text>

          <TouchableOpacity 
            activeOpacity={0.5}
            onPress = {() => this.props.navigation.navigate('ToBeDefined')}
          >
              
            <Image 
              source={require('../assets/images/penBlack.png')} 
              style={{
                width: 17, 
                height: 17,
                }}
              />
              
          </TouchableOpacity>

      </View>

    </View>

    );
  }
}

const mapStateToProps = state => {
  const  {fullName} = state;
  const  {email} = state;

  console.log('user data mapStateToProps ... state:' + JSON.stringify(state));

  return {fullName, email};
};

export default connect(
  mapStateToProps,
)(ProfileTopContainer);

// export default connect(
// )(ProfileTopContainer);