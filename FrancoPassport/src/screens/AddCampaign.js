import React, { Component } from 'react';  
import { View, Text, Button } from 'react-native';

export default class AddCampaign extends Component {  
  render() {
    return (
      <View>
        <Text>Add Campaign</Text>
        <Button
          title="Create"
          color="green"
          onPress={() => this.props.navigation.navigate('CampaignList')}
        />
      </View>
    );
  }
}