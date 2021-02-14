import React, { Component } from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import  NavBarIcon from '../../molecules/NavBarIcon'
import { withNavigation } from 'react-navigation'

export class NavBar extends Component {
    render() {
        return (
            <View style={{ height: 54, flexDirection: 'row', backgroundColor: 'white' }}>
                <NavBarIcon onPress={()=> this.props.navigation.navigate('Home')} name='Home' image={require('../../../assets/icon/home-active.png')} active />
                <NavBarIcon onPress={()=> this.props.navigation.navigate('Orders')} name='Orders' image={require('../../../assets/icon/order.png')} />
                <NavBarIcon onPress={()=> this.props.navigation.navigate('Help')} name='Help' image={require('../../../assets/icon/help.png')} />
                <NavBarIcon onPress={()=> this.props.navigation.navigate('Inbox')} name='Inbox' image={require('../../../assets/icon/inbox.png')} />
                <NavBarIcon onPress={()=> this.props.navigation.navigate('Account')} name='Account' image={require('../../../assets/icon/account.png')} />
            </View>
        )
    }
}

export default withNavigation (NavBar)

