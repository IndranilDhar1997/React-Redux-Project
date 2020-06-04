import React, { Component, Fragment } from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { Card, ListItem, Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({ 
    logo: {
        height: 100,
        width: 300,
        marginTop: '10%',
        marginLeft: '-40%',
        resizeMode: 'contain'
    },
})

export default class ListItems extends Component {
    render() { 
        return ( 
            <ScrollView>
                <View style = {{ flex: 1, flexDirection: 'row'}}>
                    <View style={{ width: '50%'}}>
                        <Card 
                            image={require('../../Images/cardimage.jpeg')}
                            imageStyle={{ height: 50, width: 50, borderRadius: 25, marginLeft: 60 }}
                            containerStyle={{ marginTop: 30, borderRadius: 10 }}
                        >
                            <Text style={{marginLeft: 10, fontSize: 18, fontWeight: 'bold', color: '#FF7F50'}}>Tesla Model 3</Text>
                            <View style = {{ flexDirection: 'row'}}>
                                <View style={{ width: '50%'}}>
                                    <Text style={{marginTop: 10, fontWeight: 'bold', textAlign: 'left', fontSize: 14}}>Price: $20.00</Text>
                                </View>
                                <View style={{ width: '50%'}}>
                                    <Text style={{marginTop: 10, textAlign:'right',fontWeight: 'bold', fontSize: 14}}><Icon name="map-marker-alt" color={'#000000'} size={16} /> Paris</Text>
                                </View>
                            </View>
                            <View style = {{ flexDirection: 'row'}}>
                                <View style={{ width: '30%'}}>
                                    <Text style={{marginTop: 10, fontWeight: 'bold', textAlign: 'left', fontSize: 12}}>78/km</Text>
                                </View>
                                <View style={{ width: '25%'}}>
                                    <Text style={{marginTop: 10,fontWeight: 'bold', fontSize: 12}}>ABC</Text>
                                </View>
                                <View style={{ width: '45%'}}>
                                    <Text style={{marginTop: 10, fontWeight: 'bold', textAlign: 'left', fontSize: 12}}>August 2019</Text>
                                </View>
                            </View>
                            <View style = {{ flexDirection: 'row'}}>
                                <View style={{ width: '30%'}}>
                                    <Text style={{fontSize: 10}}>Capacity</Text>
                                </View>
                                <View style={{ width: '25%'}}>
                                    <Text style={{fontSize: 10}}>Brand</Text>
                                </View>
                                <View style={{ width: '45%'}}>
                                    <Text style={{textAlign: 'left', fontSize: 10}}>Availability</Text>
                                </View>
                            </View>
                            <Image style={ styles.logo } source={require('../../Images/car.png')}></Image>
                        </Card>
                    </View>
                    <View style={{ width: '50%'}}>
                        <Card 
                            image={require('../../Images/cardimage.jpeg')}
                            imageStyle={{ height: 50, width: 50, borderRadius: 25, marginLeft: 60 }}
                            containerStyle={{ marginTop: 30, borderRadius: 10 }}
                        >
                            <Text style={{marginLeft: 10, fontSize: 18, fontWeight: 'bold', color: '#FF7F50'}}>Ferrari 458</Text>
                            <View style = {{ flexDirection: 'row'}}>
                                <View style={{ width: '50%'}}>
                                    <Text style={{marginTop: 10, fontWeight: 'bold', textAlign: 'left', fontSize: 14}}>Price: $20.00</Text>
                                </View>
                                <View style={{ width: '50%'}}>
                                    <Text style={{marginTop: 10, textAlign:'right',fontWeight: 'bold', fontSize: 14}}><Icon name="map-marker-alt" color={'#000000'} size={16} /> Paris</Text>
                                </View>
                            </View>
                            <View style = {{ flexDirection: 'row'}}>
                                <View style={{ width: '30%'}}>
                                    <Text style={{marginTop: 10, fontWeight: 'bold', textAlign: 'left', fontSize: 12}}>78/km</Text>
                                </View>
                                <View style={{ width: '25%'}}>
                                    <Text style={{marginTop: 10,fontWeight: 'bold', fontSize: 12}}>ABC</Text>
                                </View>
                                <View style={{ width: '45%'}}>
                                    <Text style={{marginTop: 10, fontWeight: 'bold', textAlign: 'left', fontSize: 12}}>August 2019</Text>
                                </View>
                            </View>
                            <View style = {{ flexDirection: 'row'}}>
                                <View style={{ width: '30%'}}>
                                    <Text style={{fontSize: 10}}>Capacity</Text>
                                </View>
                                <View style={{ width: '25%'}}>
                                    <Text style={{fontSize: 10}}>Brand</Text>
                                </View>
                                <View style={{ width: '45%'}}>
                                    <Text style={{textAlign: 'left', fontSize: 10}}>Availability</Text>
                                </View>
                            </View>
                            <Image style={ styles.logo } source={require('../../Images/car.png')}></Image>
                        </Card>
                    </View>
                </View>
                <View style = {{ flex: 1, flexDirection: 'row'}}>
                    <View style={{ width: '50%'}}>
                        <Card 
                            image={require('../../Images/cardimage.jpeg')}
                            imageStyle={{ height: 50, width: 50, borderRadius: 25, marginLeft: 60 }}
                            containerStyle={{ marginTop: 30, borderRadius: 10 }}
                        >
                            <Text style={{marginLeft: 10, fontSize: 18, fontWeight: 'bold', color: '#FF7F50'}}>Tesla Model 3</Text>
                            <View style = {{ flexDirection: 'row'}}>
                                <View style={{ width: '50%'}}>
                                    <Text style={{marginTop: 10, fontWeight: 'bold', textAlign: 'left', fontSize: 14}}>Price: $20.00</Text>
                                </View>
                                <View style={{ width: '50%'}}>
                                    <Text style={{marginTop: 10, textAlign:'right',fontWeight: 'bold', fontSize: 14}}><Icon name="map-marker-alt" color={'#000000'} size={16} /> Paris</Text>
                                </View>
                            </View>
                            <View style = {{ flexDirection: 'row'}}>
                                <View style={{ width: '30%'}}>
                                    <Text style={{marginTop: 10, fontWeight: 'bold', textAlign: 'left', fontSize: 12}}>78/km</Text>
                                </View>
                                <View style={{ width: '25%'}}>
                                    <Text style={{marginTop: 10,fontWeight: 'bold', fontSize: 12}}>ABC</Text>
                                </View>
                                <View style={{ width: '45%'}}>
                                    <Text style={{marginTop: 10, fontWeight: 'bold', textAlign: 'left', fontSize: 12}}>August 2019</Text>
                                </View>
                            </View>
                            <View style = {{ flexDirection: 'row'}}>
                                <View style={{ width: '30%'}}>
                                    <Text style={{fontSize: 10}}>Capacity</Text>
                                </View>
                                <View style={{ width: '25%'}}>
                                    <Text style={{fontSize: 10}}>Brand</Text>
                                </View>
                                <View style={{ width: '45%'}}>
                                    <Text style={{textAlign: 'left', fontSize: 10}}>Availability</Text>
                                </View>
                            </View>
                            <Image style={ styles.logo } source={require('../../Images/car.png')}></Image>
                        </Card>
                    </View>
                    <View style={{ width: '50%'}}>
                        <Card 
                            image={require('../../Images/cardimage.jpeg')}
                            imageStyle={{ height: 50, width: 50, borderRadius: 25, marginLeft: 60 }}
                            containerStyle={{ marginTop: 30, borderRadius: 10 }}
                        >
                            <Text style={{marginLeft: 10, fontSize: 18, fontWeight: 'bold', color: '#FF7F50'}}>Ferrari 458</Text>
                            <View style = {{ flexDirection: 'row'}}>
                                <View style={{ width: '50%'}}>
                                    <Text style={{marginTop: 10, fontWeight: 'bold', textAlign: 'left', fontSize: 14}}>Price: $20.00</Text>
                                </View>
                                <View style={{ width: '50%'}}>
                                    <Text style={{marginTop: 10, textAlign:'right',fontWeight: 'bold', fontSize: 14}}><Icon name="map-marker-alt" color={'#000000'} size={16} /> Paris</Text>
                                </View>
                            </View>
                            <View style = {{ flexDirection: 'row'}}>
                                <View style={{ width: '30%'}}>
                                    <Text style={{marginTop: 10, fontWeight: 'bold', textAlign: 'left', fontSize: 12}}>78/km</Text>
                                </View>
                                <View style={{ width: '25%'}}>
                                    <Text style={{marginTop: 10,fontWeight: 'bold', fontSize: 12}}>ABC</Text>
                                </View>
                                <View style={{ width: '45%'}}>
                                    <Text style={{marginTop: 10, fontWeight: 'bold', textAlign: 'left', fontSize: 12}}>August 2019</Text>
                                </View>
                            </View>
                            <View style = {{ flexDirection: 'row'}}>
                                <View style={{ width: '30%'}}>
                                    <Text style={{fontSize: 10}}>Capacity</Text>
                                </View>
                                <View style={{ width: '25%'}}>
                                    <Text style={{fontSize: 10}}>Brand</Text>
                                </View>
                                <View style={{ width: '45%'}}>
                                    <Text style={{textAlign: 'left', fontSize: 10}}>Availability</Text>
                                </View>
                            </View>
                            <Image style={ styles.logo } source={require('../../Images/car.png')}></Image>
                        </Card>
                    </View>
                </View>
                <View style = {{ flex: 1, flexDirection: 'row'}}>
                    <View style={{ width: '50%'}}>
                        <Card 
                            image={require('../../Images/cardimage.jpeg')}
                            imageStyle={{ height: 50, width: 50, borderRadius: 25, marginLeft: 60 }}
                            containerStyle={{ marginTop: 30, borderRadius: 10 }}
                        >
                            <Text style={{marginLeft: 10, fontSize: 18, fontWeight: 'bold', color: '#FF7F50'}}>Tesla Model 3</Text>
                            <View style = {{ flexDirection: 'row'}}>
                                <View style={{ width: '50%'}}>
                                    <Text style={{marginTop: 10, fontWeight: 'bold', textAlign: 'left', fontSize: 14}}>Price: $20.00</Text>
                                </View>
                                <View style={{ width: '50%'}}>
                                    <Text style={{marginTop: 10, textAlign:'right',fontWeight: 'bold', fontSize: 14}}><Icon name="map-marker-alt" color={'#000000'} size={16} /> Paris</Text>
                                </View>
                            </View>
                            <View style = {{ flexDirection: 'row'}}>
                                <View style={{ width: '30%'}}>
                                    <Text style={{marginTop: 10, fontWeight: 'bold', textAlign: 'left', fontSize: 12}}>78/km</Text>
                                </View>
                                <View style={{ width: '25%'}}>
                                    <Text style={{marginTop: 10,fontWeight: 'bold', fontSize: 12}}>ABC</Text>
                                </View>
                                <View style={{ width: '45%'}}>
                                    <Text style={{marginTop: 10, fontWeight: 'bold', textAlign: 'left', fontSize: 12}}>August 2019</Text>
                                </View>
                            </View>
                            <View style = {{ flexDirection: 'row'}}>
                                <View style={{ width: '30%'}}>
                                    <Text style={{fontSize: 10}}>Capacity</Text>
                                </View>
                                <View style={{ width: '25%'}}>
                                    <Text style={{fontSize: 10}}>Brand</Text>
                                </View>
                                <View style={{ width: '45%'}}>
                                    <Text style={{textAlign: 'left', fontSize: 10}}>Availability</Text>
                                </View>
                            </View>
                            <Image style={ styles.logo } source={require('../../Images/car.png')}></Image>
                        </Card>
                    </View>
                    <View style={{ width: '50%'}}>
                        <Card 
                            image={require('../../Images/cardimage.jpeg')}
                            imageStyle={{ height: 50, width: 50, borderRadius: 25, marginLeft: 60 }}
                            containerStyle={{ marginTop: 30, borderRadius: 10 }}
                        >
                            <Text style={{marginLeft: 10, fontSize: 18, fontWeight: 'bold', color: '#FF7F50'}}>Tesla Model 3</Text>
                            <View style = {{ flexDirection: 'row'}}>
                                <View style={{ width: '50%'}}>
                                    <Text style={{marginTop: 10, fontWeight: 'bold', textAlign: 'left', fontSize: 14}}>Price: $20.00</Text>
                                </View>
                                <View style={{ width: '50%'}}>
                                    <Text style={{marginTop: 10, textAlign:'right',fontWeight: 'bold', fontSize: 14}}><Icon name="map-marker-alt" color={'#000000'} size={16} /> Paris</Text>
                                </View>
                            </View>
                            <View style = {{ flexDirection: 'row'}}>
                                <View style={{ width: '30%'}}>
                                    <Text style={{marginTop: 10, fontWeight: 'bold', textAlign: 'left', fontSize: 12}}>78/km</Text>
                                </View>
                                <View style={{ width: '25%'}}>
                                    <Text style={{marginTop: 10,fontWeight: 'bold', fontSize: 12}}>ABC</Text>
                                </View>
                                <View style={{ width: '45%'}}>
                                    <Text style={{marginTop: 10, fontWeight: 'bold', textAlign: 'left', fontSize: 12}}>August 2019</Text>
                                </View>
                            </View>
                            <View style = {{ flexDirection: 'row'}}>
                                <View style={{ width: '30%'}}>
                                    <Text style={{fontSize: 10}}>Capacity</Text>
                                </View>
                                <View style={{ width: '25%'}}>
                                    <Text style={{fontSize: 10}}>Brand</Text>
                                </View>
                                <View style={{ width: '45%'}}>
                                    <Text style={{textAlign: 'left', fontSize: 10}}>Availability</Text>
                                </View>
                            </View>
                            <Image style={ styles.logo } source={require('../../Images/car.png')}></Image>
                        </Card>
                    </View>
                </View>
                <View style = {{ flex: 1, flexDirection: 'row'}}>
                    <View style={{ width: '50%'}}>
                        <Card 
                            image={require('../../Images/cardimage.jpeg')}
                            imageStyle={{ height: 50, width: 50, borderRadius: 25, marginLeft: 60 }}
                            containerStyle={{ marginTop: 30, borderRadius: 10 }}
                        >
                            <Text style={{marginLeft: 10, fontSize: 18, fontWeight: 'bold', color: '#FF7F50'}}>Tesla Model 3</Text>
                            <View style = {{ flexDirection: 'row'}}>
                                <View style={{ width: '50%'}}>
                                    <Text style={{marginTop: 10, fontWeight: 'bold', textAlign: 'left', fontSize: 14}}>Price: $20.00</Text>
                                </View>
                                <View style={{ width: '50%'}}>
                                    <Text style={{marginTop: 10, textAlign:'right',fontWeight: 'bold', fontSize: 14}}><Icon name="map-marker-alt" color={'#000000'} size={16} /> Paris</Text>
                                </View>
                            </View>
                            <View style = {{ flexDirection: 'row'}}>
                                <View style={{ width: '30%'}}>
                                    <Text style={{marginTop: 10, fontWeight: 'bold', textAlign: 'left', fontSize: 12}}>78/km</Text>
                                </View>
                                <View style={{ width: '25%'}}>
                                    <Text style={{marginTop: 10,fontWeight: 'bold', fontSize: 12}}>ABC</Text>
                                </View>
                                <View style={{ width: '45%'}}>
                                    <Text style={{marginTop: 10, fontWeight: 'bold', textAlign: 'left', fontSize: 12}}>August 2019</Text>
                                </View>
                            </View>
                            <View style = {{ flexDirection: 'row'}}>
                                <View style={{ width: '30%'}}>
                                    <Text style={{fontSize: 10}}>Capacity</Text>
                                </View>
                                <View style={{ width: '25%'}}>
                                    <Text style={{fontSize: 10}}>Brand</Text>
                                </View>
                                <View style={{ width: '45%'}}>
                                    <Text style={{textAlign: 'left', fontSize: 10}}>Availability</Text>
                                </View>
                            </View>
                            <Image style={ styles.logo } source={require('../../Images/car.png')}></Image>
                        </Card>
                    </View>
                    <View style={{ width: '50%'}}>
                        <Card 
                            image={require('../../Images/cardimage.jpeg')}
                            imageStyle={{ height: 50, width: 50, borderRadius: 25, marginLeft: 60 }}
                            containerStyle={{ marginTop: 30, borderRadius: 10 }}
                        >
                            <Text style={{marginLeft: 10, fontSize: 18, fontWeight: 'bold', color: '#FF7F50'}}>Tesla Model 3</Text>
                            <View style = {{ flexDirection: 'row'}}>
                                <View style={{ width: '50%'}}>
                                    <Text style={{marginTop: 10, fontWeight: 'bold', textAlign: 'left', fontSize: 14}}>Price: $20.00</Text>
                                </View>
                                <View style={{ width: '50%'}}>
                                    <Text style={{marginTop: 10, textAlign:'right',fontWeight: 'bold', fontSize: 14}}><Icon name="map-marker-alt" color={'#000000'} size={16} /> Paris</Text>
                                </View>
                            </View>
                            <View style = {{ flexDirection: 'row'}}>
                                <View style={{ width: '30%'}}>
                                    <Text style={{marginTop: 10, fontWeight: 'bold', textAlign: 'left', fontSize: 12}}>78/km</Text>
                                </View>
                                <View style={{ width: '25%'}}>
                                    <Text style={{marginTop: 10,fontWeight: 'bold', fontSize: 12}}>ABC</Text>
                                </View>
                                <View style={{ width: '45%'}}>
                                    <Text style={{marginTop: 10, fontWeight: 'bold', textAlign: 'left', fontSize: 12}}>August 2019</Text>
                                </View>
                            </View>
                            <View style = {{ flexDirection: 'row'}}>
                                <View style={{ width: '30%'}}>
                                    <Text style={{fontSize: 10}}>Capacity</Text>
                                </View>
                                <View style={{ width: '25%'}}>
                                    <Text style={{fontSize: 10}}>Brand</Text>
                                </View>
                                <View style={{ width: '45%'}}>
                                    <Text style={{textAlign: 'left', fontSize: 10}}>Availability</Text>
                                </View>
                            </View>
                            <Image style={ styles.logo } source={require('../../Images/car.png')}></Image>
                        </Card>
                    </View>
                </View>
 
            </ScrollView>
        );
    }
}