import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class StudentStart extends Component {
  render() {
    return (
      <View>
        <Button
          title='Se Connecter'
          onPress={()=>this.props.navigation.navigate('StudentLogin')}
          />
        <Button
          title="S'inscrire"
          onPress={()=>this.props.navigation.navigate('StudentRegister')}
          />
      </View>
    );
  }
}
