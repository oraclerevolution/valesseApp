import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import OuverturePage from './OuverturePage';
import ConnexionPage from './ConnexionPage';
import InscriptionPage from './InscriptionPage';

const MainNavigator = createStackNavigator({
  Ouverture: {
    screen: OuverturePage,
    
   },
  Connexion: {screen: ConnexionPage },
  Inscription: {screen: InscriptionPage}
});


export default createAppContainer(MainNavigator)