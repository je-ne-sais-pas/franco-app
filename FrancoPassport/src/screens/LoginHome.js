import React, { Component } from 'react';  
import { View, Text, Button } from 'react-native';

export default class LoginHome extends Component {  
  render() {
    return (
      <View>
        <Text>Login General</Text>
        <Button
          title="Register Organization"
          onPress={() =>
            this.props.navigation.navigate('OrgRegister')
          }
        />
        <Button
          title="Login"
          color="green"
          onPress={() => this.props.navigation.navigate('OrgLogin')}
        />
      </View>
    );
  }
}