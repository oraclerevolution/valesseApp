import * as React from 'react';
import {StyleSheet, Text, Image, Button, TouchableHighlight, View} from 'react-native';

export default class OuverturePage extends React.Component{

  static navigationOptions = {
    title: 'Bienvenue sur Study Online',
  };

  _goToConnexion(){
    this.props.navigation.navigate('Connexion');
  }

  _goToInscription(){
    this.props.navigation.navigate('Inscription');
  }

  render(){
    console.log(this.props)
    return(
      <View style={styles.containerView}>
          <View style={styles.textView}>
              <Text style={styles.appName}>STUDY ONLINE</Text>
              <Image
                style={styles.stretch}
                source={require('../assets/icon.png')}
              />
              <Text style={styles.slogan}>Formez vous sur Study Online et devenez efficace.</Text>
          </View>
          <View style={styles.boutonView}>
              <TouchableHighlight style={styles.bouton1}>
                <Button
                  onPress={this._goToConnexion.bind(this)}
                  title="Se connecter"
                  color="#2b78e4"
                />
              </TouchableHighlight>
              
              <TouchableHighlight style={styles.bouton2}>
                <Button
                  onPress={this._goToInscription.bind(this)}
                  title="S'inscrire"
                  color="#2b78e4"
                />
              </TouchableHighlight>
              
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bouton1: {
    width: 250,
    margin:7
  },
  bouton2: {
    width: 250,
    margin:7
  },
  textView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  boutonView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  appName:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize:20
  },
  stretch:{
    marginTop:20,
    width: 250,
    height: 150,
    marginBottom: 20
  },
  slogan:{
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 19
  }
});
