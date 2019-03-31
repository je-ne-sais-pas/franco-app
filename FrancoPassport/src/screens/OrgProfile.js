import React, { Component } from 'react';  
import { View, Text, Button } from 'react-native';

export default class OrgProfile extends Component {  
  render() {
    return (
      <View>
        <Text>List of Events</Text>
        <Button
          title="Event"
          onPress={() => this.props.navigation.navigate('EventDetails')}
        />
        <Button
          title="New Event"
          color="green"
          onPress={() => this.props.navigation.navigate('AddEvent')}
        />
        <Button
          title="Campaigns"
          onPress={() => this.props.navigation.navigate('CampaignList')}
        />
      </View>
    );
  }
}