import React from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';
import UserAvatar from 'react-native-user-avatar';
import * as Animatable from 'react-native-animatable';
import { Video } from 'expo';

export default class HiScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    capitalize(str) {
        const lower = str.toLowerCase();
        const capit = lower.replace(/\b\w/g, l => l.toUpperCase());
        return capit;
    }

    componentDidMount(){
        const userData = this.props.navigation.state.params.userData;
        // Start counting when the page is loaded
        this.timeoutHandle = setTimeout(()=>{
            this.props.navigation.navigate('Details', {userData})
        }, 6000);
   }

   componentWillUnmount(){
        clearTimeout(this.timeoutHandle);
   }

    render() {
        const { navigation } = this.props;
        const userData = navigation.getParam('userData', null);
        
        return (
        <View style={styles.container}>

            <Animatable.View animation="fadeOutLeft" delay={3000} style={styles.hiView}>
                <Animatable.View animation="fadeOut" delay={2500}>
                    <Animatable.Text animation="fadeIn" style={styles.hiViewText}>
                        ¡Hola {this.capitalize(userData.firstname)}!
                    </Animatable.Text>
                </Animatable.View>
            </Animatable.View>

        </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    hiView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#003054',
        
    },
    hiViewText: {
        color: '#fff',
        fontSize: 40,
        letterSpacing: 1,
        textAlign: 'center',
        zIndex: 9999,
    },
  })