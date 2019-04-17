import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import chapitres from '../helpers/QuizzData';
import ListItem from './ListItem';

class ListChapitrePage extends React.Component{

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