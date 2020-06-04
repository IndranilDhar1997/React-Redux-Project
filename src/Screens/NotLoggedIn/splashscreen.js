import React, { Component, Fragment } from 'react';
import {View, Text, ScrollView, Image, StyleSheet, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const styles = StyleSheet.create({
    backgroundImage: {
        backgroundColor: '#ccc',
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        resizeMode: 'contain',
        opacity: 0.8
    },
    logo: {
        height: 50,
        width: 300,
        marginTop: '80%',
        marginLeft: '15%'
    },
    tagLine: {
        fontSize: 20,
        fontWeight: '600',
        marginTop: 15,
        textAlign: 'center',
        opacity: 0.4
    },
    linearGradient: {
        backgroundColor: "transparent",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }
})

export default class SplashScreen extends Component {
    render() { 
        return ( 
            <Fragment>
                <View style={{ flex: 1}}>
                    <ImageBackground style={styles.backgroundImage} source={require('../../Images/car.png')}>
                        <LinearGradient colors={['#FF7F50', '#FED8B1']} locations={[0.3,1.0]} style={styles.linearGradient} />
                    </ImageBackground>
                    <Image style={ styles.logo } source={require('../../Images/logo.png')}></Image>
                    <Text style={ styles.tagLine }>Tag Line Goes Here</Text>
                </View>
            </Fragment>
        );
    }
}