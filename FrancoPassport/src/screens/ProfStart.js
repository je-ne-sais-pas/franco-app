import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class ProfStart extends Component {
  render() {
    return (
      <View>
        <Text>Professeur.e</Text>
        <Button
          title='Se Connecter'
          onPress={()=>this.props.navigation.navigate('ProfLogin')}
          />
        <Button
          title="S'inscrire"
          onPress={()=>this.props.navigation.navigate('ProfRegister')}
          />
      </View>
    );
  }
}
