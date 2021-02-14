import React, { Component } from 'react'
import { Text, View } from 'react-native'
import MainFeature from '../../molecules/MainFeature'

export class HomeMainFeature extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 0, marginTop: 18 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', flexWrap: 'wrap' }}>
                    <MainFeature name='GO-RIDE' image={require('../../../assets/icon/go-ride.png')} />
                    <MainFeature name='GO-CAR' image={require('../../../assets/icon/go-car.png')} />
                    <MainFeature name='GO-BLUEBIRD' image={require('../../../assets/icon/go-bluebird.png')} />
                    <MainFeature name='GO-SEND' image={require('../../../assets/icon/go-send.png')} />
                    <MainFeature name='GO-DEALS' image={require('../../../assets/icon/go-deals.png')} />
                    <MainFeature name='GO-PULSA' image={require('../../../assets/icon/go-pulsa.png')} />
                    <MainFeature name='GO-FOOD' image={require('../../../assets/icon/go-food.png')} />
                    <MainFeature name='MORE' image={require('../../../assets/icon/go-more.png')} />
                </View>
            </View>
        )
    }
}

export default HomeMainFeature

