import React from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import * as Animatable from 'react-native-animatable';
import { Font } from 'expo';

const AnimatableTouchableHighlight = Animatable.createAnimatableComponent(TouchableHighlight);

export default class HomeScreen extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         initialBank: 50000
    //     };

    //     setInterval(() => {
    //         this.setState(previousState => {
    //             return { initialBank: previousState.initialBank - 1 };
    //         });
    //         if(this.state.initialBank <= 0) {
    //             clearInterval(downloadTimer);
    //         };
    //     }, 0);
    // }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={[styles.container]}>
                {/* <ImageBackground source={require('../assets/bg.jpg')} style={styles.bgImage}>
                    <Image source={require('../assets/logo.png')} style={{ width: 200, height: 33 }}/>
                </ImageBackground> */}
                <View style={styles.logoWrapper}>
                    <Animatable.Image animation="fadeIn" source={require('../assets/logo_white.png')} style={{ width: 200, height: 33 }} />
                </View>

                <View style={styles.content}>
                    <Animatable.Text style={styles.text} duration={700} animation="fadeInUp" easing="ease-in-out">
                        Para obtener tus datos sólo tenes que presionar en el siguiente botón y escanear el código de barras que hay en tu documento.
                    </Animatable.Text>

                    <AnimatableTouchableHighlight
                        animation="fadeInUp"
                        delay={100}
                        duration={700}
                        easing="ease-in-out"
                        onPress={() => {
                            this.props.navigation.navigate('Decoder')
                        }}
                        style={styles.button}
                        underlayColor='#003054'
                    >
                        <Text style={{color: '#fff'}}>Escanear DNI</Text>
                    </AnimatableTouchableHighlight>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#fff',
    },
    logoWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#003054',
        height: '40%',
        width: '100%'
    },
    content: {
        marginTop: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },    
    button: {
        backgroundColor: '#003054',
        paddingTop: 8,
        paddingRight: 15,
        paddingBottom: 8,
        paddingLeft: 15,
        marginTop: 25
    },
    text: {
        color: '#003054',
        fontSize: 14,
        textAlign: 'center',
        paddingHorizontal: 20
    },
});
