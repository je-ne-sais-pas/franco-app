import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Footer, FooterTab, Icon } from 'native-base';

export default class ProfProfile extends Component {  
  render() {
    return (
      <View>
        <Text>List of Classes</Text>
        <Button
          title="Class"
          onPress={() => this.props.navigation.navigate('ClassDetails')}
        />
        <Button
          title="New Class"
          color="green"
          onPress={() => this.props.navigation.navigate('CreateClass')}
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
