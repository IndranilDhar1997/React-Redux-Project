import React, { Component, Fragment } from 'react';
import { View, Text } from 'native-base';

export default class Notification extends Component {
    render() { 
        return ( 
            <View>
                <Text style={{ marginTop: '20%', textAlign: 'center'}}>Notification</Text>
            </View>
        );
    }
}