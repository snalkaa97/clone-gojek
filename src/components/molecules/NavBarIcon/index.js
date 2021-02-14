import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const NavBarIcon = (props) => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <TouchableOpacity onPress={props.onPress}>
            <Image style={{ width: 26, height: 26 }} source={props.image} />
            <Text style={{ fontSize: 10, marginTop: 4, color: props.active ? '#43AB4A':'#545454' }}>{props.name}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default NavBarIcon;

