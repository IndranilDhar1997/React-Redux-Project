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

class Login extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    login = () => {
        // e.preventDefault();
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
                <Image style={styles.backgroundImage} source={require('../../Images/car.png')}></Image>
                <Image style={ styles.logo } source={require('../../Images/logo.png')}></Image>
                <ScrollView>
                    <View style={{ marginTop: '20%'}}>
                        <Input
                            placeholder='test@gmail.com'
                            name="username"
                            autoCapitalize = "none"
                            value={this.state.username || ''}
                            onChangeText={(username)=> this.setState({ username })}
                        />
                        <Input
                            placeholder='test123'
                            name="password"
                            value={this.state.password || ''}
                            autoCapitalize= "none"
                            secureTextEntry
                            onChangeText={(password)=> this.setState({ password })}
                        />
                        <Button 
                            title = "Log in" 
                            type="outline"
                            onPress={()=> this.login()}
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

const mapStateToProps = state => {
    return { userData : state.loginUserData}
}

export default connect(mapStateToProps, { loginUserData })(Login);