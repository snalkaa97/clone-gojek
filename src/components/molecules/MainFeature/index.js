import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'

const MainFeature = props => {
    const color = props.color
    return (
        <View style={{ width: `${100 / 4}%`, alignItems: 'center', marginBottom: 18 }}>
            <View style={{ height: 58, width: 58, borderWidth: 1, borderColor: color, borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={props.image}></Image>
            </View>
            <Text style={{ fontSize: 11, fontWeight: 'bold', alignSelf: 'center', marginTop: 6 }}>{props.name}</Text>
        </View>
    );
};

export default MainFeature;


