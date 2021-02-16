import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

const GoNews = (props) => {
    return (
        <View style={{ paddingTop: 16, paddingHorizontal: 16 }}>
            <View style={{ position: 'relative' }}>
                <Image source={props.image} style={{ height: 170, width: '100%', borderRadius: 6 }} />
                <View style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, backgroundColor: 'black', opacity: 0.2, borderRadius: 6 }}></View>
                <View style={{ height: 15, width: 55, position: 'absolute', top: 16, left: 16 }}>
                    <Image source={require('../../../assets/logo/white.png')} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }} />
                </View>
            </View>
            <View style={{ paddingTop: 16, paddingBottom: 20, borderBottomWidth: 1, borderBottomColor: '#E8E9ED' }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1C1C1C' }}>{props.name}</Text>
                <Text style={{ fontSize: 14, fontWeight: 'normal', color: '#7A7A7A', marginBottom: 11 }}>Dimas Drajat selamatkan pinalti, Timnas U-23 kalahkan Brunei</Text>
                <TouchableOpacity style={{ backgroundColor: '#61A756', paddingVertical: 11, paddingHorizontal: 12, alignSelf: 'flex-end', borderRadius: 4 }} onPress={props.onPress}>
                    <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>READ</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default GoNews;


