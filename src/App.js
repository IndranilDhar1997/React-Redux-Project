import 'react-native-gesture-handler';
import React, { Component, Fragment } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import reducers from './reducers';

import SplashScreen from './Screens/NotLoggedIn/splashscreen';
import Home from './Screens/NotLoggedIn/home';
import Login from './Screens/NotLoggedIn/login';
import Register from './Screens/NotLoggedIn/register';

import Dashboard from './Screens/LoggedIn/dashboard';

const Stack = createStackNavigator();

export default  class App extends Component {
  
	constructor(props) {
        super(props);
        this.state = {
            appReady: false
        }
    }
    
    componentDidMount() {
        this.delayAppOpen();
    }

    delayAppOpen() {
        setTimeout(function() {
            this.setState({ appReady: true });
        }.bind(this), 2000);
    }


  	render() { 
    	return ( 
			<Fragment>
                {this.state.appReady ? (
                    <Provider store = {createStore(reducers)}>
                        <NavigationContainer>
                            <Stack.Navigator
                                initialRouteName="Home"
                                screenOptions={{ gestureEnabled: false }}
                            >
                                <Stack.Screen
                                    name="Home"
                                    component={Home}
                                    options={{headerShown: false}}
                                />
                                <Stack.Screen 
                                    name="Login"
                                    component={Login}
                                    options={{headerShown: false}}
                                />
                                <Stack.Screen 
                                    name="Register"
                                    component={Register}
                                    options={{headerShown: false}}
                                />
                                <Stack.Screen 
                                    name="Dashboard"
                                    component={Dashboard}
                                    options={{headerShown: false}}
                                />
                            </Stack.Navigator>
                        </NavigationContainer>
                    </Provider>
                ) : (
                    <SplashScreen />
                )}
            </Fragment>
		);
  	}
}