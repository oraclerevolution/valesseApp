//components/ListChapitre.js
import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import ListItem from './ListItem';
import axios from 'axios';

class ListChapitrePage extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            chapitres: []
        }
    }

    componentDidMount(){
        axios.get('http://127.0.0.1:3000/showList')
            .then(res => {
                this.setState({ chapitres: res.data })
            })
    }
    
    static navigationOptions = {
        title: 'Liste des chapitres',
    };
    
    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    data = {this.state.chapitres}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <ListItem chapitre={item}/>}
                />
            </View>
        );
    }
}

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        margin: 0,
        backgroundColor: '#efefef'
    }
});

export default ListChapitrePage