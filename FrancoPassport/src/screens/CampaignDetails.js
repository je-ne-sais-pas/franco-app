import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class CampaignDetails extends Component {
  render() {
    return (
      <View>
        <Button
          title="Quête"
          onPress={() => this.props.navigation.navigate('QuestDetails')}
        />
        <Button
          title="Nouvelle Quête"
          color="green"
          onPress={() => this.props.navigation.navigate('AddQuest')}
        />
      </View>
    );
  }
}
