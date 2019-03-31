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
import OrgStart from './src/screens/OrgStart'
import AddEvent from './src/screens/AddEvent';

// Campaign specific screens
import CampaignDetails from './src/screens/CampaignDetails';
import CampaignList from './src/screens/CampaignList';
import AddCampaign from './src/screens/AddCampaign';
import QuestDetails from './src/screens/QuestDetails';
import AddQuest from './src/screens/AddQuest';

// Student specific screens
import StudentLogin from './src/screens/StudentLogin';
import StudentProfile from './src/screens/StudentProfile'
import StudentRegister from './src/screens/StudentRegister'
import StudentStart from './src/screens/StudentStart'
import RegisterClass from './src/screens/RegisterClass'

// Prof specific screens
import ProfLogin from './src/screens/ProfLogin';
import ProfProfile from './src/screens/ProfProfile'
import ProfRegister from './src/screens/ProfRegister'
import ProfStart from './src/screens/ProfStart'

// Class specific screens
import CreateClass from './src/screens/CreateClass'; 
import ClassDetails from './src/screens/ClassDetails';

// Event specific screens
import EventDetails from './src/screens/EventDetails';

const AppNavigator = createStackNavigator({
  LoginHome: { screen: LoginHome},
  StudentLogin: { screen: StudentLogin},
  StudentRegister: { screen: StudentRegister},
  StudentProfile: { screen: StudentProfile},
  StudentStart: { screen: StudentStart},
  RegisterClass: { screen: RegisterClass},
  ProfLogin: { screen: ProfLogin},
  ProfRegister: { screen: ProfRegister},
  ProfProfile: { screen: ProfProfile},
  ProfStart: { screen: ProfStart},
  OrgLogin: { screen: OrgLogin },
  OrgRegister: {screen: OrgRegister},
  OrgProfile: { screen: OrgProfile},
  OrgStart: { screen: OrgStart},
  AddEvent: { screen: AddEvent},
  EventDetails: { screen: EventDetails},
  CampaignList: { screen: CampaignList},
  CampaignDetails: { screen: CampaignDetails},
  AddCampaign: { screen: AddCampaign },
  QuestDetails: { screen: QuestDetails},
  AddQuest: { screen: AddQuest},
  CreateClass: { screen: CreateClass},
  ClassDetails: { screen: ClassDetails},
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
