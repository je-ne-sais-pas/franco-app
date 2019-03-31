import React, { Component } from 'react';  
import { View, Text, Button} from 'react-native';

export default class ClassDetails extends Component {  
  render() {
    return (
      <View>
        <Text>Class Details</Text>
        <Button
          title="Student"
          onPress={() => this.props.navigation.navigate('StudentProfile')}
        />
      </View>
    );
  }
}