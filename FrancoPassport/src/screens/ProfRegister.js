import React, { Component } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

export default class StudentRegister extends Component {
  // TODO - styles
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      description: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit() {
    Alert.alert(
      'Veuillez Confirmer', // title
      "Êtes-vous sûr de vouloir soumettre les informations fournies?",
      [
        {text: 'Annuler'},
        {text: 'Confirmer'}
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
          onChangeText={(text) => this.setState({firstName: text})}
        />
      <Text>Nom de Famille</Text>
        <TextInput
          placeholder='Nom de Famille'
          onChangeText={(text) => this.setState({lastName: text})}
        />
      <Text>Courriel</Text>
        <TextInput
          placeholder='Courriel'
          onChangeText={(text) => this.setState({email: text})}
        />
      <Text>Mot de Passe</Text>
        <TextInput
          placeholder='Mot de Passe'
          onChangeText={(text) => this.setState({password: text})}
          secureTextEntry={true}
        />
      <Text>Biographie</Text>
        <TextInput
          placeholder='Biographie (140 caractères)'
          onChangeText={(text) => this.setState({description: text})}
        />
      <Button
        title="Soumettre"
        onPress={() => this.onSubmit()}
      />
      </View>
    );
  }
}
