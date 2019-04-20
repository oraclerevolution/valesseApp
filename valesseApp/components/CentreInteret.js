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

    render(){
        return(
            <View>
                <Card title="Vous êtes intéressé par ?">
                    <View>
                    <CheckBox
                        title='Mathématiques'
                        checked={this.state.checked}
                    />
                    </View>
                </Card>
            </View>
        )
    
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
