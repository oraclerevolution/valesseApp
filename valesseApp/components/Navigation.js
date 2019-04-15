import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import OuverturePage from './OuverturePage';
import ConnexionPage from './ConnexionPage';
import InscriptionPage from './InscriptionPage';
import MenuPage from './MenuPage';

const MainNavigator = createStackNavigator({
  Ouverture: {
    screen: OuverturePage },
  Connexion: {screen: ConnexionPage },
  Inscription: {screen: InscriptionPage},
  Menu: {screen: MenuPage}
});


export default createAppContainer(MainNavigator)