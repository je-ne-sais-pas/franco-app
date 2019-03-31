import React, { Component } from 'react';  
import { View, Text, Button } from 'react-native';

export default class CampaignList extends Component {  
  render() {
    return (
      <View>
        <Text>List of Campaigns</Text>
        <Button
          title="Campaign"
          onPress={() => this.props.navigation.navigate('CampaignDetails')}
        />
        <Button
          title="New Campaign"
          color="green"
          onPress={() => this.props.navigation.navigate('AddCampaign')}
        />
      </View>
    );
  }
}