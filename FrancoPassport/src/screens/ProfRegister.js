import React, { Component } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

export default class StudentRegister extends Component {
  // TODO - styles
  constructor(props) {
    super(props);
    this.state = {text: ''};
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit() {
    Alert.alert(
      'Veuillez Confirmer', // title
      "Si l'information fournée est correcte, sélectionner « Oui ». Sinon, sélectionner « Non ».", // message
      [
        {text: 'Non'},
        {text: 'Oui'}
      ]
    )
  }

  render() {
    return (
      <View>
        <Text>Votre Information</Text>
        <Text>Prènom</Text>
        <TextInput
          placeholder='Prénom'
          onChangeText={(text) => this.setState({text})}
        />
      <Text>Nom de Famille</Text>
        <TextInput
          placeholder='Nom de Famille'
          onChangeText={(text) => this.setState({text})}
        />
      <Text>Courriel</Text>
        <TextInput
          placeholder='Courriel'
          onChangeText={(text) => this.setState({text})}
        />
      <Text>Mot de Passe</Text>
        <TextInput
          placeholder='Mot de Passe'
          onChangeText={(text) => this.setState({text})}
          secureTextEntry={true}
        />
      <Text>Biographie</Text>
        <TextInput
          placeholder='Biographie (140 caractères)'
          onChangeText={(text) => this.setState({text})}
        />
      <Button
        title="Soumettre"
        onPress={() => this.onSubmit()}
      />
      </View>
    );
  }
}
