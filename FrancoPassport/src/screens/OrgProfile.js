import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Footer, FooterTab, Icon } from 'native-base';

export default class OrgProfile extends Component {
  render() {
    return (
      <View>
        <Button
          title="Événement"
          onPress={() => this.props.navigation.navigate('EventDetails')}
        />
        <Button
          title="Nouvel événement"
          color="green"
          onPress={() => this.props.navigation.navigate('AddEvent')}
        />
        <Footer >
          <FooterTab>
            <Button 
              active
              title="Profil">
              <Icon active name="person" />
            </Button>
            <Button
              title="Campagnes"
              onPress={() => this.props.navigation.navigate('CampaignList')}>
              <Icon name="apps" />
            </Button>
          </FooterTab>
        </Footer>
      </View>
    );
  }
}
