import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const GopayFeature = props => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={props.onPress}>
            <Image style={{ width: 36, height: 36 }} source={props.image}></Image>
            <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', marginTop: 15, textAlign: 'center' }}>{props.name}</Text>
            </TouchableOpacity>
        </View>
    );
};

export default GopayFeature;


