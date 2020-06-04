import React, { Component,Fragment } from 'react';
import { View, ToastAndroid, StyleSheet, ScrollView, Image, ImageBackground, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { SocialIcon } from 'react-native-elements'

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
        marginTop: '10%',
        marginLeft: '15%'
    },
    tagLine: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 10,
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
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
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
                    <ImageBackground style={styles.backgroundImage}>
                        <LinearGradient colors={['#FF7F50', '#FED8B1']} locations={[0.3,1.1]} style={styles.linearGradient} />
                    </ImageBackground>
                    <Image style={ styles.logo } source={require('../../Images/logo.png')}></Image>
                    <Text style={ styles.tagLine }>Tag Line Goes Here</Text>
                    <ScrollView>
                        <View style={{ marginTop: '20%'}}>
                            <Text style= {{ marginLeft: 60, marginBottom: 10, fontWeight: '600', fontSize: 20, color: '#ffffff', opacity: 0.8}}>Full Name</Text>
                            <Input
                                placeholder='Reema Sen'
                                name="fullname"
                                containerStyle= {{paddingLeft: '10%', paddingRight: '10%'}}
                                inputContainerStyle = {{ borderRadius: 20, color: '#000000', borderColor: '#E5E4E0', opacity: 0.8, borderWidth: 2 }}
                                inputStyle={{ marginLeft: 10, color: '#ffffff', opacity: 0.8}}
                            />
                            <Text style= {{ marginLeft: 60, marginBottom: 10, fontWeight: '600', fontSize: 20, color: '#ffffff', opacity: 0.8}}>Email</Text>
                            <Input
                                placeholder='abc@gmail.com'
                                name="username"
                                autoCapitalize = "none"
                                containerStyle= {{paddingLeft: '10%', paddingRight: '10%'}}
                                inputContainerStyle = {{ borderRadius: 20, color: '#000000', borderColor: '#E5E4E0', opacity: 0.8, borderWidth: 2 }}
                                inputStyle={{ marginLeft: 10, color: '#ffffff', opacity: 0.8}}
                            />
                            <Text style= {{ marginLeft: 60, marginBottom: 10, fontWeight: '600', fontSize: 20, color: '#ffffff', opacity: 0.8}}>Contact No</Text>
                            <Input
                                placeholder='+1-123456789'
                                name="contactNumber"
                                keyboardType={"number-pad"}
                                containerStyle= {{paddingLeft: '10%', paddingRight: '10%'}}
                                inputContainerStyle = {{ borderRadius: 20, color: '#000000', borderColor: '#E5E4E0', opacity: 0.8, borderWidth: 2 }}
                                inputStyle={{ marginLeft: 10, color: '#ffffff', opacity: 0.8}}
                            />
                            <Text style= {{ marginLeft: 60, marginBottom: 10, fontWeight: '600', fontSize: 20, color: '#ffffff', opacity: 0.8}}>Password</Text>
                            <Input
                                placeholder='Password'
                                name="password"
                                autoCapitalize= "none"
                                secureTextEntry
                                value="password"
                                containerStyle= {{paddingLeft: '10%', paddingRight: '10%'}}
                                inputContainerStyle = {{ borderRadius: 20, color: '#000000', borderColor: '#E5E4E0', opacity: 0.8, borderWidth: 2 }}
                                inputStyle={{ marginLeft: 10, color: '#ffffff', opacity: 0.8}}
                            />
                            <Button 
                                title = "Sign up" 
                                onPress={()=> this.props.navigation.navigate('Login')}
                                containerStyle = {{ width: '100%', paddingLeft: '10%', paddingRight: '10%', paddingTop: '5%'}}
                                buttonStyle = {{ borderRadius: 20, backgroundColor: '#000000' }}
                            />
                        </View>
                        <View style={styles.container}>
                            <View>
                                <SocialIcon 
                                    type='facebook' 
                                    iconSize= {26}
                                    light={true}
                                />
                            </View>
                            <View>
                                <SocialIcon 
                                    type='google-plus' 
                                    iconSize= {26}
                                    light={true}
                                />
                            </View>
                            <View>
                                <SocialIcon 
                                    type='wechat' 
                                    iconSize= {26}
                                    light={true}
                                />
                            </View>
                        </View>
                        <Text style={{ fontSize: 16, opacity: 0.6, textAlign: 'center', marginTop: 30}}>Already have an account? <Text style={{fontWeight: 'bold', fontSize: 18}} onPress={()=> this.props.navigation.navigate('Login')}> Sign In</Text></Text>
                    </ScrollView>
                </View>
            </Fragment>
        );
    }
}