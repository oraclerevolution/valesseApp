import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import OuverturePage from './OuverturePage';
import ConnexionPage from './ConnexionPage';


const MainNavigator = createStackNavigator({
  Ouverture: {screen: OuverturePage },
  Connexion: {screen: ConnexionPage },
});


export default createAppContainer(MainNavigator)