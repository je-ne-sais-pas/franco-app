import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class OrgStart extends Component {
  render() {
    return (
      <View>
        <Button
          title='Se Connecter'
          onPress={()=>this.props.navigation.navigate('OrgLogin')}
          />
        <Button
          title="S'inscrire"
          onPress={()=>this.props.navigation.navigate('OrgRegister')}
          />
      </View>
    );
  }
}
