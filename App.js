import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import Screens from './src/scene/SwiperScreens';
import HomeScreen from "./src/scene/Home"
import { NavigationContainer } from '@react-navigation/native';


export default class App extends Component {
  componentDidMount() {
    // Hide the status bar

  }
  render() {
    return (
      <NavigationContainer>
        <HomeScreen />
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
