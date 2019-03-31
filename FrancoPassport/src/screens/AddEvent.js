import React, { Component } from 'react';  
import { View, Text, Button } from 'react-native';

export default class AddEvent extends Component {  
  render() {
    return (
      <View>
        <Text>Add Event</Text>
        <Button
          title="Create"
          color="green"
          onPress={() => this.props.navigation.navigate('OrgProfile')}
        />
      </View>
    );
  }
}