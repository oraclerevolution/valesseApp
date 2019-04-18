//components/ListChapitre.js
import React from 'react';
import {StyleSheet, ActivityIndicator, View, FlatList} from 'react-native';
import ListItem from './ListItem';
import {getChapitreFromApi} from '../API/api';

class ListChapitrePage extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            chapitres: [],
            isLoading: false
        }
    }

    componentDidMount(){
        this.setState({ isLoading: true })
        getChapitreFromApi().then(data => {
            this.setState({ 
                chapitres: data.results,
                isLoading: false
             })
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
            
            {
                this.state.isLoading ?
                    <View style={styles.loading_container}>
                        <ActivityIndicator size='large' />
                    </View>
                    : null
            }
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
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 100,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default ListChapitrePage