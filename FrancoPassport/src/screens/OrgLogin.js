import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default class OrgLogin extends Component {
  render() {
    return (
      <View>
        <Text>Information d'Organisation</Text>
        <Text>Nom</Text>
        <TextInput
          placeholder='Nom'
          onChangeText={(text) => this.setState({text})}
        />
        <Text>Mot de Passe</Text>
          <TextInput
            placeholder='Mot de Passe'
            onChangeText={(text) => this.setState({text})}
            secureTextEntry={true}
        />
        <Button
          title="Soumettre"
          onPress={() => this.onSubmit()}
        />
      </View>
    );
  }
}
