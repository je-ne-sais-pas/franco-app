import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class Home extends Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text> Franco Passe-port </Text>
        <Text> Bienvenue au début de votre aventure français!</Text>
        <Text> Êtes-vous...</Text>
        <View>
        <Button
          title='Étudiant.e'
          onPress={() => navigate('StudentLogin')}
        />
        <Button
          title='Professeur.e'
          onPress={() => navigate('ProfLogin')}
        />
        <Button
          title='Organisateur/Organisatrice'
          onPress={() => navigate('OrgLogin')}
        />
      </View>
    </View>
    );
  }
}

// // TODO - syle containers
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     flexDirection: 'column'
//   },
// });
