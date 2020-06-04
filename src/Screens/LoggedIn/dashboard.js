import React, { Component, Fragment } from 'react';
import {View } from 'react-native';

import HeaderComponent from './ui/header';
import Tabbar from './ui/tabbar';

export default class Dashboard extends Component {
    
    constructor(props) {
        super(props);
    }

    render() { 
        return ( 
            <Fragment>
                <HeaderComponent />
                <View style={{ backgroundColor: '#F8F8FF'}}></View>
                <Tabbar />
            </Fragment>
        );
    }
}