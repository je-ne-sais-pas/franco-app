import React, { Component } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

export default class RegisterClass extends Component {
  // TODO - styles
  // TODO - maybe user can cancel so that they can add class later if they want?
  constructor(props) {
    super(props);
    this.state = {text: ''};
    this.onSubmit = this.onSubmit.bind(this);
    this.onSearch = this.onSearch.bind(this);
  }

  onSubmit() {
    Alert.alert(
      'Veuillez Confirmer',
      "Êtes-vous sûr de vouloir soumettre les informations fournies?",
      [
        {text: 'Annuler'},
        {text: 'Confirmer'}
      ]
    )
  }

  onSearch() {
    Alert.alert(
      'Désolé :(',
      " Cette fonction n'est pas encore disponsible pour utilisation.",
      [{text: 'OK'}]
    )
  }

  render() {
    return (
      <View>
        <Text>Êtes-vous dans une classe?</Text>
        <Text>Nom et Numéro de classe</Text>
        <Text>Chercher votre classe</Text>
          <TextInput
            placeholder='Exemple: FREN 298'
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          <Button
            title='Chercher'
            onPress={() => this.onSearch()}
          />
          <Button
            title='Enregistrer'
            onPress={() => this.onSubmit()}
          />
    </View>
    );
  }
}
