//components/ConnexionPage.js
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';


export default class CentreInteret extends React.Component{
    constructor(props){
        super(props)
        
        this.state = {
            checked: false
        }
    }

    //page header
    
    static navigationOptions = {
        title: "Centre d'intérêt",
    };

    _goToMenu(){
        this.props.navigation.navigate('Menu');
    }

    render(){
        return(
            <View style={styles.container}>
                <Card title="Vous êtes intéressé par ?" style={styles.card}>
                    <View>
                    <CheckBox
                        title='Mathématiques'
                        checked={this.state.checked}
                    />
                    <CheckBox
                        title='Physiques'
                        checked={this.state.checked}
                    />
                    <CheckBox
                        title='Anglais'
                        checked={this.state.checked}
                    />
                    <CheckBox
                        title='Français'
                        checked={this.state.checked}
                    />
                    </View>
                </Card>
                <Button
                    icon={
                        <Icon
                        name="arrow-right"
                        size={15}
                        color="white"
                        />
                    }
                    title="Valider"
                    onPress={this._goToMenu.bind(this)}
                />
            </View>
        )
    
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    card: {
        marginBottom: '5%'
    }

})
