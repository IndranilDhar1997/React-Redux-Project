import React, { Component, Fragment } from 'react';
import Dashboard from '../dashboard';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ListItems from '../listItems';
import Notification from '../notification';
import Search from '../search';

const Tab = createBottomTabNavigator();


export default class Tabbar extends Component {
    render() { 
        return ( 
            <Fragment>
                <Tab.Navigator initialRouteName="ListItems" tabBarOptions={{ activeTintColor: '#FF7F50'}}>
                    <Tab.Screen 
                        name="Home" 
                        component={ListItems} 
                        options={{
                            tabBarLabel: 'Home',
                            tabBarIcon: ({ color, size }) => (
                              <Icon name="home" color={color} size={size} />
                            ),
                        }}    
                    />
                    <Tab.Screen 
                        name="Search" 
                        component={Search} 
                        options={{
                            tabBarLabel: 'Search',
                            tabBarIcon: ({ color, size }) => (
                              <Icon name="search" color={color} size={size} />
                            ),
                        }}  
                    />
                    <Tab.Screen 
                        name="Alarm" 
                        component={Notification} 
                        options={{
                            tabBarLabel: 'Alarm',
                            tabBarIcon: ({ color, size }) => (
                              <Icon name="bell" color={color} size={size} />
                            ),
                        }}  
                    />
                </Tab.Navigator>
            </Fragment>
        );
    }
}
