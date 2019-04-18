//components/ListChapitre.js
import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import chapitres from '../helpers/QuizzData';
import ListItem from './ListItem';
import API from '../API/api';

class ListChapitrePage extends React.Component{

    getChapitres = event => {
        event.preventDefault();
        API.get('showList')
            .then(res => {
                console.log(res)
                console.log(res.data)
            })
    }

    static navigationOptions = {
        title: 'Liste des chapitres',
    };
    
    render(){
        return(
            <View style={styles.container}>
                <FlatList
                    data = {chapitres}
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