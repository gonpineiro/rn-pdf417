import React from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';
import { BarCodeScanner, Camera, Permissions } from 'expo';

export default class CodeDecoderScreen extends React.Component {

    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
    };
  
    async componentWillMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    goToDetailsComponent(scannedData) {
        const data = scannedData.split('@');
        this.props.navigation.navigate('Details', {
            userData: {
                procedure: data[0],
                lastname: data[1],
                firstname: data[2],
                gender: data[3],
                id: data[4],
                copy: data[5],
                birthdate: data[6],
                creation_date: data[7],
                x_number: data[8]
            }
        })
    }
  
    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View />;
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                <View style={{ flex: 1 }}>
                    <BarCodeScanner
                        onBarCodeRead={(scan) => this.goToDetailsComponent(scan.data)}
                        style={[StyleSheet.absoluteFill, styles.container]}
                    >
                        <View style={styles.layerTop} />
                        <View style={styles.layerCenter}>
                            <View style={styles.layerLeft} />
                            <View style={styles.focused} />
                            <View style={styles.layerRight} />
                        </View>
                        <View style={styles.layerBottom} />
                    </BarCodeScanner>
                </View>
            );
        }
    }
}

const opacity = 'rgba(0, 0, 0, .6)';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    layerTop: {
        flex: 2,
        backgroundColor: opacity
    },
    layerCenter: {
        flex: 1,
        flexDirection: 'row'
    },
    layerLeft: {
        flex: 1,
        backgroundColor: opacity
    },
    focused: {
        flex: 10
    },
    layerRight: {
        flex: 1,
        backgroundColor: opacity
    },
    layerBottom: {
        flex: 2,
        backgroundColor: opacity
    },
});