import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Icon } from 'native-base';

const IconWithText = (props) => {
    return (
        <View>
            <View style={{ width: 60, height: 60, backgroundColor: '#61A756', borderRadius: 80, paddingTop: 14 }}>
                {/* <IconAction/> */}
                <Icon style={{ color: '#f5f5f5', fontSize: 30, textAlign: 'center' }} name={props.icon} />
            </View>
            <Text style={{ maxWidth: 70, textAlign: 'center', color: 'grey', marginTop: 6 }}>{props.title}</Text>
        </View>
    )
}

const IconAction = () => {
    return (
        <View>
            <Icon style={{ color: '#f5f5f5', fontSize: 30, textAlign: 'center' }} name="ios-call" />
        </View>
    )
}

const ScanQRCode = (props) => {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={StyleSheet.absoluteFillObject}
                />
                {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
            </View>
            <View style={{ height: 200 }}>
                <View style={{ alignItems: 'center', marginTop: 8, marginBottom: 18 }}>
                    <View style={{ width: 40, height: 3, backgroundColor: '#E0E0E0', marginVertical: 1 }}></View>
                    <View style={{ width: 40, height: 3, backgroundColor: '#E0E0E0', marginVertical: 1 }}></View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', paddingHorizontal: 16 }}>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'black' }}>More Option</Text>
                    <Text style={{ fontSize: 14, color: '#61A756', fontWeight: 'bold' }}>SHORTCUT</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginTop: 14, width: '100%' }}>
                    <View style={{ flexDirection: 'row', alignItems: 'flex-start', width: 180, justifyContent: 'space-between', paddingHorizontal: 16 }}>
                        <IconWithText title="Phone number" icon="ios-call" />
                        <IconWithText title="Gopay code" icon="ios-qr-code" />
                    </View>
                    <View style={{ width: 1, height: 60, backgroundColor: 'lightgrey' }}></View>
                    <View style={{ flex: 1, paddingLeft: 12 }}>
                        <Text style={{ color: 'grey' }}>
                            Your recent Gopay receivers will show here. No Admin fees!
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ScanQRCode

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
});
