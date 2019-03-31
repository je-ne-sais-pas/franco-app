import React, { Component } from 'react';  
import { View, Text, Button } from 'react-native';

export default class OrgLogin extends Component {  
  render() {
    return (
      <View>
        <Text>Organization Login</Text>
        <Button
          title="Login"
          color="green"
          onPress={() => this.props.navigation.navigate('OrgProfile')}
        />
      </View>
    );
  }
}