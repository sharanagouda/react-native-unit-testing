import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Screens from './src/scene/SwiperScreens';
import { NavigationContainer } from '@react-navigation/native';


export default class App extends Component {
  componentDidMount() {
    // Hide the status bar

  }
  render() {
    return (
      <NavigationContainer>
        <Screens />
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
