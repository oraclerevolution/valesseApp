import React from 'react';
import { StyleSheet } from 'react-native';
import MainNavigator from './components/Navigation';

export default class App extends React.Component {
  render() {
    return (
        <MainNavigator />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
