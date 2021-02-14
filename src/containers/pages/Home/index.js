import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import GoBanner from '../../../components/molecules/GoBanner';
import GoInfo from '../../../components/molecules/GoInfo';
import GoNews from '../../../components/molecules/GoNews';
import SearchFeature from '../../../components/molecules/SearchFeature';
import GopayFeature from '../../../components/organisms/HomeGopayFeature';
import MainFeature from '../../../components/organisms/HomeMainFeature';
import NavBar from '../../../components/organisms/NavBar';
import ScrollableProducts from '../../../components/organisms/ScrollableProducts';

export class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                    {/* search bar */}
                    <SearchFeature />
                    {/* gopay*/}
                    <GopayFeature />
                    {/* main feature */}
                    <MainFeature />
                    {/* Divider */}
                    <View style={{ height: 17, backgroundColor: 'lightgrey', marginTop: 20 }}></View>
                    {/* Go News */}
                    <GoNews onPress={() => this.props.navigation.navigate('NewsDetail')} />
                    {/* Go Info */}
                    <GoInfo />
                    {/* Go Banner */}
                    <GoBanner />
                    {/* Scrollable Products */}
                    <ScrollableProducts />
                </ScrollView>
                {/* Nav Bar*/}
                <NavBar />
            </View>
        )
    }
}

export default Home
