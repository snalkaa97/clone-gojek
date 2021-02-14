import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import GopayFeature from '../../molecules/GopayFeature'
import { withNavigation } from 'react-navigation'

export class HomeGopayFeature extends Component {
    render() {
        return (
            <View style={{ marginHorizontal: 17, marginTop: 8 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: '#2C5FB8', borderTopLeftRadius: 5, borderTopRightRadius: 5, padding: 15 }}>
                    <Image source={require('../../../assets/icon/gopay.png')} />
                    <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 17 }}>Rp. 1.000.000</Text>
                </View>
                <View style={{ flexDirection: 'row', backgroundColor: '#2F65BD', paddingTop: 20, paddingBottom: 14, borderBottomLeftRadius: 4, borderBottomRightRadius: 4 }}>
                    <GopayFeature onPress={() => this.props.navigation.navigate('ScanQRCode')} name='Pay' image={require('../../../assets/icon/pay.png')} />
                    <GopayFeature onPress={() => this.props.navigation.navigate('')} name='Nearby' image={require('../../../assets/icon/nearby.png')} />
                    <GopayFeature onPress={() => this.props.navigation.navigate('')} name='Top Up' image={require('../../../assets/icon/topup.png')} />
                    <GopayFeature onPress={() => this.props.navigation.navigate('')} name='More' image={require('../../../assets/icon/more.png')} />
                </View>
            </View>
        )
    }
}

export default withNavigation (HomeGopayFeature)

