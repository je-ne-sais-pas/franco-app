import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Footer, FooterTab, Icon } from 'native-base';

export default class CampaignList extends Component {
  render() {
    return (
      <View>
        <Button
          title="Campagne"
          onPress={() => this.props.navigation.navigate('CampaignDetails')}
        />
        <Button
          title="Nouvelle Campagne"
          color="green"
          onPress={() => this.props.navigation.navigate('AddCampaign')}
        />
        <Footer >
          <FooterTab>
            <Button
              title="Profil"
              onPress={() => this.props.navigation.navigate('OrgProfile')}>
              <Icon name="person" />
            </Button>
            <Button
              active
              title="Campagnes">
              <Icon active name="apps" />
            </Button>
          </FooterTab>
        </Footer>
      </View>
    );
  }
}
