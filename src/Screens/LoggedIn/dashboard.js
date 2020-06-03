import React, { Component,Fragment } from 'react';
import { View, Text } from 'react-native';

export default class Dashboard extends Component {
    
    constructor(props) {
        super(props);
    }

    render() { 
        return ( 
            <Fragment>
                <View style={{ flex: 1}}>
                    <Text style={{ fontSize: 20, textAlign: 'center', marginTop: '50%', fontWeight: 'bold'}}>Dashboard Page</Text>
                </View>
            </Fragment>
        );
    }
}