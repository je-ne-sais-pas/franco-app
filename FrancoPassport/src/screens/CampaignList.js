import React, { Component } from 'react';  
import { View, Text, Button } from 'react-native';
import { Footer, FooterTab, Icon } from 'native-base';

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
        <Footer >
          <FooterTab>
            <Button 
              title="Profile"
              onPress={() => this.props.navigation.navigate('OrgProfile')}>
              <Icon name="person" />
            </Button>
            <Button
              active 
              title="Campaigns">
              <Icon active name="apps" />
            </Button>
          </FooterTab>
        </Footer>      
      </View>
    );
  }
}