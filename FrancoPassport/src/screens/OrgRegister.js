import React, { Component } from 'react';  
import { View, Text, Button } from 'react-native';

export default class OrgRegister extends Component {  
  render() {
    return (
      <View>
        <Text>Register Organization</Text>
        <Button
          title="Register"
          color="green"
          onPress={() => this.props.navigation.navigate('OrgProfile')}
        />
      </View>
    );
  }
}