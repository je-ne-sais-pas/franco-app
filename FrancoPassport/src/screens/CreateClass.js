import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class CreateClass extends Component {
  render() {
    return (
      <View>
        <Text>Add Class</Text>
        <Button
          title="Créer"
          color="green"
          onPress={() => this.props.navigation.navigate('ProfProfile')}
        />
      </View>
    );
  }
}
