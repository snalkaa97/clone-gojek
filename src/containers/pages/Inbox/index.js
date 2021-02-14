import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import NavBar from '../../../components/organisms/NavBar';

const Inbox = (props) => {
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
                <Text> Inbox Page </Text>
            </View>
            <NavBar/>
        </View>
    )
}

export default Inbox
