import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class AddQuest extends Component {
  render() {
    return (
      <View>
        <Button
          title="Créer"
          color="green"
          onPress={() => this.props.navigation.navigate('CampaignDetails')}
        />
      </View>
    );
  }
}
