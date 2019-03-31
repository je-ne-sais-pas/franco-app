import React, { Component } from 'react';  
import { View, Text, Button } from 'react-native';
import { Footer, FooterTab, Icon } from 'native-base';

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
        <Footer >
          <FooterTab>
            <Button 
              active
              title="Profile">
              <Icon active name="person" />
            </Button>
            <Button 
              title="Campaigns"
              onPress={() => this.props.navigation.navigate('CampaignList')}>
              <Icon name="apps" />
            </Button>
          </FooterTab>
        </Footer>
      </View>
    );
  }
}