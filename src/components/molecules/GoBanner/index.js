import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

const GoBanner = (props) => {
    return (
        <View style={{ padding: 16, paddingTop: 0 }}>
            <View style={{ position: 'relative' }}>
                <Image source={props.image} style={{ height: 170, width: '100%', borderRadius: 6 }} />
                <View style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.15, borderRadius: 6 }}></View>
                <View style={{ height: 15, width: 55, position: 'absolute', top: 16, left: 16 }}>
                    <Image source={require('../../../assets/logo/white.png')} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }} />
                </View>
                <View style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, paddingBottom: 16 }}>
                    <View>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 8 }}>{props.name}</Text>
                        <Text style={{ fontSize: 12, fontWeight: '500', color: 'white' }}>Quick, before they run!</Text>
                    </View>
                    <View style={{ flex: 1, paddingLeft: 12 }}>
                        <TouchableOpacity style={{ backgroundColor: '#61A756', paddingVertical: 11, paddingHorizontal: 12, alignSelf: 'stretch', borderRadius: 4 }}>
                            <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>GET VOUCER</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#E8E9ED', marginTop: 20 }}></View>
        </View>
    );
};

export default GoBanner;


