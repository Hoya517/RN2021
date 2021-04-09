/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      year: 2018,
      leapYear: true,
      topics: ['React', 'React Native', 'JavaScript'],
      info: {
        paperback: true,
        length: '335 pages',
        type: 'programming'
      }
    }
  }
  render() {
    let leapyear = <Text>This is not a leapyear!</Text>
    if (this.state.leapYear) {
      leapyear = <Text>This is a leapyear</Text>
    }
    return(
      <View>
        <Text>{ this.state.year }</Text>
        <Text>Length: { this.state.info.length }</Text>
        <Text>Type: { this.state.info.type }</Text>
        { leapyear }
      </View>
    )
  }
}

export default App;
