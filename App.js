import React, { useEffect, useState} from 'react';

import { Camera } from 'expo-camera';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

function App() {

    const [hasPermission, setHasPermission] = useState(null);
    const [data, setData] = useState(null);
    const [scanned, setScanned] = useState(false);
  
    useEffect(() => {
        (async () => {
          const { status } = await Camera.requestCameraPermissionsAsync();
          setHasPermission(status === 'granted');
        })();
      }, []);

    const goToDetailsComponent = (scannedData) => {
        /* const data = scannedData.split('@'); */
        setData('asdsd')
        
    }

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);        
        setTimeout(() => {alert(`Bar code with type ${type} and data ${data} has been scanned!`)}, 1000)
        setScanned(false);
      };

    if (hasPermission === null) {
        return <View />
    } else if (hasPermission === false) {
        return <Text>No access to camera</Text>
    } else {
        return (
            <>
            <View style={{ flex: 1 }}>
                <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={[StyleSheet.absoluteFill, styles.container]}
                    barCodeTypes={['pdf417']}
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
            <Text>{data}</Text>
            </>
        );
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

export default App;
