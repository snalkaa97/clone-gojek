import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

const ScrollableItem = props => {
    return (
        <View style={{ marginRight: 16 }}>
            <View style={{ width: 150, height: 150, borderRadius: 8, overflow: 'hidden' }}>
                <Image source={props.image} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1 }} />
            </View>
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1c1c1c', marginTop: 12 }}>{props.name}</Text>
        </View>
    );
};

export default ScrollableItem;


