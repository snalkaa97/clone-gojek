import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import NavBar from '../../../components/organisms/NavBar';

const Orders = (props) => {
    return (
        <View style={{flex: 1}}>
            <View style={{flex: 1}}>
                <Text> Orders Page </Text>
                <Button title="Go to Detail" onPress={()=> props.navigation.navigate('OrderDetail')}></Button>
            </View>
            <NavBar/>
        </View>
    )
}

export default Orders
