//components/InscriptionPage.js
import React from 'react';
import {StyleSheet, Text, Image, Button, TextInput, KeyboardAvoidingView, TouchableHighlight, View} from 'react-native';

export default class InscriptionPage extends React.Component{

  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };
  }

  static navigationOptions = {
    title: 'Inscrivez-vous à Study Online',
  };

  _goToConnexion(){
    this.props.navigation.navigate('Connexion');
  }

  _goToChoicePage(){
    this.props.navigation.navigate('PageDeChoix')
  }

  render(){
    return(
        <KeyboardAvoidingView style={styles.containerView} behavior="padding" keyboardVerticalOffset={100} enabled>

              <View style={styles.entete}>
                <Text style={styles.title}>STUDY ONLINE</Text>
                <Image
                  style={styles.stretch}
                  source={require('../assets/ETUDESK.jpg')}
                />
              </View>

              <View>
                <Text style={styles.connexion}>INSCRIVEZ-VOUS VIA</Text>
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
                  onChangeText={(email) => this.setState({email})}
                  value={this.state.email}
                  placeholder="Entrez votre email"
                />

                <TextInput
                  secureTextEntry={true}
                  style={{height: 40,
                    width: 300,
                    borderColor: 'gray',
                    borderWidth: 1, 
                    marginBottom:'2%', 
                    padding:7}}
                  onChangeText={(password) => this.setState({password})} 
                  value={this.state.password}
                  placeholder="Entrez votre mot de passe"
                />

                <View style={styles.btn_connect_view}>
                  <TouchableHighlight style={styles.btn_connexion}>
                    <Button 
                      onPress={this._goToChoicePage.bind(this)}
                      title="Je m'inscris"
                      color="#2b78e4"
                    />
                  </TouchableHighlight>
                  
                </View>
              </View>
              <Text 
                style={styles.instructions}
                onPress={this._goToConnexion.bind(this)}>
                Vous avez deja un compte ? Connectez vous ?
              </Text>
        </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  instructions: {
    textAlign: 'center',
    color: '#2b78e4',
    fontSize: 13,
    marginTop: 4
  },
  containerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  btn_connect_view: {
    alignSelf: 'center',
    marginBottom: '2%'
  },
  fbk: {
    width: 150,
    marginRight: '2%'
  },
  btn_connexion: {
    width: 160,
    marginBottom: '2%'
  },
  goo: {
    width: 150,
    marginLeft: '2%'
  },
  entete: {
    textAlign: 'center'
  },
  connexion: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: '2%'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  viewButton: {
    flexDirection: 'row',
    padding:12,
    marginBottom: '1%'
  },
  stretch:{
    marginTop:20,
    width: 130,
    height: 130,
    marginBottom: 20,
    alignSelf: 'center'
  },
  form: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});