import 'react-native-gesture-handler';
import React, { Component, Fragment } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import reducers from './reducers';
import Home from './Screens/NotLoggedIn/home';
import Login from './Screens/NotLoggedIn/login';
import Register from './Screens/NotLoggedIn/register';

import Dashboard from './Screens/LoggedIn/dashboard';

const Stack = createStackNavigator();

export default  class App extends Component {
  
	constructor(props) {
		super(props)
	}

  	render() { 
    	return ( 
			<Fragment>
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
            </Fragment>
		);
  	}
}