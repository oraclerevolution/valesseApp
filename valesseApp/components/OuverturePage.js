import * as React from 'react';
import {StyleSheet, Text, Image, Button, View} from 'react-native';

export default class OuverturePage extends React.Component{

  _goToConnexion = () =>{
    this.props.navigation.navigate('Ouverture');
  }
  render(){

    return(
      <View style={styles.containerView}>
          <View style={styles.textView}>
              <Text style={styles.appName}>Study Online</Text>
              <Image
                style={styles.stretch}
              />
              <Text style={styles.slogan}>Study Online</Text>
          </View>
          <View style={styles.boutonView}>
              <Button
                onPress={()=> this._goToConnexion() }
                title="Se connecter"
                color="#2b78e4"
              />
              <Button
                onPress={()=>{}}
                title="S'inscrire"
                color="#2b78e4"
              />
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
    textAlign: 'center'
  },
  stretch:{
    width: 150,
    height: 80,
  },
  slogan:{
    textAlign: 'center',
    fontWeight: 'bold'
  }
});
