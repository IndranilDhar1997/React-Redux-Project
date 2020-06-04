import React, { Component,Fragment } from 'react';
import { View, ToastAndroid, StyleSheet, ScrollView, Image, ImageBackground, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import { SocialIcon } from 'react-native-elements'
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

class Login extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: 'password',
        }
    }

    login = () => {
        let providedUsername = this.props.userData[0].username,
            providedPassword = this.props.userData[0].password;

        if(this.state.username === '' || this.state.username === null || this.state.username === undefined) {
            ToastAndroid.showWithGravity(
                'UserName Cannot be Null',
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM
            );
            return false;
        }
        
        if(this.state.password === '' || this.state.password === null || this.state.password === undefined) {
            ToastAndroid.showWithGravity(
                'Password Cannot be Null',
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM
            );
            return false;
        }

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // Regex to validate email
        if(reg.test(this.state.username) === false) {
            ToastAndroid.showWithGravity(
                'Email Format is Wrong',
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM
            );
            return false;
        }

        if(providedUsername === this.state.username && providedPassword === this.state.password) {
            this.props.navigation.navigate('Dashboard')
        } else if (providedUsername !== this.state.username && providedPassword === this.state.password) {
            ToastAndroid.showWithGravity(
                'Username not matched',
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM
            );
            return false;
        } else if (providedUsername === this.state.username && providedPassword !== this.state.password) {
            ToastAndroid.showWithGravity(
                'Password Not Matched',
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM
            );
            return false;
        } else if (providedUsername !== this.state.username && providedPassword !== this.state.password) {
            ToastAndroid.showWithGravity(
                'Incorrect Credentials',
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM
            );
            return false;
        }
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
                            <Text style= {{ marginLeft: 60, marginBottom: 10, fontWeight: '600', fontSize: 20, color: '#ffffff', opacity: 0.8}}>User Name</Text>
                            <Input
                                placeholder='Reema Sen'
                                name="username"
                                autoCapitalize = "none"
                                containerStyle= {{paddingLeft: '10%', paddingRight: '10%'}}
                                inputContainerStyle = {{ borderRadius: 20, color: '#000000', borderColor: '#E5E4E0', opacity: 0.8, borderWidth: 2 }}
                                inputStyle={{ marginLeft: 10, color: '#ffffff', opacity: 0.8}}
                                value={this.state.username || ''}
                                onChangeText={(username)=> this.setState({ username })}
                            />

                            <Text style= {{ marginLeft: 60, marginBottom: 10, fontWeight: '600', fontSize: 20, color: '#ffffff', opacity: 0.8}}>Password</Text>
                            <Input
                                placeholder='Password'
                                name="password"
                                autoCapitalize= "none"
                                secureTextEntry
                                containerStyle= {{paddingLeft: '10%', paddingRight: '10%'}}
                                inputContainerStyle = {{ borderRadius: 20, color: '#000000', borderColor: '#E5E4E0', opacity: 0.8, borderWidth: 2 }}
                                inputStyle={{ marginLeft: 10, color: '#ffffff', opacity: 0.8}}
                                value={this.state.password}
                                onChangeText={(password)=> this.setState({ password })}
                            />
                            <Text style={{ fontSize: 18, textAlign: 'center', marginBottom: 30, fontWeight: 'bold'}}>Forgot Password? </Text>
                            <Button 
                                title = "Sign in" 
                                onPress={()=> this.login()}
                                containerStyle = {{ width: '100%', paddingLeft: '10%', paddingRight: '10%', paddingTop: '5%', marginBottom: 20}}
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
                        <Text style={{ fontSize: 18, opacity: 0.6, textAlign: 'center', marginTop: 30}}>Don't have an account? <Text style={{fontWeight: 'bold', fontSize: 18}} onPress={()=> this.props.navigation.navigate('Register')}> Sign up</Text></Text>
                    </ScrollView>
                </View>
            </Fragment>
        );
    }
}

const mapStateToProps = state => {
    return { userData : state.loginUserData}
}

export default connect(mapStateToProps, { loginUserData })(Login);