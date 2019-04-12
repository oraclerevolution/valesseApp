import React from 'react';
import {StyleSheet, Text, Image, Button, TouchableHighlight, TextInput, View} from 'react-native';

export default class ConnexionPage extends React.Component{

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' };
  }

  static navigationOptions = {
    title: 'Connectez-vous à Study Online',
  };

  render(){
    return(
      <View style={styles.containerView}>

        <View style={styles.entete}>
          <Text style={styles.title}>STUDY ONLINE</Text>
          <Image
            style={styles.stretch}
            source={require('../assets/ETUDESK.jpg')}
          />
        </View>

        <View>
          <Text style={styles.connexion}>CONNECTEZ-VOUS VIA</Text>
        </View>

        <View style={styles.viewButton}>
          <TouchableHighlight style={styles.fbk}>
            <Button
              onPress={()=>{}}
              title="Facebook"
              color="#3b5998"
            />
          </TouchableHighlight>

          <TouchableHighlight style={styles.goo}>
            <Button 
              onPress={()=>{}}
              title="Gmail"
              color="#db4a39"
            />
          </TouchableHighlight>
          
        </View>

        <View>
          <Text style={styles.connexion}>OU</Text>
        </View>

        <View style={styles.form}>
          <TextInput
            style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1, marginBottom:15, padding:7}}
            onChangeText={(username) => this.setState({username})}
            value={this.state.username}
            placeholder="Entrez votre email"
          />
          <TextInput
            secureTextEntry={true} 
            style={{height: 40, width: 300, borderColor: 'gray', borderWidth: 1, marginBottom:15, padding:7}}
            onChangeText={(password) => this.setState({password})} 
            value={this.state.password}
            placeholder="Entrez votre mot de passe"
          />

            <Button 
              onPress={()=>{}}
              style={{width: 180}}
              title="Connexion"
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
  fbk: {
    width: 150,
    marginRight: '2%'
  },
  goo: {
    width: 150,
    marginLeft: '2%'
  },
  entete: {
    textAlign: 'center'
  },
  connexion: {
    fontSize: 27,
    textAlign: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  viewButton: {
    flexDirection: 'row',
    padding:12,
    marginBottom: 5
  },
  stretch:{
    marginTop:20,
    width: 150,
    height: 150,
    marginBottom: 20
  },
  form: {

  }
});
