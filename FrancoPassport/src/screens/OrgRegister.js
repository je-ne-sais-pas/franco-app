import React, { Component } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

export default class StudentRegister extends Component {
  // TODO - styles
  // TODO - backend
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      address: '',
      password: '',
      description: ''
    };
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit() {
    Alert.alert(
      'Veuillez Confirmer', // title
      "Êtes-vous sûr de vouloir soumettre les informations fournies?", // message
      [
        {text: 'Non'},
        {text: 'Oui'}
      ]
    )
  }

  render() {
    return (
      <View>
        <Text>Information d'Organisation</Text>
        <Text>Nom</Text>
        <TextInput
          placeholder='Nom'
          onChangeText={(text) => this.setState({name: text})}
        />
      <Text>Courriel</Text>
        <TextInput
          placeholder='Courriel'
          onChangeText={(text) => this.setState({email: text})}
        />
      <Text>Adresse</Text>
        <TextInput
          placeholder='Adresse'
          onChangeText={(text) => this.setState({address: text})}
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
