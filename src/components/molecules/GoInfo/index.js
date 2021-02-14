import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

const GoInfo = props => {
        return (
            <View style={{ padding: 16 }}>
                <View style={{ height: 15, width: 60, marginLeft: -4 }}>
                    <Image source={require('../../../assets/logo/gojek.png')} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }} />
                </View>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1c1c1c', marginTop: 15, marginBottom: 20 }}>Complete your profile</Text>
                <View style={{ flexDirection: 'row', marginBottom: 16 }}>
                    <View>
                        <Image source={require('../../../assets/dummy/facebook-connect.png')} />
                    </View>
                    <View style={{ marginLeft: 16, flex: 1 }}>
                        <Text style={{ fontSize: 15, color: '#4a4a4a', fontWeight: 'bold' }}>Connect with Facebook</Text>
                        <Text style={{ fontSize: 15, fontWeight: 'normal', color: '#4a4a4a', width: '70%' }}>Login faster without verification code</Text>
                    </View>
                </View>
                <TouchableOpacity style={{ backgroundColor: '#61A756', paddingVertical: 11, paddingHorizontal: 12, alignSelf: 'flex-end', borderRadius: 4 }}>
                    <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>CONNECT</Text>
                </TouchableOpacity>
                <View style={{ borderBottomWidth: 1, borderBottomColor: '#E8E9ED', marginTop: 16 }}></View>
            </View>
        )
}

export default GoInfo;
