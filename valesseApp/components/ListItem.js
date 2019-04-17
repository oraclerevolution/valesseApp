//components/ListItem.js
import React from 'react';
import {StyleSheet, View,Image, Text} from 'react-native';

class ListItem extends React.Component {
    render(){
        const chapitre = this.props.chapitre
        return(
            <View style={styles.main_container}>
                <View style={styles.content_container}>
                    <View style={styles.header_container}>
                        <Image
                          source={require('../assets/icon.png')}
                          style={styles.smallIcon}
                        />
                        <Text style={styles.title_text}>{chapitre.nom_chapitre}</Text>
                        <Text style={styles.date_text}>{chapitre.nb_quizz} quizz</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 40,
        borderWidth: 1,
        margin: 5,
    },
    smallIcon: {
      height: 25,
      width: 25,
      marginRight: 2,
    },
    content_container: {
        flex: 1,
        margin: 5
    },
    header_container: {
        flexDirection: 'row'
      },
      title_text: {
        fontWeight: 'bold',
        fontSize: 18,
        flex: 1,
        flexWrap: 'wrap',
        paddingRight: 5
      },
      date_text: {
        textAlign: 'right',
        fontSize: 14
      }

});

export default ListItem