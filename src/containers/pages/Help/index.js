import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import NavBar from '../../../components/organisms/NavBar';

const Help = (props) => {
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
                <Text> Help Page </Text>
            </View>
            <NavBar/>
        </View>
    )
}

export default Help
