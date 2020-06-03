import React, { Component,Fragment } from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { Button, SocialIcon } from 'react-native-elements';

const styles = StyleSheet.create({
    backgroundImage: {
        backgroundColor: '#ccc',
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        resizeMode: 'contain',
        opacity: 0.4
    },
    logo: {
        height: 50,
        width: 200,
        marginTop: "30%",
        marginLeft: '25%',
        resizeMode: 'contain',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        // marginTop: 25,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default class Home extends Component {
    
    constructor(props) {
        super(props);
    }
    render() { 
        return ( 
            <Fragment>
                <View style={{ flex: 1}}>
                    <Image style={styles.backgroundImage} source={require('../../Images/car.png')}></Image>
                    <Image style={ styles.logo } source={require('../../Images/logo.png')}></Image>
                    <ScrollView></ScrollView>
                    <View style= { styles.container}>
                        <Button 
                            title = "Sign up" 
                            onPress={()=> this.props.navigation.navigate('Register')}
                            containerStyle = {{ width: '100%', paddingLeft: '10%', paddingRight: '10%', marginBottom : '-80%'}}
                            buttonStyle = {{ borderRadius: 20, backgroundColor: '#000000', color: 'transparent'}}
                        />
                    </View>
                    <View style= { styles.container}>
                        <Button 
                            title = "Log in" 
                            type="outline"
                            onPress={()=> this.props.navigation.navigate('Login')}
                            containerStyle = {{ width: '100%', paddingLeft: '10%', paddingRight: '10%'}}
                            buttonStyle = {{ borderRadius: 20, color: '#000000', borderColor: '#000000', borderWidth: 1.5}}
                        />
                    </View>
                </View>
            </Fragment>
        );
    }
}