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
import Axios from 'react-native-axios'

export class Home extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            foods: [],
        };
    }

    sendGetRequest = async () => {
        try {
            const resp = await Axios.get('https://demo.openbill.bestekno.id/api/menu/category?limit=10&offset=0&code=FOOD');
            console.log(resp.data);
            this.setState({
                foods: resp.data.data.rows,
            });
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    };

    componentDidMount(){
        this.sendGetRequest();
    }

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
                    <ScrollView horizontal style={{ flexDirection: 'row', paddingLeft: 16 }}>
                        {
                            this.state.foods.map((i) => {
                                const img = 'https://demo.openbill.bestekno.id/uploads/category/' + i.image;
                                console.log(img)
                                return (
                                    // <ScrollableItem name={i.title} image={{uri: img}} />
                                    <GoNews name={i.title} image={{uri: img}} />
                                )
                            })
                        }
                    </ScrollView>
                    {/* Go Info */}
                    <GoInfo />
                    {/*  Scrollable Banners*/}
                    <GoBanner/>
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
