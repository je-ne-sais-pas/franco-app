import React, { Component } from 'react';  
import { View, Text, Button } from 'react-native';

export default class CampaignDetails extends Component {  
  render() {
    return (
      <View>
        <Text>List of Quests</Text>
        <Button
          title="Quest"
          onPress={() => this.props.navigation.navigate('QuestDetails')}
        />
        <Button
          title="New Quest"
          color="green"
          onPress={() => this.props.navigation.navigate('AddQuest')}
        />
      </View>
    );
  }
}