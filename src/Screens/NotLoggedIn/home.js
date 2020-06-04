import React, { Component,Fragment } from 'react';
import { View, StyleSheet, Image, ScrollView, ImageBackground, Text } from 'react-native';
import { Button, SocialIcon } from 'react-native-elements';
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
        marginTop: '30%',
        marginLeft: '15%'
    },
    tagLine: {
        fontSize: 16,
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

export default class Home extends Component {
    
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <Fragment>
                <View style={{ flex: 1}}>
                    <ImageBackground style={styles.backgroundImage}>
                        <LinearGradient colors={['#FF7F50', '#FED8B1']} locations={[0.3,0.6]} style={styles.linearGradient} />
                    </ImageBackground>
                    <Image style={ styles.logo } source={require('../../Images/logo.png')}></Image>
                    <Text style={ styles.tagLine }>Tag Line Goes Here</Text>
                    <Image style={{ resizeMode: 'contain', marginTop: '40%'}} source={require('../../Images/car.png')}></Image>
                    <Button 
                        title = "Sign up" 
                        onPress={()=> this.props.navigation.navigate('Register')}
                        containerStyle = {{ width: '100%', paddingLeft: '10%', paddingRight: '10%', paddingTop: '10%'}}
                        buttonStyle = {{ borderRadius: 20, backgroundColor: '#000000' }}
                    />
                    <Button 
                        title = "Log in" 
                        type="outline"
                        onPress={()=> this.props.navigation.navigate('Login')}
                        containerStyle = {{ width: '100%', paddingLeft: '10%', paddingRight: '10%', paddingTop: '5%'}}
                        buttonStyle = {{ borderRadius: 20, color: '#000000', borderColor: '#000000', borderWidth: 1.5 }}
                    />
                </View>
            </Fragment>
        );
    }
}