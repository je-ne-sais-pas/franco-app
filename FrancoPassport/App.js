/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import LoginHome from './src/screens/LoginHome';

// Organization specific screens
import OrgRegister from './src/screens/OrgRegister';
import OrgLogin from './src/screens/OrgLogin';
import OrgProfile from './src/screens/OrgProfile';
import AddEvent from './src/screens/AddEvent';

// Campaign specific screens
import CampaignDetails from './src/screens/CampaignDetails';
import CampaignList from './src/screens/CampaignList';
import AddCampaign from './src/screens/AddCampaign';
import QuestDetails from './src/screens/QuestDetails';
import AddQuest from './src/screens/AddQuest';

// Event specific screens
import EventDetails from './src/screens/EventDetails';

const AppNavigator = createStackNavigator({  
  LoginHome: {
    screen: LoginHome
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {  
  render() {
    return <AppContainer />;
  }
}
