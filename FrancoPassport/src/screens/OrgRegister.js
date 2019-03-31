import React, { Component } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

export default class OrgRegister extends Component {
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
        {text: 'Oui', onPress: () => this.props.navigation.navigate('OrgProfile')}
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
          onChangeText={(text) => this.setState({text})}
        />
      <Text>Courriel</Text>
        <TextInput
          placeholder='Courriel'
          onChangeText={(text) => this.setState({text})}
        />
      <Text>Adresse</Text>
        <TextInput
          placeholder='Adresse'
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
