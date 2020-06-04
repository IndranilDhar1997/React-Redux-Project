import React, { Component, Fragment } from 'react';
import { View } from 'react-native';
import { Header } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';



export default class HeaderComponent extends Component {
    
    constructor(props) {
        super(props);
    }

    render() { 
        return (
            <View>
                <Header
                    leftComponent={
                        <Icon 
                            name = "arrow-left"
                            size={25}
                        />
                    }
                    centerComponent={{ text: 'Product Listing', style: { marginLeft: -200, fontWeight: 'bold', fontSize: 20}}}
                    rightComponent={
                        <Icon 
                            name="bars" 
                            size={25}
                            style={{ marginRight: 5}}
                        />
                    }
                    containerStyle={{
                        backgroundColor: '#ffffff',
                        justifyContent: 'space-around',
                        height: 80,
                        marginTop: -20
                    }}
                />
            </View>
        );
    }
}