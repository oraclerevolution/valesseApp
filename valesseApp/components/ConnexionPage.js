import React from 'react';
import {StyleSheet, Text, Image, Button, View} from 'react-native';

export default class ConnexionPage extends React.Component{
  render(){
    return(
      <View style={styles.containerView}>
          <Text>Hello world here is the connexion page !</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
