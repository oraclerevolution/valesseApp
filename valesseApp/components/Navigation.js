//components/Navigation.js
import { createStackNavigator, createAppContainer } from 'react-navigation';
import OuverturePage from './OuverturePage';
import ConnexionPage from './ConnexionPage';
import InscriptionPage from './InscriptionPage';
import MenuPage from './MenuPage';
import ListChapitre from './ListChapitre';
import CentreInteret from './CentreInteret';

const MainNavigator = createStackNavigator({
  Ouverture: {
    screen: OuverturePage },
  Connexion: {screen: ConnexionPage },
  Inscription: {screen: InscriptionPage},
  Menu: {screen: MenuPage},
  ListeChapitre: {screen: ListChapitre},
  PageDeChoix: {screen: CentreInteret}
});


export default createAppContainer(MainNavigator)