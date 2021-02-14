import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import NavBar from '../../../components/organisms/NavBar';

const Account = (props) => {
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
                <Text> Account Page </Text>
            </View>
            <NavBar/>
        </View>
    )
}

export default Account
