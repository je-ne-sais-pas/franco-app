import React, { Component } from 'react';
import { View, Text, TextInput, Button, Alert, BackHandler } from 'react-native';

export default class StudentRegister extends Component {
  // TODO - styles
  // TODO - conditioning for submit button and fields
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      description: '',
      isFormEdited: false,
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.handleBackPress = this.handleBackPress.bind(this);
    this.confirmBackPress = this.confirmBackPress.bind(this);
    this.checkIsEdited = this.checkIsEdited.bind(this);
    this.updateIsEdited = this.updateIsEdited.bind(this);
  }

  componentDidMount() {
   BackHandler.addEventListener('hardwareBackPress', this.handleBackPress());
 }

 componentWillUnmount() {
   BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress());
 }

 checkIsEdited() {
   if (this.state.firstName != '') {
     return true;
   }
   if (this.state.lastName != '') {
     return true;
   }
  if (this.state.email != '') {
    return true;
  }
  if (this.state.password != '') {
    return true;
  }
  if (this.state.description != '') {
     return true;
   }
   return false
 }

 updateIsEdited() {
   if (this.checkIsEdited()) {
     this.setState({isFormEdited: false});
   } else {
     this.setState({isFormEdited: true});
   }
 }

 handleBackPress() {
   if (!this.state.isFormEdited) {
     return true;
   } else {
     let goBack = this.confirmBackPress()
     if (goBack) {
       this.goBack();
       return true;
     }
     return false;
     }
   }

 confirmBackPress() {
   Alert.alert(
     'Attention!', // title
     "Si vous quittez, toutes vos informations seront perdues. Voulez-vous encore continuer?", // message
     [
       {text: 'Non', onPress: () => false},
       {text: 'Oui', onPress: () => true}
     ]
   )
 }

  onSubmit() {
    Alert.alert(
      'Veuillez Confirmer', // title
      "Si l'information fournée est correcte, sélectionner « Oui ». Sinon, sélectionner « Non ».", // message
      [
        {text: 'Non'},
        {text: 'Oui', onPress: () => this.props.navigation.navigate('RegisterClass')}
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
          placeholder='Biographie'
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
