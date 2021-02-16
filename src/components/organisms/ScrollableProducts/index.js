import React, { Component } from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import  ScrollableItem from '../../molecules/ScrollableItem'
import Axios from 'react-native-axios'



export class ScollableProducts extends Component {
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
            <View>
                <View style={{ height: 15, width: 60, marginLeft: 16 }}>
                    <Image source={require('../../../assets/logo/go-food.png')} style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, paddingHorizontal: 16 }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#1c1c1c' }}>Nearby Restaurant</Text>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#61A756' }}>See All</Text>
                </View>
                <ScrollView horizontal style={{ flexDirection: 'row', paddingLeft: 16 }}>
                    {
                        this.state.foods.map((i) => {
                            const img = 'https://demo.openbill.bestekno.id/uploads/category/' + i.image;
                            console.log(img)
                            return (
                                <ScrollableItem name={i.title} image={{uri: img}} />
                            )
                        })
                    }
                </ScrollView>
                <View style={{ borderBottomWidth: 1, borderBottomColor: '#E8E9ED', marginTop: 16, marginHorizontal: 16 }}></View>
            </View>
        )
    }
}

export default ScollableProducts

