import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';

export default class InscriptionPage extends React.Component{
    render(){
        return(
            <View style={styles.containerView}>
                <View style={styles.imageView}>
                    <Image
                        style={styles.stretch}
                        source={require('../assets/online_page.png')}
                    />
                </View>
                <View style={styles.lienView}>

                    <View style={styles.part1}>
                        <View style={styles.element_flottant_1}>
                            <Text style={styles.topic}>Résumé cours</Text>
                        </View>
                        <View style={styles.element_flottant_2}>
                            <Text style={styles.topic}>Résumé cours</Text>
                        </View>
                    </View>

                    <View style={styles.part2}>
                        <View style={styles.element_flottant_3}>
                            <Text style={styles.topic}>Résumé cours</Text>
                        </View>
                        <View style={styles.element_flottant_4}>
                            <Text style={styles.topic}>Résumé cours</Text>
                        </View>
                    </View>
                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    part1: {
        flex: 1,
        flexDirection: 'row'
    },
    topic: {
      textAlign:'center',
    },
    part2: {
        flex: 1,
        flexDirection: 'row'
    },
    element_flottant_1: {
        borderWidth: 1,
        flexDirection: 'row',
        width: '50%',
        alignItems: 'center',
        justifyContent:'center'
    },
    element_flottant_2: {
        borderWidth: 1,
        width: '50%',
        alignItems: 'center',
        justifyContent:'center'
    },
    element_flottant_3: {
        borderWidth: 1,
        flexDirection: 'row',
        width: '50%',
        alignItems: 'center',
        justifyContent:'center'
    },
    element_flottant_4: {
        borderWidth: 1,
        width: '50%',
        alignItems: 'center',
        justifyContent:'center'
    },
    containerView: {
        flex: 1,
    },
    imageView: {
        flex: 1,
        margin: 0,
        padding: 0
    },
    lienView: {
        flex: 1,
        margin:0,
        padding: 0
    },
    stretch: {
        height:300,
        width: '100%',
    }
})