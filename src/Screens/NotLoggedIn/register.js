import React, { Component,Fragment } from 'react';
import { View, ToastAndroid, StyleSheet, ScrollView, Image } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { loginUserData } from '../../actions'; 

const styles = StyleSheet.create({
    backgroundImage: {
        backgroundColor: '#ccc',
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        resizeMode: 'contain',
        opacity: 0.1
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
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default class Login extends Component {
    
    constructor(props) {
        super(props);
    }

    

    render() { 
        return ( 
            <Fragment>
                <View style={{ flex: 1}}>
                <Image style={styles.backgroundImage} source={require('../../Images/car.png')}></Image>
                <Image style={ styles.logo } source={require('../../Images/logo.png')}></Image>
                <ScrollView>
                    <View style={{ marginTop: '20%'}}>
                        <Input
                            placeholder='Full Name'
                            name="fullname"
                        />
                        <Input
                            placeholder='Email'
                            name="username"
                            autoCapitalize = "none"
                        />
                        <Input
                            placeholder='Contact No.'
                            name="contactNumber"
                            keyboardType={"number-pad"}
                        />
                        <Input
                            placeholder='Password'
                            name="password"
                            autoCapitalize= "none"
                            secureTextEntry
                        />
                        <Button 
                            title = "Sign up" 
                            type="outline"
                            onPress={()=> this.props.navigation.navigate('Login')}
                            containerStyle = {{ width: '100%', paddingLeft: '10%', paddingRight: '10%', color: 'transparent' }}
                            buttonStyle = {{ borderRadius: 20, backgroundColor: '#000000', color: 'transparent' }}
                        />
                    </View>
                </ScrollView>
                </View>
            </Fragment>
        );
    }
}